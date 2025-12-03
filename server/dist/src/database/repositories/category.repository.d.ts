import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';
export declare class CategoryRepository extends BaseRepository<any> {
    constructor(prisma: PrismaService);
    findByName(name: string): Promise<any>;
}
