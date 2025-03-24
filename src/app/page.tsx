"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  const router = useRouter();

  const handleClick = (item: string) => {
    if (item === "K-12 Programs") {
      router.push("/k12-programs");
    } else if (item === "Engineering Programs") {
      router.push("/engineering-programs");
    } else {
      router.push("/industry-solutions");
    }
  };

  return (
    <main style={{ background: "#f4fcff" }}>
      <section className={styles.mainBody}>
        <div className={styles.bodyWrapper}>
          <div className={styles.landingSection}>
            <Image
              src={"/images/robomonkai-logo-img.jpg"}
              alt={"Coming Up Section Img"}
              height={250}
              width={250}
              priority
              className={styles.logo}
            />
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <Image
                  src={
                    "https://github.com/CVSCharan/robomonk-ai-assets/blob/main/cartoon-ai-robot-scene.jpg?raw=true"
                  }
                  alt="Robomonk AI Card Img"
                  height={300}
                  width={300}
                  priority
                />
                <h2>🤖 Future-Ready STEM, AI & Robotics Labs for Schools</h2>
                <button onClick={() => handleClick("K-12 Programs")}>
                  Explore K-12 Programs
                </button>
              </div>
              <div className={styles.card}>
                <Image
                  src={
                    "https://github.com/CVSCharan/robomonk-ai-assets/blob/main/Designer.jpeg?raw=true"
                  }
                  alt="Robomonk AI Card Img"
                  height={300}
                  width={300}
                  priority
                />
                <h2>🎓 Industry-Aligned Training & Research Labs</h2>
                <button onClick={() => handleClick("Engineering Programs")}>
                  Discover Engineering Programs
                </button>
              </div>
              <div className={styles.card}>
                <Image
                  src={
                    "https://github.com/CVSCharan/robomonk-ai-assets/blob/main/cartoon-smoke-with-pipes.jpg?raw=true"
                  }
                  alt="Robomonk AI Card Img"
                  height={300}
                  width={300}
                  priority
                />
                <h2>🏭 AI & Robotics Solutions for Smart Industries</h2>
                <button onClick={() => handleClick("Industrial Solutions")}>
                  Explore Industry 4.0 Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footerContainer}>
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
              src={"/images/threads.png"}
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
        <h2 className={styles.footerHeading}>
          © 2025 All rights reserved - Robomonk Technologies Pvt. Ltd.
        </h2>
        <h3 className={styles.footerSubHeading}>
          Developed with 💜 by CVS CHARAN
        </h3>
      </footer>
    </main>
  );
}
