"use client";

import { useState, useEffect } from "react";
import { MenuRounded, Close } from "@mui/icons-material";
import styles from "../styles/K12Nav.module.css";
import Image from "next/image";
import Link from "next/link";

const K12Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(`.${styles.mobileMenu}`) &&
        !target.closest(`.${styles.mobileIcon}`)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link className={styles.navLogo} href="/">
          <Image
            src={"/images/robomonk-logo-img.webp"}
            alt={"RoboMonk Logo"}
            height={250}
            width={250}
            priority
            className={styles.logoImg}
          />
        </Link>

        <div
          className={styles.mobileIcon}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <Close style={{ color: "inherit" }} />
          ) : (
            <MenuRounded style={{ color: "inherit" }} />
          )}
        </div>

        <div className={styles.navItems}>
          <Link className={styles.navLink} href="/k12-programs">
            K-12
          </Link>
          <Link
            className={styles.navLink}
            href="/k12-programs/clubs&activities"
          >
            Club & Activities
          </Link>
          <Link className={styles.navLink} href="/k12-programs/spark-events">
            Spark Events
          </Link>
          <Link className={styles.navLink} href="/k12-programs/bootcamps">
            Bootcamps
          </Link>
          <Link className={styles.navLink} href="/k12-programs/scifi">
            SciFi
          </Link>
        </div>

        <div className={styles.btnContainer}>
          <Link className={styles.labSolBtn} href="/lab-solutions">
            Lab Solutions
          </Link>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <div className={styles.mobileMenuContent}>
            <Link
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
              href="#club-activities"
            >
              Club & Activities
            </Link>
            <Link
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
              href="#spark-events"
            >
              Spark Events
            </Link>
            <Link
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
              href="#bootcamps"
            >
              Bootcamps
            </Link>
            <Link
              className={styles.mobileNavLink}
              onClick={() => setIsOpen(false)}
              href="#scifi"
            >
              SciFi
            </Link>
            <div className={styles.mobileBtnContainer}>
              <Link className={styles.mobileLabSolBtn} href="/lab-solutions">
                Lab Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default K12Nav;
