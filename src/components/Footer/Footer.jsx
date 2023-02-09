import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  AiFillGithub as GitHub,
  AiFillLinkedin as Linkedin,
} from "react-icons/ai";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerContainer}>
        <div className={styles.social}>
          <a href="https://github.com/AdrianWilliam" target="_blank">
            <GitHub />
          </a>
            <a href="https://www.linkedin.com/in/adrian-william-805861233/" target="_blank">
              <Linkedin />
            </a>
        </div>
        <div className={styles.creator}>
          <p>By Adrian William</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
