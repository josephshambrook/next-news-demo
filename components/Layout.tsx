import React from "react";
import { motion } from "framer-motion";
import { newspaper } from "./Newspaper";
import layoutStyles from "./Layout.module.css";

export function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <a href="/"> Latest updates</a>
      </header>
      <motion.div
        variants={newspaper}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={layoutStyles.content}
        {...props}
      ></motion.div>
      <footer className={layoutStyles.footer}>Somerville 2022</footer>
    </div>
  );
}
