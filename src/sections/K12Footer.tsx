import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import Image from "next/image";
import styles from "../styles/K12Footer.module.css";
import Link from "next/link";

const K12Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          {/* Main column - full width */}
          <div className={styles.footerMainColumn}>
            <h2 className={styles.footerLogo}>Robomonk.ai</h2>
            <p className={styles.footerDescription}>
              Empowering the next generation with future-ready skills through
              innovative, hands-on learning experiences.
            </p>
            <div className={styles.socialLinks}>
              <Link
                href="https://www.instagram.com/robomonk.ai/?igsh=bnh1M2owOGRiOTRl#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className={styles.socialIcon}>
                  <Instagram />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/robomonk-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className={styles.socialIcon}>
                  <LinkedInIcon />
                </span>
              </Link>
              <Link
                href="https://wa.me/qr/K5ILKPFNLG76J1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <span className={styles.socialIcon}>
                  <WhatsAppIcon />
                </span>
              </Link>
              <Link
                href="https://www.threads.net/@robomonk.ai?invite=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <span className={styles.socialIcon}>
                  <Image
                    src={"/images/threads-white-icon.png"}
                    alt={"Threads social media icon"}
                    height={24}
                    width={24}
                    priority
                    className={styles.threadsIcon}
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* Small columns row */}
          <div className={styles.footerSmallColumnsContainer}>
            <div className={styles.footerColumnSmall}>
              <h3 className={styles.footerHeading}>Learn</h3>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/scifi" className={styles.footerLink}>
                    Scifi
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/bootcamps" className={styles.footerLink}>
                    Bootcamps
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/spark-events" className={styles.footerLink}>
                    Spark Events
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/clubs" className={styles.footerLink}>
                    Club & Activities
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumnSmall}>
              <h3 className={styles.footerHeading}>Support</h3>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/help" className={styles.footerLink}>
                    Help
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/safety" className={styles.footerLink}>
                    Safety
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/privacy" className={styles.footerLink}>
                    Privacy Policy
                  </Link>
                </li>
                <li className={styles.footerListItem}>
                  <Link href="/terms" className={styles.footerLink}>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumnSmall}>
              <h3 className={styles.footerHeading}>Teach</h3>
              <ul className={styles.footerList}>
                <li className={styles.footerListItem}>
                  <Link href="/join-educator" className={styles.footerLink}>
                    Join as Educator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Robomonk Technologies Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default K12Footer;
