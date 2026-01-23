import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className={styles.container}>
      {/* Передаємо стан і функцію в Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <main className={styles.content}>{children}</main>
    </div>
  );
};
