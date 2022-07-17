import React, { Key, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "../ComponentStyles/About.module.css";

import {useToolsQuery} from "./fetchers/Tools";

function Tools() {
  const { loading, error, data } = useToolsQuery();
  let tools:
    | { [s: string]: any[] }
    | Array<any[]>
    | { tools: string; level: number }[] = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    for (let i = 0; i < data.toolz.length; i++) {
      tools[i] = [
        [
          data.toolz[i].tools,
          data.toolz[i].level,
        ],
      ];
    }
    tools = Object.values(tools);
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
        <div className={styles.pinkBlue} />
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
          Tools
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
            {data?.toolz.map(
              (tools: {
                tools: string | null | undefined;
                level: number;
              }) => (
                <div
                  className={styles.ggr}
                  key={tools.tools}
                >
                  <div className={styles.disk} />
                  <motion.h3>{tools.tools}</motion.h3>

                  <div>
                    <div className={styles.blueGreen} />
                    <motion.h3 >
                      ({tools.level} | 5)  
                    </motion.h3>
                  </div>
                </div>
              )
            )}
          </motion.ul>
        </div>
      </Suspense>
    </div>
  );
}

export default Tools;
