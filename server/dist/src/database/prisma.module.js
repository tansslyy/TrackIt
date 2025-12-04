"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const user_repository_1 = require("./repositories/user.repository");
const user_habit_repository_1 = require("./repositories/user-habit.repository");
const base_repository_1 = require("./repositories/base.repository");
const category_repository_1 = require("./repositories/category.repository");
const habit_day_repository_1 = require("./repositories/habit-day.repository");
const habit_log_repository_1 = require("./repositories/habit-log.repository");
const habit_repository_1 = require("./repositories/habit.repository");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            user_repository_1.UserRepository,
            user_habit_repository_1.UserHabitRepository,
            base_repository_1.BaseRepository,
            category_repository_1.CategoryRepository,
            habit_day_repository_1.HabitDayRepository,
            habit_log_repository_1.HabitLogRepository,
            habit_repository_1.HabitRepository,
        ],
        exports: [
            prisma_service_1.PrismaService,
            user_repository_1.UserRepository,
            user_habit_repository_1.UserHabitRepository,
            base_repository_1.BaseRepository,
            category_repository_1.CategoryRepository,
            habit_day_repository_1.HabitDayRepository,
            habit_log_repository_1.HabitLogRepository,
            habit_repository_1.HabitRepository,
        ],
    })
], PrismaModule);
//# sourceMappingURL=prisma.module.js.map