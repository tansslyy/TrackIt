import { useState, useEffect } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { HabitService } from "../../services/habit.service";
import type { UserHabit } from "../../api/types/models/user-habit.model";
import styles from "../../components/calendar/Calendar.module.css";
import { CalendarGrid } from "../../components/Calendar/CalendarGrid";
import { SidePanel } from "../../components/Calendar/SidePanel/SidePanel";
import { CalendarHeader } from "../../components/Calendar/CalendarHeader/CalendarHeader";

export const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarHabits, setCalendarHabits] = useState<UserHabit[]>([]);
  const [dailyHabits, setDailyHabits] = useState<UserHabit[]>([]);
  const [loadingDaily, setLoadingDaily] = useState(false);

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const dateStr = format(currentMonth, "yyyy-MM");
        const data = await HabitService.getCalendar({ date: dateStr });
        setCalendarHabits(data);
      } catch (e) {
        console.error("Error loading calendar:", e);
      }
    };
    fetchCalendar();
  }, [currentMonth]);

  useEffect(() => {
    if (!selectedDate) return;

    const fetchDaily = async () => {
      setLoadingDaily(true);
      try {
        const dateStr = format(selectedDate, "yyyy-MM-dd");
        const data = await HabitService.getDaily({ date: dateStr });
        setDailyHabits(data);
      } catch (e) {
        console.error("Error loading daily habits:", e);
      } finally {
        setLoadingDaily(false);
      }
    };
    fetchDaily();
  }, [selectedDate]);

  const handleToggleHabit = async (habitId: string) => {
    setDailyHabits((prev) =>
      prev.map((h) =>
        h.id === habitId ? { ...h, isCompletedToday: !h.isCompletedToday } : h,
      ),
    );

    try {
      console.log(`Toggled habit ${habitId}`);
    } catch (error) {
      console.error("Error toggling habit", error);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContent}>
        <CalendarHeader
          currentMonth={currentMonth}
          onPrev={() => setCurrentMonth(subMonths(currentMonth, 1))}
          onNext={() => setCurrentMonth(addMonths(currentMonth, 1))}
        />
        <CalendarGrid
          currentMonth={currentMonth}
          habits={calendarHabits}
          onSelectDate={(date) => setSelectedDate(date)}
        />
      </div>

      <SidePanel
        isOpen={!!selectedDate}
        date={selectedDate || new Date()}
        onClose={() => setSelectedDate(null)}
        habits={dailyHabits}
        loading={loadingDaily}
        onToggleHabit={handleToggleHabit}
      />
    </div>
  );
};
