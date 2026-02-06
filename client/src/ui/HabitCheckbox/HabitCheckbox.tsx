import type React from "react";
import styles from "./HabitCheckbox.module.css";
import { CheckIcon } from "../../assets/icons/CheckIcon";

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
      <CheckIcon className={styles.checkIcon} />
    </div>
  );
};
