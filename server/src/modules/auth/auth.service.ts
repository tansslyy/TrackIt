import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { LoginDto, RegisterDto, UpdatePasswordDTO } from './dtos';
import { AlreadyRegisteredException } from 'src/common/exceptions/already-registered.exception';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { NotRegisteredException } from 'src/common/exceptions/not-registered.exception';
import { EntityNotFoundException } from 'src/common/exceptions/entity-not-found.exception';
import { PrismaService } from 'src/database/prisma.service';
import { HOUR, WEEK_IN_MS } from 'src/common/constants';
import { IdenticalPasswordException } from 'src/common/exceptions';
import { RefreshTokenRepository } from 'src/database/repositories/refresh-token.repository';
import { EmailTokenRepository } from 'src/database/repositories/email-token.repository';
import { TokenType } from '@prisma/client';
import { resolve } from 'path';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
    private config: ConfigService,
    private prisma: PrismaService,
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly emailTokenRepository: EmailTokenRepository,
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

    const tokenFromDb = await this.refreshTokenRepository.findByUserId(userId);

    if (!tokenFromDb) throw new UnauthorizedException('Token hab been revoked');

    const isMatch = await bcrypt.compare(
      incomingRefreshToken,
      tokenFromDb.hashedToken,
    );
    if (!isMatch) throw new UnauthorizedException('Access Denied');

    if (new Date() > tokenFromDb.expiresAt) {
      await this.refreshTokenRepository.deleteByUserId(userId);
      throw new UnauthorizedException('Token expired');
    }

    const tokens = await this.getTokens(userId, payload.email);

    await this.saveRefreshToken(userId, tokens.refreshToken);
    return tokens;
  }

  async updatePassword(dto: UpdatePasswordDTO, userId: string) {
    const { oldPassword, newPassword } = dto;
    if (oldPassword === newPassword) {
      throw new IdenticalPasswordException(
        'New password cannot be the same as old password',
      );
    }

    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isOldPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.passwordHash,
    );
    if (!isOldPasswordCorrect) {
      throw new ForbiddenException('Wrong old password');
    }

    const newPasswordHash = await this.hashPassword(newPassword);

    const updateUser = await this.userRepository.update(userId, {
      passwordHash: newPasswordHash,
    });

    const tokens = await this.getTokens(updateUser.id, updateUser.email);
    await this.saveRefreshToken(updateUser.id, tokens.refreshToken);
    return tokens;
  }

  async forgotPassword(email: string): Promise<void> {
    const isRegistered = await this.isRegistered('', email);

    if (!isRegistered) {
      throw new NotRegisteredException();
    }

    const token = await this.createEmailToken(email, TokenType.RESETTING);

    const resetLink = `${this.config.get('FRONT_BASE_URL')}/reset-password/${token}`;
    console.log(`
      ============================================
      [EMAIL STUB] To: ${email}
      Subject: Reset Password
      Link: ${resetLink}
      ============================================
      `);
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    const tokenRecord = await this.emailTokenRepository.findByToken(token);
    if (!tokenRecord) throw new UnauthorizedException('Invalid token');

    if (tokenRecord.expiresAt < new Date()) {
      await this.emailTokenRepository.delete(token);
      throw new UnauthorizedException('Token expired');
    }

    const user = await this.userRepository.findByEmail(tokenRecord.email);
    if (!user) throw new EntityNotFoundException('User');

    const newHash = await this.hashPassword(newPassword);
    await this.userRepository.update(user.id, { passwordHash: newHash });

    await this.emailTokenRepository.delete(token);
    await this.refreshTokenRepository.deleteByUserId(user.id);
  }

  private async isRegistered(
    username: string,
    email: string,
  ): Promise<boolean> {
    const user = await this.userRepository.find({
      OR: [{ username }, { email }],
    });
    return !!user;
  }
  generateToken(userId: string): string {
    return this.jwtService.sign({ sub: userId });
  }

  private async saveRefreshToken(userId: string, refreshToken: string) {
    const hash = await bcrypt.hash(refreshToken, 10);
    const expiresAt = new Date(Date.now() + WEEK_IN_MS);

    const existingToken =
      await this.refreshTokenRepository.findByUserId(userId);

    if (existingToken) {
      await this.refreshTokenRepository.updateByUserId(userId, hash);
    } else {
      await this.refreshTokenRepository.create({
        userId,
        hashedToken: hash,
        expiresAt,
      });
    }
  }

  private async createEmailToken(
    email: string,
    tokenType: TokenType,
  ): Promise<string> {
    await this.checkIsTokenAlreadyExist(email, tokenType);

    const expiresAt = new Date(Date.now() + HOUR);

    const tokenRecord = await this.emailTokenRepository.create({
      email,
      type: tokenType,
      expiresAt,
    });

    return tokenRecord.token;
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

  private async checkIsTokenAlreadyExist(
    email: string,
    tokenType: TokenType,
  ): Promise<void> {
    const tokenExists = await this.emailTokenRepository.find({
      email,
      type: tokenType,
    });

    if (tokenExists) {
      await this.emailTokenRepository.delete(tokenExists.token);
    }
  }
}
