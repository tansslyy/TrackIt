import { UserRepository } from 'src/database/repositories/user.repository';
import { LoginDto, RegisterDto } from './dtos';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    private config;
    constructor(userRepository: UserRepository, jwtService: JwtService, config: ConfigService);
    validateUser(username: string, password: string): Promise<{
        id: string;
        username: string;
        email: string;
        createdAt?: Date;
        deletedAt?: Date | null;
    }>;
    register({ username, email, password }: RegisterDto): Promise<void>;
    login({ username, password }: LoginDto): Promise<{
        token: string;
    }>;
    generateToken(userId: string): string;
    private hashPassword;
    private checkPassword;
}
