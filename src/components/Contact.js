/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import styles from "../css/Contact.module.css";

export default () => {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.header}>Say Hello!</h1>
      <ul>
        <li className={styles.listItem}>
          <a href="mailto:tntt_tyler@me.com">
            <i className={`fas fa-envelope fa-5x`}></i>
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="https://www.linkedin.com/in/tylernguyen341/" target="_blank">
            <i className={`fab fa-linkedin fa-5x`}></i>
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            href="https://github.com/tnguyen28?tab=repositories"
            target="_blank"
          >
            <i className={`fab fa-github fa-5x`}></i>{" "}
          </a>
        </li>
      </ul>
    </section>
  );
};
