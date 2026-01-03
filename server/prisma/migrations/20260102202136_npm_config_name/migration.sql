-- DropForeignKey
ALTER TABLE "habit_logs" DROP CONSTRAINT "habit_logs_user_habit_id_fkey";

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_user_habit_id_fkey" FOREIGN KEY ("user_habit_id") REFERENCES "user_habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;
