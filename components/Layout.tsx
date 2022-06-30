import React from "react";
import { motion } from "framer-motion";
import { newspaper } from "./Newspaper";
import layoutStyles from "./Layout.module.css";
import GridStyles from "./Grid.module.css";
type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <a className={GridStyles.animateddiv} href="/">
          {" "}
          Latest updates
        </a>
      </header>
      <motion.div
        variants={newspaper}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={layoutStyles.content}
      >
        {children}
      </motion.div>
      <footer className={layoutStyles.footer}>© 2022</footer>
    </div>
  );
}
