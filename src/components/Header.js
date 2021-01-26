import React from "react";

import styles from "../css/Header.module.css";

export default () => {
  return (
    <header>
      <h1 className={styles.logo}>Tyler</h1>
      <div className={styles.linkContainer}>
        <a href="#about">Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Reach me</a>
      </div>
    </header>
  );
};
