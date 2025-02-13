"use client";

import { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import styles from "../styles/K12Nav.module.css";
import Image from "next/image";

const K12Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navbarContainer}>
        <a className={styles.navLogo} href="/">
          <Image
            src={"/images/robomonk-logo-img.webp"}
            alt={"NavBar Logo Img"}
            height={250}
            width={250}
            priority
            className={styles.logoImg}
          />
        </a>

        <div className={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <div className={styles.navItems}>
          <a className={styles.navLink} href="#About">
            Club & Activities
          </a>
          <a className={styles.navLink} href="#Skills">
            Spark Events
          </a>
          <a className={styles.navLink} href="#Experience">
            Bootcamps
          </a>
          <a className={styles.navLink} href="#Projects">
            SciFi
          </a>
        </div>

        <div className={styles.btnContainer}>
          <a className={styles.labSolBtn} href={"/"} target="_blank">
            Lab Solutions
          </a>
        </div>

        {isOpen && (
          <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
            <a
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Club & Activities
            </a>
            <a
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Spark Events
            </a>
            <a
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Bootcamps
            </a>
            <a
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              SciFi
            </a>
            <div className={styles.mobileBtnContainer}>
              <a className={styles.mobileLabSolBtn} href={"/"} target="_blank">
                Lab Solutions
              </a>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default K12Nav;
