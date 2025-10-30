export declare class UserEntity {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    deletedAt?: Date | null;
}
