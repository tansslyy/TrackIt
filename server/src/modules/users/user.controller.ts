import { Body, Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/security/guards';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtGuard)
  @Patch('me')
  async updateProfile(@Req() req: Request, @Body() body: UpdateUserDto) {
    const userId = (req.user as any).id;
    const updateUser = await this.userService.update(userId, body);
    const { passwordHash, ...result } = updateUser;
    return result;
  }
}
