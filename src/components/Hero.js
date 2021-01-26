import React from "react";

import tyler from "../resources/tyler.png";

import styles from "../css/Hero.module.css";

export default () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.headerText}>Hello! I'm Tyler Nguyen</h1>
      <h3 className={styles.subText}>Aspiring Full-Stack Developer</h3>
      <img className={styles.avatar} src={tyler} alt="photo" />
      <p className={styles.cta}>Scroll down to see some projects</p>
    </section>
  );
};
