import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../../security/guards';
import { User } from 'generated/prisma';
import { GetUser } from '../auth/decorator';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getme(@GetUser() user: User) {
    return user;
  }
}
