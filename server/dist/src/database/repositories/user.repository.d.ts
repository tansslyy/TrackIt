import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { UserEntity } from '../entities';
import { User } from 'generated/prisma';
export declare class UserRepository extends BaseRepository<User> {
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<UserEntity | null>;
    findByUsername(username: string): Promise<UserEntity | null>;
}
