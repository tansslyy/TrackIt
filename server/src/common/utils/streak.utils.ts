import { HabitLog } from '@prisma/client';
import { isSameDay, startOfDay, subDays } from 'date-fns';

export function calculateCurrentStreak(logs: HabitLog[]): number {
  if (!logs || !logs.length) return 0;

  const sortedLogs = logs
    .map((log) => ({ ...log, date: new Date(log.date) }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const today = startOfDay(new Date());
  let streak = 0;

  const hasLogToday = sortedLogs.some((log) => isSameDay(log.date, today));

  let checkDate = hasLogToday ? subDays(today, 1) : subDays(today, 1);
  if (hasLogToday) streak = 1;

  while (true) {
    const hasLog = sortedLogs.some((log) => isSameDay(log.date, checkDate));
    if (hasLog) {
      streak++;
      checkDate = subDays(checkDate, 1);
    } else {
      break;
    }
  }

  return streak;
}
