import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';
export declare class HabitDayRepository extends BaseRepository<any> {
    constructor(prisma: PrismaService);
    findByUserHabit(userHabitId: string): Promise<any>;
}
