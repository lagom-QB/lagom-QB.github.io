import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import AboutMe from "../components/body/AboutMe";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
    </div>
  );
};

export default Home;
