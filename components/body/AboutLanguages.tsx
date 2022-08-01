import React, { Key, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "../ComponentStyles/About.module.css";

import { useTechSkillsQuery } from "./fetchers/TechSkills";

function TechSkills() {
  const { loading, error, data } = useTechSkillsQuery();
  let skills:
    | { [s: string]: any[] }
    | Array<any[]>
    | { language: string; proficiency: number }[] = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    for (let i = 0; i < data.programmingLanguagez.length; i++) {
      skills[i] = [
        [
          data.programmingLanguagez[i].language,
          data.programmingLanguagez[i].proficiency,
        ],
      ];
    }
    skills = Object.values(skills);
  }

  const container = {
    hidden: {
      x: 60,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delayChildren: 1.2,
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 10,
        mass: 2,
        damping: 5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className={styles.container}>
      <div className={styles.ggr}>
        <div className={styles.blueGreen} />
        <motion.h1
          animate={{
            color: [
              "rgb(242, 159, 255)",
              "rgb(124, 153, 255)",
              "rgb(95, 10, 213)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Tech Tools
        </motion.h1>
      </div>
      <Suspense fallback={<pre>Loading ...</pre>}>
        <div>
          <motion.ul
            className={styles.gg}
            style={{ listStyle: "none" }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {data?.programmingLanguagez.map(
              (skills: {
                language: string | null | undefined;
                proficiency: number;
              }) => (
                <div
                  className={styles.ggr}
                  key={skills.language}
                >
                  <div className={styles.disk} />
                  <motion.h3>{skills.language}</motion.h3>
                </div>
              )
            )}
          </motion.ul>
        </div>
      </Suspense>
    </div>
  );
}

export default TechSkills;
