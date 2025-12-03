import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
export declare class HabitRepository extends BaseRepository<any> {
    constructor(prisma: PrismaService);
    findByName(name: string): Promise<any>;
}
