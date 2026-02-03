import { useState, type ReactNode } from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

interface Props {
  children?: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>{children || <Outlet />}</main>
    </div>
  );
};
