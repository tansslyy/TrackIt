-- DropForeignKey
ALTER TABLE "habit_days" DROP CONSTRAINT "habit_days_user_habit_id_fkey";

-- AddForeignKey
ALTER TABLE "habit_days" ADD CONSTRAINT "habit_days_user_habit_id_fkey" FOREIGN KEY ("user_habit_id") REFERENCES "user_habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
