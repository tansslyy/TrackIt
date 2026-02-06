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
  Query,
} from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { AuthGuard } from '@nestjs/passport';
import { LibraryCategoryDto } from './dto/library-category.dto';
import { GetMonthQueryDto } from './dto/get-month-query.dto';

interface RequestWithUser extends Request {
  user: { id: string };
}

@UseGuards(AuthGuard('jwt'))
@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  create(@Body() dto: CreateHabitDto, @Req() req: RequestWithUser) {
    return this.habitsService.createOrLinkHabit(req.user.id, dto);
  }

  @Get('library')
  findLibrary(): Promise<LibraryCategoryDto[]> {
    return this.habitsService.findLibrary();
  }

  @Get('calendar')
  findMonth(@Req() req: RequestWithUser, @Query() query: GetMonthQueryDto) {
    return this.habitsService.findMonth(req.user.id, query);
  }

  @Get('daily')
  findDaily(@Req() req: RequestWithUser, @Query() query: GetMonthQueryDto) {
    return this.habitsService.findDaily(req.user.id, query);
  }

  @Patch(':id/toggle')
  toggleCompletion(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Query('date') date?: string,
  ) {
    return this.habitsService.toggleCompletion(req.user.id, id, date);
  }

  @Get()
  findAll(@Req() req: RequestWithUser) {
    return this.habitsService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitsService.findOne(id);
  }

  @Get('stats')
  getUserStats(@Req() req: RequestWithUser) {
    return this.habitsService.getUserStats(req.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitDto: UpdateHabitDto,
    @Req() req: RequestWithUser,
  ) {
    return this.habitsService.update(req.user.id, id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: RequestWithUser) {
    return this.habitsService.remove(req.user.id, id);
  }
}
