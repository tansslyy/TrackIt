import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ForgotPasswordDTO,
  LoginDto,
  RegisterDto,
  ResetPasswordDTO,
  UpdatePasswordDTO,
} from './dtos';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { WEEK_IN_MS } from 'src/common/constants';
import { JwtGuard } from 'src/security/guards';
import { AccessTokenResponse } from './responses';
import { use } from 'passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenResponse> {
    const { accessToken, refreshToken } = await this.authService.register(body);
    this.setRefreshTokenCookie(res, refreshToken);
    return { accessToken, message: 'You are registered successfully' };
  }

  @Post('login')
  async login(
    @Body() body: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenResponse> {
    const { accessToken, refreshToken } = await this.authService.login(body);
    this.setRefreshTokenCookie(res, refreshToken);
    return { accessToken, message: 'Success' };
  }

  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenResponse> {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
      throw new UnauthorizedException('No refresh token provided');
    }

    const tokens = await this.authService.refreshTokens(refreshToken);

    this.setRefreshTokenCookie(res, tokens.refreshToken);

    return { accessToken: tokens.accessToken };
  }

  @UseGuards(JwtGuard)
  @Post('updatePassword')
  async updatePassword(
    @Body() body: UpdatePasswordDTO,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AccessTokenResponse> {
    const userId = (req.user as any).id;
    const tokens = await this.authService.updatePassword(body, userId);
    this.setRefreshTokenCookie(res, tokens.refreshToken);
    return {
      accessToken: tokens.accessToken,
      message: 'Password updated successfully',
    };
  }

  @Post('forgotPassword')
  async forgotPassword(
    @Body() body: ForgotPasswordDTO,
  ): Promise<{ message: string }> {
    await this.authService.forgotPassword(body.email);
    return { message: 'Link sent to email' };
  }

  @Post('resetPassword/:token')
  async resetPassword(
    @Param('token') token: string,
    @Body() body: ResetPasswordDTO,
  ): Promise<{ message: string }> {
    await this.authService.resetPassword(token, body.password);
    return { message: 'Password changed successfully' };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    return { message: 'Logged out successfully' };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@Req() req: Request) {
    return req.user;
  }

  private setRefreshTokenCookie(res: Response, token: string) {
    res.cookie('refreshToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      expires: new Date(Date.now() + WEEK_IN_MS),
    });
  }
}
