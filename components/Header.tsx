import React from "react";
import styles from "./ComponentStyles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.Menu}>
      <nav>
        <Link href="/">
          <a data-id="Home" data-route="home">
            Home
          </a>
        </Link>
        <Link href="/Work">
          <a data-id="Work" data-route="Work">
            Work
          </a>
        </Link>
        <Link href="/About">
          <a data-id="About" data-route="About">
            About
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
