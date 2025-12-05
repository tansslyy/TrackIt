-- CreateEnum
CREATE TYPE "RepeatTime" AS ENUM ('DAILY', 'WEEKLY', 'CUSTOM');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETED', 'NOT_COMPLETED', 'POSTPONED');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "default_habits" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category_id" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "default_habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_habits" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "habit_id" TEXT NOT NULL,
    "repeatType" "RepeatTime" NOT NULL DEFAULT 'DAILY',
    "repeat_interval" INTEGER,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),

    CONSTRAINT "user_habits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_logs" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "user_habit_id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'NOT_COMPLETED',
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_days" (
    "id" TEXT NOT NULL,
    "user_habit_id" TEXT NOT NULL,
    "day_of_week" "DayOfWeek" NOT NULL,

    CONSTRAINT "habit_days_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "default_habits_name_isDefault_key" ON "default_habits"("name", "isDefault");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "default_habits" ADD CONSTRAINT "default_habits_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_habits" ADD CONSTRAINT "user_habits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_habits" ADD CONSTRAINT "user_habits_habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "default_habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_user_habit_id_fkey" FOREIGN KEY ("user_habit_id") REFERENCES "user_habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_days" ADD CONSTRAINT "habit_days_user_habit_id_fkey" FOREIGN KEY ("user_habit_id") REFERENCES "user_habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
