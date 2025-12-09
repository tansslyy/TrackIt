import { Module } from '@nestjs/common';
import { JwtStrategy } from './strategies';
import { JwtGuard } from './guards';

@Module({
  providers: [JwtStrategy, JwtGuard],
  exports: [JwtStrategy, JwtGuard],
})
export class SecurityModule {}
