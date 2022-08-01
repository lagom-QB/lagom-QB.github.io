import React from "react";
import styles from "../ComponentStyles/AboutBlurb.module.css";
import { motion } from "framer-motion";

import TechSkills from "./AboutLanguages";
import Tools from "./AboutTools";

function AboutBlurb() {
  return (
    <div className={styles.container}>
    <div className={styles.containerRow}>
        <motion.div className={styles.entryText} animate={{ opacity: [0, 1], x: [60, 0] }} transition={{ duration: 2,
            type: "spring" , stiffness: 10, mass: 2, damping: 5, }}>
            <div className={styles.gg}>
                <div className={styles.pinkBlue} />
                <motion.h1 animate={{ color: [ "rgb(242, 159, 255)" , "rgb(124, 153, 255)" , "rgb(95, 10, 213)" , ], }}
                    transition={{ repeat: Infinity, duration: 3 }}>
                    About
                </motion.h1>
                <div className={styles.gg} />
            </div>
            <div className={styles.Title}>
                <h2>Hello there 👋 </h2>
            </div>
            <div>
                <div className={styles.yellowRed}></div>
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
                        <br />
                        I am Brenda; a Data Wizard and Creative Developer somewhere in Spain 🇪🇦.
                        I am interested in Data Art , Visualization and Analysis because everything therein
                        depends on perspective and it is just so much fun to see how many different perspectives do exist.
                        <br />
                        Outside of Data Science, I enjoy:
                    <ul>
                        <li>Walks 🥾 📸</li>
                        <li>Novels 📖 and Movies 🎞️</li>
                        <li>Drawing 🖋️</li>
                        <li>Novelties 🎊</li>
                    </ul>
                    <br/>
                    I&apos;m currently working on
                    <a className={styles.links} href="https://github.com/lagom-QB">
                        {" "}
                        personal projects.
                    </a>
                    <br/>
                        You can always 📫 | 📜 to work on a project or just for a lovely chat ☕️.
                        👯 BTW I&apos;m also looking to collaborate on short-term social projects.
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
        <div className={styles.containerColumn}>
            <motion.div className={styles.entryText} animate={{ opacity: [0, 1], x: [60, 420], y: [0, 100] }}
                transition={{ duration: 2, type: "spring" , stiffness: 10, mass: 2, damping: 5, delay: 2, }}>
                <TechSkills />
            </motion.div>
            <motion.div className={styles.entryText} animate={{ opacity: [0, 1], x: [420, 740], y: [0, 100] }}
                transition={{ duration: 2, type: "spring" , stiffness: 10, mass: 2, damping: 5, delay: 3, }}>
                <Tools />
            </motion.div>
        </div>
    </div>
</div>
  );
}

export default AboutBlurb;
