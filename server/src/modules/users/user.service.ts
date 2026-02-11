import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/database/entities';
import { UpdateUserDto } from './dto/update-user.dto';
import { IdenticalPasswordException } from 'src/common/exceptions';
import * as bcrypt from 'bcryptjs';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findByEmail(email);
  }

  async create(data: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.create(data);
  }

  async findOne(id: string): Promise<UserEntity | null> {
    return this.userRepository.findById(id);
  }

  async update(userId: string, dto: UpdateUserDto): Promise<UserEntity> {
    if (dto.email) {
      const existingUser = await this.userRepository.findByEmail(dto.email);

      if (existingUser && existingUser.id !== userId) {
        throw new BadRequestException('This email  is already taken');
      }
    }

    return this.userRepository.update(userId, dto);
  }

  async updatePassword(userId: string, dto: ChangePasswordDto) {
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

    if (!user.passwordHash) {
      throw new ForbiddenException(
        'You logged in via Google. You cannot change password.',
      );
    }

    const isOldPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.passwordHash,
    );

    if (!isOldPasswordCorrect) {
      throw new ForbiddenException('Wrong old password');
    }

    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    await this.userRepository.update(userId, {
      passwordHash: newPasswordHash,
    });
  }

  async updateAvatar(userId: string, avatarUrl: string) {
    return this.userRepository.update(userId, { avatarUrl: avatarUrl });
  }
}
