"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src={"/images/robomonk-logo-img.webp"}
            alt={"NavBar Logo Img"}
            height={250}
            width={250}
            priority
            className={styles.logoImg}
          />
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#Coming-Up-Section" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <Link href="#Contact-Us-Section" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
