"use client";

import React from "react";
import styles from "../styles/Footer.module.css";
import { Instagram } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer id="Robomonk.AI Footer" className={styles.footerMainContainer}>
      <div className={styles.footerHeaderContainer}>
        <div className={styles.footerHeader}>
          <Image
            src={"/images/robomonk-logo-img.webp"}
            alt={"Footer Logo Img"}
            height={250}
            width={250}
            priority
            className={styles.logoImg}
          />
          <p className={styles.footerPara}>
            {`RoboMonk is at the forefront of revolutionizing education through
            innovation. Our platform empowers learners to dive into the world of
            Robotics, AI, and STEM, fostering creativity and problem-solving
            skills through hands-on, engaging experiences. Join us on a journey
            to build, code, and create the future of technology.`}
          </p>
        </div>
        <div className={styles.socialMediaIcons}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <XIcon className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className={styles.icon} fontSize="large" />
          </a>
        </div>
      </div>
      {/* <div className={styles.footerQuickLinksContainer}>
        <Link href="/" className={styles.quickLink}>
          Home
        </Link>
        <Link href="/about-us" className={styles.quickLink}>
          About Us
        </Link>
        <Link href="/services" className={styles.quickLink}>
          Services
        </Link>
        <Link href="/stories" className={styles.quickLink}>
          Stories
        </Link>
        <Link href="/function-hall" className={styles.quickLink}>
          Function Hall
        </Link>
        <Link href="/contact-us" className={styles.quickLink}>
          Contact Us
        </Link>
      </div> */}
      <h2 className={styles.footerTxt}>
        📞 Need Help? Contact us at{" "}
        <span
          className={styles.footerSpan}
          onClick={() => (window.location.href = "mailto:info@robomonk.ai")}
        >
          info@robomonk.ai
        </span>
      </h2>
      <h2 className={styles.footerTxt}>
        © 2025 All rights reserved - Robomonk.AI
      </h2>
      <h3 className={styles.footerSubTxt}>Made with 💗 by CVS CHARAN</h3>
    </footer>
  );
};

export default Footer;
