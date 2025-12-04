"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../database/repositories/user.repository");
const already_registered_exception_1 = require("../../common/exceptions/already-registered.exception");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const not_registered_exception_1 = require("../../common/exceptions/not-registered.exception");
const entity_not_found_exception_1 = require("../../common/exceptions/entity-not-found.exception");
let AuthService = class AuthService {
    userRepository;
    jwtService;
    config;
    constructor(userRepository, jwtService, config) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.config = config;
    }
    async validateUser(username, password) {
        const user = await this.userRepository.findByUsername(username);
        if (!user) {
            throw new entity_not_found_exception_1.EntityNotFoundException('User');
        }
        const matchPassword = await this.checkPassword(password, user.passwordHash);
        if (!matchPassword) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        const { passwordHash, ...userWithoutHash } = user;
        return userWithoutHash;
    }
    async register({ username, email, password }) {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new already_registered_exception_1.AlreadyRegisteredException();
        }
        const passwordHash = await this.hashPassword(password);
        const data = { username, email, passwordHash };
        await this.userRepository.create(data);
    }
    async login({ username, password }) {
        const user = await this.userRepository.findByUsername(username);
        if (!user)
            throw new not_registered_exception_1.NotRegisteredException();
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!isPasswordValid)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const token = this.generateToken(user.id);
        return { token };
    }
    generateToken(userId) {
        return this.jwtService.sign({ sub: userId });
    }
    async hashPassword(password) {
        const saltRounds = 10;
        return bcryptjs_1.default.hash(password, saltRounds);
    }
    async checkPassword(passsword, hash) {
        return bcryptjs_1.default.compare(passsword, hash);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map