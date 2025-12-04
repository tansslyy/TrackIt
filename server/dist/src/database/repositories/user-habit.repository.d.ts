import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';
export declare class UserHabitRepository extends BaseRepository<any> {
    constructor(prisma: PrismaService);
    findByUser(userId: string): Promise<any>;
}
