import { useState } from "react";
import { HabitService } from "../../../services/habit.service";
import { toast } from "react-hot-toast";
import styles from "./CreateHabitModal.module.css";
import type { CreateHabitDto } from "../../../types/dtos/habit/create-habit.dto";

interface CreateHabitModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const DAYS_OF_WEEK = [
  { label: "Пн", value: "MONDAY" },
  { label: "Вт", value: "TUESDAY" },
  { label: "Ср", value: "WEDNESDAY" },
  { label: "Чт", value: "THURSDAY" },
  { label: "Пт", value: "FRIDAY" },
  { label: "Сб", value: "SATURDAY" },
  { label: "Нд", value: "SUNDAY" },
];

export const CreateHabitModal = ({
  onClose,
  onSuccess,
}: CreateHabitModalProps) => {
  const [name, setName] = useState("");
  const [repeatType, setRepeatType] = useState<"DAILY" | "CUSTOM">("DAILY");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDay = (dayValue: string) => {
    setSelectedDays((prev) =>
      prev.includes(dayValue)
        ? prev.filter((d) => d !== dayValue)
        : [...prev, dayValue]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Введіть назву звички");
      return;
    }

    if (repeatType === "CUSTOM" && selectedDays.length === 0) {
      toast.error("Оберіть хоча б один день");
      return;
    }

    try {
      setIsLoading(true);

      const dto: CreateHabitDto = {
        name,
        repeatType,
        days: repeatType === "CUSTOM" ? selectedDays : [],
      };

      await HabitService.create(dto);

      toast.success("Звичку створено успішно! 🎉");
      onSuccess();
    } catch (error) {
      console.error(error);
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
        <h2 className={styles.title}>Нова звичка</h2>

        <form onSubmit={handleSubmit}>
          {/* Поле назви */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Назва</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Напр., Читати 15 хвилин..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Частота</label>
            <div className={styles.typeSelector}>
              <button
                type="button"
                className={`${styles.typeBtn} ${
                  repeatType === "DAILY" ? styles.active : ""
                }`}
                onClick={() => setRepeatType("DAILY")}
              >
                Щодня
              </button>
              <button
                type="button"
                className={`${styles.typeBtn} ${
                  repeatType === "CUSTOM" ? styles.active : ""
                }`}
                onClick={() => setRepeatType("CUSTOM")}
              >
                За розкладом
              </button>
            </div>

            {repeatType === "CUSTOM" && (
              <div className={styles.daysGrid}>
                {DAYS_OF_WEEK.map((day) => (
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

          <div className={styles.actions}>
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
