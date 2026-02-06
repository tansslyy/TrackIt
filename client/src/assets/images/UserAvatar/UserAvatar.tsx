import styles from "./UserAvatar.module.css";

interface UserAvatarProps {
  seed: number | string;
}

export const UserAvatar = ({ seed }: UserAvatarProps) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;

  return (
    <img
      src={avatarUrl}
      alt="User Avatar"
      className={styles.userAvatar}
      loading="lazy"
    />
  );
};
