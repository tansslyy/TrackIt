import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../security/guards';
import { User } from 'generated/prisma';

@Controller('users')
export class UserController {}
