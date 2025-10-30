import { PrismaService } from '../prisma.service';
import { UserEntity } from '../entities';
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<UserEntity | null>;
}
