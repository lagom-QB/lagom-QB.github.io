import React from "react";
import styles from "./ComponentStyles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <ul>
        <li>
          <a href="mailto:pacheconlucky@gmail.com">Email</a>
        </li>
        <li>
          <a
            href="https://github.com/lagom-QB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tebid-quinsy-b-aaa048140"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
