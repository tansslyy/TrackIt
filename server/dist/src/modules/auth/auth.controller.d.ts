import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dtos';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<void>;
    login(body: LoginDto): Promise<{
        token: string;
    }>;
}
