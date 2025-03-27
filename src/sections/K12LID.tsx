import React, { useEffect, useState } from "react";
import styles from "../styles/K12LID.module.css";
import Image from "next/image";
import { VisibilityState } from "@/utils/types";

const K12LID = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section elements
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <section className={styles.lidContainer} id="lid-section" data-animate>
      <div className={styles.lidContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/LID.gif"
            alt="LID Banner"
            height={250}
            width={600}
            priority
            className={`${styles.lidImg} ${
              isVisible["lid-section"] ? "fade-in visible" : "fade-in"
            }`}
          />
        </div>

        <div className={styles.titleContainer}>
          <h2 className={`section-title gradient-text ${styles.sectionTitle}`}>
            {`RoboMonk's L.I.D Philosophy`}
          </h2>
          <h3 className={styles.subtitle}>Learn . Invent . Discover</h3>
        </div>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            At RoboMonk, we believe in Learn. Invent. Discover. (L.I.D)—a
            dynamic approach to education that nurtures curiosity, creativity,
            and innovation. This philosophy ensures that learners not only
            acquire knowledge but also apply it to solve real-world challenges.
            Through hands-on experiences, project-based learning, and
            industry-aligned methodologies, we empower students to think
            critically, innovate boldly, and explore limitless possibilities.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Learn <span className={styles.cardEmoji}>📚</span>
            </h3>
            <p className={styles.cardDescription}>
              Gaining Knowledge & Building Strong Foundations
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Invent <span className={styles.cardEmoji}>💡</span>
            </h3>
            <p className={styles.cardDescription}>
              Creating & Innovating Solutions
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Discover <span className={styles.cardEmoji}>🔍</span>
            </h3>
            <p className={styles.cardDescription}>
              Exploring New Possibilities & Expanding Horizons
            </p>
          </div>
        </div>

        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            {`This L.I.D philosophy is embedded in RoboMonk's curriculum,
            training, and approach, ensuring that every learner is prepared to
            thrive in the ever-evolving technological landscape.`}{" "}
            <span className={styles.rocketEmoji}>🚀</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default K12LID;
