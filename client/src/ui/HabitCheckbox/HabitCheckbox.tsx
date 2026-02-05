import type React from "react";
import styles from "./HabitCheckbox.module.css";

interface HabitCheckboxProps {
  isChecked: boolean;
  color?: string;
  onClick?: (e: React.MouseEvent) => void;
  size?: number;
}

export const HabitCheckbox = ({
  isChecked,
  color = "#3b82f6",
  onClick,
  size = 24,
}: HabitCheckboxProps) => {
  return (
    <div
      className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}
      onClick={onClick}
      style={
        {
          "--checkbox-color": color,
          width: size,
          height: size,
        } as React.CSSProperties
      }
    >
      <svg
        className={styles.checkIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
};
