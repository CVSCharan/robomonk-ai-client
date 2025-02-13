"use client";

import { useState } from "react";
import { MenuRounded } from "@mui/icons-material";
import styles from "../styles/K12Nav.module.css";
import Image from "next/image";
import Link from "next/link";

const K12Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navbarContainer}>
        <Link className={styles.navLogo} href="/">
          <Image
            src={"/images/robomonk-logo-img.webp"}
            alt={"NavBar Logo Img"}
            height={250}
            width={250}
            priority
            className={styles.logoImg}
          />
        </Link>

        <div className={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <div className={styles.navItems}>
          <Link className={styles.navLink} href="#About">
            Club & Activities
          </Link>
          <Link className={styles.navLink} href="#Skills">
            Spark Events
          </Link>
          <Link className={styles.navLink} href="#Experience">
            Bootcamps
          </Link>
          <Link className={styles.navLink} href="#Projects">
            SciFi
          </Link>
        </div>

        <div className={styles.btnContainer}>
          <Link className={styles.labSolBtn} href={"/"} target="_blank">
            Lab Solutions
          </Link>
        </div>

        {isOpen && (
          <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
            <Link
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Club & Activities
            </Link>
            <Link
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Spark Events
            </Link>
            <Link
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              Bootcamps
            </Link>
            <Link
              className={styles.navLink}
              onClick={() => setIsOpen(!isOpen)}
              href="/"
            >
              SciFi
            </Link>
            <div className={styles.mobileBtnContainer}>
              <Link
                className={styles.mobileLabSolBtn}
                href={"/"}
                target="_blank"
              >
                Lab Solutions
              </Link>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default K12Nav;
