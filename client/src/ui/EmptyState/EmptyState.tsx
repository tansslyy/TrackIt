import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  description: string;
  icon: string;
}

export const EmptyState = ({ title, description, icon }: EmptyStateProps) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
