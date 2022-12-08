import React from 'react'
import styles from "./footer.module.css";

import linkedinLogo from "../assets/linkedin.png"
import githubLogo from "../assets/github.png"
import facebookLogo from "../assets/facebook.png"

const linkedinURL = "https://www.linkedin.com";
const githubURL = "https://github.com";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      Footer
      <div className={styles.footerDiv}>
        <span>
          <a className={styles.footerDivA} href={linkedinURL} target="_blank">
            <img
              className={styles.footerDivAImg}
              src={linkedinLogo}
              alt="linkedin-logo"
              title="linkedin-logo"
            />
          </a>
        </span>
        <span>

        <a className={styles.footerDivA} href={linkedinURL} target="_blank">
          <img
            className={styles.footerDivAImg}
            src={facebookLogo}
            alt="face-logo"
            title="face-logo"
          />
        </a>
      </span>

      <span>
        <a className={styles.footerDivA} href={githubURL} target="_blank">
          <img
            className={styles.footerDivAImg}
            src={githubLogo}
            alt="github-logo"
            title="github-logo"
          />
        </a>
      </span>
    </div>
    </footer >)
}

export default Footer