"use client";

import React from "react";
import styles from "../styles/Footer.module.css";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
            href="https://www.instagram.com/robomonk.ai/?igsh=bnh1M2owOGRiOTRl#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://wa.me/qr/K5ILKPFNLG76J1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <WhatsAppIcon className={styles.icon} fontSize="large" />
          </a>
          <a
            href="https://www.threads.net/@robomonk.ai?invite=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Image
              src={"/images/threads-white-icon.png"}
              alt={"Threads social media icon"}
              height={100}
              width={100}
              priority
              className={styles.icon}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/robomonk-ai/"
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
