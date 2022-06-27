import React from "react";
import layoutStyles from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>Latest updates</header>
      <main className={layoutStyles.content}>{children}</main>
      <footer className={layoutStyles.footer}>Somerville 2022</footer>
    </div>
  );
}
