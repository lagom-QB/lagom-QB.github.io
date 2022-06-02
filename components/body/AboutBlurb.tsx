import React from "react";
import styles from "../ComponentStyles/AboutBlurb.module.css";
import { motion } from "framer-motion";

function AboutBlurb() {
  return (
    <div>
      <motion.div
        className={styles.container}
        animate={{ opacity: [0, 1], x: [600, 0] }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className={styles.Title}>
          <h1>Hi, I&apos;m Quinsy Brenda</h1>
        </div>
        <div>
          <div className={styles.gg}>
            <div className={styles.yellowRed}></div>
          </div>
          <div className={styles.gg}>
            <div className={styles.yellowRed}></div>
            <div className={styles.pinkBlue}></div>
            <div className={styles.disk}></div>
          </div>
          <div className={styles.gg}>
            <div className={styles.pinkBlue}></div>
            <div className={styles.disk}></div>
            <div className={styles.pinkBlue}></div>
            <div className={styles.disk}></div>
          </div>
          <div>
            <div className={styles.gg} />
            <p className={styles.description}>
              I’m a creative developer / Information Designer.
              <br />
              I use Tableau, Typescript and Python to create experiences and
              products.
              <br />
              I&apos;m currently working on
              <a className={styles.links} href="https://github.com/lagom-QB">
                {" "}
                personal projects
              </a>
              .
            </p>
            <div className={styles.gg} />
          </div>
          <div className={styles.gg}></div>
          <div className={styles.gg}>
            <div className={styles.blueGreen}></div>
            <div className={styles.yellowRed}></div>
          </div>
          <div className={styles.gg}></div>
          <div className={styles.gg}>
            <div className={styles.pinkBlue}></div>
            <div className={styles.blueGreen}></div>
            <div className={styles.pinkBlue}></div>
          </div>
          <div className={styles.gg}>
            <div className={styles.blueGreen}></div>
            <div className={styles.pinkBlue}></div>
          </div>
          <div className={styles.gg} />
          <div className={styles.gg}>
            <div className={styles.yellowRed}></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutBlurb;
