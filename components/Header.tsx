import React from "react";
import styles from "./ComponentStyles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Menu}>
      <nav>
        <a href="/about" data-id="About" data-route="about">
          About
        </a>
        <a href="/works" data-id="Work" data-route="work">
          Work
        </a>
      </nav>
    </div>
  );
};

export default Header;
