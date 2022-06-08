import React from "react";
import layoutStyles from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>Somerville Tech Blog</header>
      <main className={layoutStyles.content} {...props} />
      <footer className={layoutStyles.footer}>Somerville 2022</footer>
    </div>
  );
}
