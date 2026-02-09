import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from 'src/database/entities';

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
}
