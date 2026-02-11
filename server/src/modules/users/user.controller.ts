import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from 'src/security/guards';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { ChangePasswordDto } from './dto/change-password.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { CustomImageValidator } from 'src/common/validators/image-file.validator';

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

  @UseGuards(JwtGuard)
  @Patch('me/password')
  async changePassword(@Req() req: Request, @Body() dto: ChangePasswordDto) {
    const userId = (req.user as any).id;
    await this.userService.updatePassword(userId, dto);
    return { message: 'Password updated successfully' };
  }

  @UseGuards(JwtGuard)
  @Post('me/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `avatar-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async uploadAvatar(
    @Req() req: Request,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 2 * 1024 * 1024 }),
          new CustomImageValidator({}),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const userId = (req.user as any).id;

    const avatarUrl = `/uploads/${file.filename}`;

    await this.userService.updateAvatar(userId, avatarUrl);

    return { message: 'Avatar uploaded successfully', avatarUrl: avatarUrl };
  }
}
