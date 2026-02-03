import { useEffect, useState } from "react";
import { HabitService } from "../../../services/habit.service";
import { toast } from "react-hot-toast";
import styles from "./CreateHabitModal.module.css";
import type { CreateHabitDto } from "../../../api/types/dtos/habits/create-habit.dto";
import { DayOfWeek, RepeatTime } from "../../../api/types/enums";
import type { LibraryItemDto } from "../../../api/types/dtos/habits/library-response.dto";
import type { LibraryCategoryModel } from "../../../api/types/models/library-category.model";

interface CreateHabitModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

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

export const CreateHabitModal = ({
  onClose,
  onSuccess,
}: CreateHabitModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(COLORS[0]);
  const [icon, setIcon] = useState(ICONS[0]);
  const [repeatType, setRepeatType] = useState<RepeatTime>(RepeatTime.DAILY);
  const [selectedDays, setSelectedDays] = useState<DayOfWeek[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [library, setLibrary] = useState<LibraryCategoryModel[]>([]);
  const [habitId, setHabitId] = useState<string | null>(null);

  const toggleDay = (dayValue: DayOfWeek) => {
    setSelectedDays((prev) =>
      prev.includes(dayValue)
        ? prev.filter((d) => d !== dayValue)
        : [...prev, dayValue],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Введіть назву звички");
      return;
    }

    if (repeatType === RepeatTime.CUSTOM && selectedDays.length === 0) {
      toast.error("Оберіть хоча б один день");
      return;
    }

    try {
      setIsLoading(true);

      const dto: CreateHabitDto = {
        name,
        description,
        repeatType,
        days: repeatType === RepeatTime.CUSTOM ? selectedDays : [],
        habitId: habitId || undefined,
      };

      await HabitService.create(dto);

      toast.success("Звичку створено успішно! 🎉");
      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Помилка при створенні");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    HabitService.getLibrary().then(setLibrary).catch(console.error);
  }, []);

  const handleSelectTemplate = (habit: LibraryItemDto) => {
    setName(habit.name);
    setDescription(habit.description || "");
    setHabitId(habit.id);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setHabitId(null);
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Нова звичка</h2>
          <div
            className={styles.previewBadge}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.formLayout}>
          <div className={styles.scrollableContent}>
            {library.length > 0 && (
              <div className={styles.librarySection}>
                <p className={styles.libraryLabel}>Швидкий старт:</p>
                <div className={styles.chipsContainer}>
                  {library
                    .flatMap((cat) => cat.habits || [])
                    .map((habit) => (
                      <button
                        key={habit.id}
                        type="button"
                        onClick={() => handleSelectTemplate(habit)}
                        className={`${styles.chip} ${
                          habitId === habit.id ? styles.activeChip : ""
                        }`}
                      >
                        {habit.name}
                      </button>
                    ))}
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.label}>Назва</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Напр., Читати 15 хвилин"
                value={name}
                onChange={handleNameChange}
                autoFocus
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Опис (необов'язково)</label>
              <textarea
                className={styles.textarea}
                placeholder="Деталі вашої цілі..."
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
              {isLoading ? "Збереження..." : "Створити"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
