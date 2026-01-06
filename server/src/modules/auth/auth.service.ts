import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { LoginDto, RegisterDto } from './dtos';
import { AlreadyRegisteredException } from 'src/common/exceptions/already-registered.exception';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { NotRegisteredException } from 'src/common/exceptions/not-registered.exception';
import { EntityNotFoundException } from 'src/common/exceptions/entity-not-found.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

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

  async register({
    username,
    email,
    password,
  }: RegisterDto): Promise<{ token: string }> {
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
    const token = this.generateToken(newUser.id);

    return { token };
  }

  async login({ username, password }: LoginDto): Promise<{ token: string }> {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new NotRegisteredException();

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    const token = this.generateToken(user.id);
    return { token };
  }

  generateToken(userId: string): string {
    return this.jwtService.sign({ sub: userId });
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
