import React, { useState } from "react";
import { DayOfWeek, RepeatTime } from "../../../api/types/enums";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import toast from "react-hot-toast";
import type { UpdateHabitDto } from "../../../api/types/dtos/habits/update-habit.dto";
import { HabitService } from "../../../services/habit.service";
import styles from "./EditHabitModal.module.css";

const COLORS = [
  "#4f46e5",
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
];
const ICONS = [
  "📝",
  "🏃‍♂️",
  "💧",
  "📚",
  "🧘‍♂️",
  "💪",
  "💰",
  "🥗",
  "💤",
  "🎸",
  "💻",
  "🧹",
];
const DAYS_OF_WEEK_OPTIONS = [
  { label: "Пн", value: DayOfWeek.MONDAY },
  { label: "Вт", value: DayOfWeek.TUESDAY },
  { label: "Ср", value: DayOfWeek.WEDNESDAY },
  { label: "Чт", value: DayOfWeek.THURSDAY },
  { label: "Пт", value: DayOfWeek.FRIDAY },
  { label: "Сб", value: DayOfWeek.SATURDAY },
  { label: "Нд", value: DayOfWeek.SUNDAY },
];

interface EditHabitModalProps {
  habit: UserHabit;
  onClose: () => void;
  onSuccess: () => void;
}

export const EditHabitModal = ({
  habit,
  onClose,
  onSuccess,
}: EditHabitModalProps) => {
  const [name, setName] = useState(habit.title);
  const [description, setDescription] = useState(habit.description || "");
  const [color, setColor] = useState(habit.color || COLORS[0]);
  const [icon, setIcon] = useState(habit.icon || ICONS[0]);
  const [repeatType, setRepeatType] = useState<RepeatTime>(habit.repeatType);
  const [selectedDays, setSelectedDays] = useState<DayOfWeek[]>(
    habit.days || []
  );
  const [isLoading, setIsLoading] = useState(false);

  const toggleDay = (dayValue: DayOfWeek) => {
    setSelectedDays((prev) =>
      prev.includes(dayValue)
        ? prev.filter((d) => d !== dayValue)
        : [...prev, dayValue]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Назва не може бути порожньою");
      return;
    }

    if (repeatType === RepeatTime.CUSTOM && selectedDays.length === 0) {
      toast.error("Оберіть хоча б один день");
      return;
    }

    try {
      setIsLoading(true);
      const dto: UpdateHabitDto = {
        name,
        description,
        repeatType,
        days: repeatType === RepeatTime.CUSTOM ? selectedDays : [],
      };

      await HabitService.update(habit.id, dto);

      toast.success("Зміни збережено!");
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Не вдалося оновити звичку");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Редагування звички</h2>
          <div
            className={styles.previewBadge}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.formLayout}>
          <div className={styles.scrollableContent}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Назва</label>
              <input
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Опис</label>
              <textarea
                className={styles.textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Колір</label>
                <div className={styles.colorsGrid}>
                  {COLORS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`${styles.colorBtn} ${
                        color === c ? styles.selectedColor : ""
                      }`}
                      style={{ backgroundColor: c }}
                      onClick={() => setColor(c)}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Іконка</label>
                <div className={styles.iconsGrid}>
                  {ICONS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      className={`${styles.iconBtn} ${
                        icon === i ? styles.selectedIcon : ""
                      }`}
                      onClick={() => setIcon(i)}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Частота</label>
              <div className={styles.typeSelector}>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${
                    repeatType === RepeatTime.DAILY ? styles.active : ""
                  }`}
                  onClick={() => setRepeatType(RepeatTime.DAILY)}
                >
                  Щодня
                </button>
                <button
                  type="button"
                  className={`${styles.typeBtn} ${
                    repeatType === RepeatTime.CUSTOM ? styles.active : ""
                  }`}
                  onClick={() => setRepeatType(RepeatTime.CUSTOM)}
                >
                  За розкладом
                </button>
              </div>

              {repeatType === RepeatTime.CUSTOM && (
                <div className={styles.daysGrid}>
                  {DAYS_OF_WEEK_OPTIONS.map((day) => (
                    <button
                      key={day.value}
                      type="button"
                      className={`${styles.dayBtn} ${
                        selectedDays.includes(day.value) ? styles.selected : ""
                      }`}
                      onClick={() => toggleDay(day.value)}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ФУТЕР */}
          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
              disabled={isLoading}
            >
              Скасувати
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading}
            >
              {isLoading ? "Збереження..." : "Зберегти"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
