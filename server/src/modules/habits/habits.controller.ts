import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Request,
} from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'http';

interface RequestWithUser extends Request {
  user: { id: string };
}

@UseGuards(AuthGuard('jwt'))
@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  create(@Req() req: RequestWithUser, @Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.create(req.user.id, createHabitDto);
  }

  @Get('library')
  findLibrary() {
    return this.habitsService.findLibrary();
  }

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.habitsService.findAll(req.user.id);
  }

  @Get('today')
  findToday(@Request() req) {
    return this.habitsService.findToday(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
    return this.habitsService.update(+id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitsService.remove(+id);
  }
}
