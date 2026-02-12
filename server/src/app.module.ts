import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/user.module';
import { HabitsModule } from './modules/habits/habits.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    PrismaModule,
    UsersModule,
    HabitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
