import React from "react";
import styles from "../ComponentStyles/AboutBlurb.module.css";
import { motion } from "framer-motion";

import TechSkills from "./AboutLanguages";
import Tools from "./AboutTools";

function AboutBlurb() {
  return (
    <div className={styles.container}>
    <div className={styles.containerColumn}>
        <motion.div className={styles.entryText} animate={{ opacity: [0, 1], x: [60, 0] }} transition={{ duration: 2,
            type: "spring" , stiffness: 10, mass: 2, damping: 5, }}>
            <div className={styles.gg}>
                <div className={styles.gg} />
            </div>
            <div className={styles.Title}>
                <h2>Hello there 👋 </h2>
            </div>
            <div>
                <div className={styles.yellowRed}></div>
                <div className={styles.gg}>
                    <div className={styles.yellowRed}></div>
                    <div className={styles.disk}></div>
                </div>
                <div>
                    <div className={styles.gg} />
                    <p className={styles.description}>
                        <br />
                        I am a Data Wizard and Creative Developer somewhere in Spain 🇪🇦.
                        I am interested in Data Art because it is just so much fun to see how many different perspectives exist.
                        <br />
                        Out of Data Science, I enjoy:
                    <ul>
                        <li><div className={styles.disk}/>Walks 🥾 📸</li>
                        <li><div className={styles.disk}/>Novels 📖 and Movies 🎞️</li>
                        <li><div className={styles.disk}/>Drawing 🖋️</li>
                        <li><div className={styles.disk}/>Novelties 🎊</li>
                    </ul>
                    <br/>
                        You can always 📫 | 📜 to work on a project or just for a lovely chat ☕️.
                        👯 BTW I&apos;m also looking to collaborate on social projects.
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
                    <div className={styles.yellowRed}></div>
                </div>
            </div>
        </motion.div>
    </div>
</div>
  );
}

export default AboutBlurb;
