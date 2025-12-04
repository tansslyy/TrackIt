import { ConfigService } from '@nestjs/config';
import { User } from 'generated/prisma';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/database/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly config;
    private readonly prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: any): Promise<Omit<User, 'passwordHash'>>;
}
export {};
