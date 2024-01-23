import { ReactNode } from "react";
import styles from "@/app/layout.module.css";

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
