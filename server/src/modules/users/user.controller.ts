import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../security/guards';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {}
