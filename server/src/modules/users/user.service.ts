import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/database/entities';
import { UpdateUserDto } from './dto/update-user.dto';

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
}
