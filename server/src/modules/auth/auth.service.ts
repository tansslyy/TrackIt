import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { LoginDto, RegisterDto } from './dtos';
import { AlreadyRegisteredException } from 'src/common/exceptions/already-registered.exception';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { NotRegisteredException } from 'src/common/exceptions/not-registered.exception';
import { EntityNotFoundException } from 'src/common/exceptions/entity-not-found.exception';
import { PrismaService } from 'src/database/prisma.service';
import { WEEK_IN_MS } from 'src/common/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
    private config: ConfigService,
    private prisma: PrismaService,
  ) {}

  async getTokens(userId: string, email: string) {
    const payload = { sub: userId, email };

    const at = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get<string>('JWT_SECRET'),
    });

    const rt = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: this.config.get<string>('JWT_REFRESH_TOKEN'),
    });

    return {
      accessToken: at,
      refreshToken: rt,
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.findByUsername(username);

    if (!user) {
      throw new EntityNotFoundException('User');
    }

    const matchPassword = await this.checkPassword(password, user.passwordHash);

    if (!matchPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    const { passwordHash, ...userWithoutHash } = user;

    return userWithoutHash;
  }

  async register({ username, email, password }: RegisterDto) {
    const existingEmail = await this.userRepository.findByEmail(email);
    if (existingEmail) {
      throw new AlreadyRegisteredException(
        'A user with this email address already exists',
      );
    }

    const existingUsername = await this.userRepository.findByUsername(username);
    if (existingUsername) {
      throw new AlreadyRegisteredException('This username is already taken');
    }

    const passwordHash = await this.hashPassword(password);

    const newUser = await this.userRepository.create({
      username,
      email,
      passwordHash,
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.saveRefreshToken(newUser.id, tokens.refreshToken);

    return tokens;
  }

  async login({ username, password }: LoginDto) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new NotRegisteredException();

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const tokens = await this.getTokens(user.id, user.email);
    await this.saveRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  async refreshTokens(incomingRefreshToken: string) {
    let payload;
    try {
      payload = await this.jwtService.verifyAsync(incomingRefreshToken, {
        secret: this.config.get<string>('JWT_REFRESH_TOKEN'),
      });
    } catch (e) {
      throw new UnauthorizedException('Invalis Refresh Token');
    }

    const userId = payload.sub;
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        refreshToken: true,
      },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const tokenFromDb = await this.findTokenInDb(
      user.refreshToken,
      incomingRefreshToken,
    );

    if (!tokenFromDb) {
      throw new UnauthorizedException('Token has been revoked or invalid');
    }

    if (new Date() > tokenFromDb.expiresAt) {
      await this.prisma.refreshToken.delete({ where: { id: tokenFromDb.id } });
      throw new UnauthorizedException('Token expired');
    }

    await this.prisma.refreshToken.delete({ where: { id: tokenFromDb.id } });

    const tokens = await this.getTokens(user.id, user.email);

    await this.saveRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  private async findTokenInDb(storedTokens: any[], incomingToken: string) {
    for (const storedToken of storedTokens) {
      const isMatch = await bcrypt.compare(
        incomingToken,
        storedToken.hashedToken,
      );
      if (isMatch) {
        return storedToken;
      }
    }
    return null;
  }

  generateToken(userId: string): string {
    return this.jwtService.sign({ sub: userId });
  }

  private async saveRefreshToken(userId: string, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);

    await this.prisma.refreshToken.create({
      data: {
        userId,
        hashedToken: hash,
        expiresAt: new Date(Date.now() + WEEK_IN_MS),
      },
    });
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;

    return bcrypt.hash(password, saltRounds);
  }

  private async checkPassword(
    passsword: string,
    hash: string,
  ): Promise<boolean> {
    return bcrypt.compare(passsword, hash);
  }
}
