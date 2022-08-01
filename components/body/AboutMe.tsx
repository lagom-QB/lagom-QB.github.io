import React from "react";
import { motion } from "framer-motion";

import styles from "../ComponentStyles/AboutMe.module.css";

import { useAuthorsQuery } from "./fetchers/Author";
import TextSwap from "./SwapAnimation";

import TechSkills from "./AboutLanguages";
import Tools from "./AboutTools";

function AboutMe() {
  const { loading, error, data } = useAuthorsQuery();
  const name = "Quinsy Brenda";
  let allAboutMes: string[] = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    for (let i = 1; i < data.authors.length; i++) {
      allAboutMes[i] = data.authors[i].aboutMe;
    }

    allAboutMes = Object.values(allAboutMes);
  }

  return (
    <div className={styles.container}>
      <motion.ul
        className={styles.entryText}
        animate={{ x: [60, 0], opacity: [0, 1] }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 10,
          mass: 2,
          damping: 5,
        }}
      >
        <div>
          <div className={styles.gg}>
            <div className={styles.pinkBlue}></div>
            <div className={styles.disk}></div>
          </div>
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
            <div className={styles.disk}></div>
            <div className={styles.pinkBlue}></div>
          </div>
          <div className={styles.gg}></div>
          <div className={styles.gg}>
            <div className={styles.disk}></div>
            <div className={styles.yellowRed}></div>
          </div>
          <div className={styles.gg}></div>
          <div className="Title">
            <h1>{name}</h1>
            <h3><TextSwap strings={allAboutMes} animationType="fade" /></h3>
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
            <div className={styles.blueGreen}></div>
          </div>
          <div className={styles.gg}>
            <div className={styles.blueGreen}></div>
            <div className={styles.pinkBlue}></div>
            <div className={styles.blueGreen}></div>
          </div>
          <div className={styles.gg} />
          <div className={styles.gg}>
            <div className={styles.yellowRed}></div>
            <div className={styles.blueGreen}></div>
          </div>
        </div>
      </motion.ul>
      <motion.div className={styles.containerColumn} animate={{ opacity: [0, 1]}} 
        transition={{ duration: 2, type: "spring" , stiffness: 10, mass: 2, damping: 5, delay: 2, }}>
            <div className={styles.entryText} style={{right: 3rem;}}>
                <TechSkills />
            </div>
            <div className={styles.entryText}>
                <Tools />
            </div>
        </motion.div>
      
    </div>
  );
}

export default AboutMe;
