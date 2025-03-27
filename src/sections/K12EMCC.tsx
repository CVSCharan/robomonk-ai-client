import React, { useEffect, useState } from "react";
import styles from "../styles/K12EMCC.module.css";
import Image from "next/image";
import { VisibilityState } from "@/utils/types";

const K12EMCC = () => {
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
    <section className={styles.emccContainer}>
      <div className="container">
        <div id="emcc-section" className={styles.emccSection} data-animate>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/EMCC-Banner.gif"
              alt="LID Banner"
              height={250}
              width={600}
              priority
              className={`${styles.emccImg} ${
                isVisible["emcc-section"] ? "fade-in visible" : "fade-in"
              }`}
            />
          </div>
          <div className={styles.headerContainer}>
            <h2
              className={`section-title gradient-text ${styles.sectionTitle}`}
            >
              {`RoboMonk's E.M.C.C Methodology`}
            </h2>
            <p className={styles.emccIntro}>
              At RoboMonk, our E.M.C.C methodology is designed to foster
              creativity, innovation, and real-world problem-solving for
              learners across all levels.
            </p>
          </div>

          <div className={`grid ${styles.methodGrid}`}>
            <div className={`card ${styles.methodCard}`}>
              <h3 className={styles.methodHeading}>
                <span className={styles.iconWrapper}>✨</span>
                <span className={styles.methodTitle}>
                  E – Exploration & Play
                </span>
              </h3>
              <p className={styles.methodDescription}>
                Hands-on learning through experimentation, curiosity-driven
                projects, and real-world challenges.
              </p>
            </div>
            <div className={`card ${styles.methodCard}`}>
              <h3 className={styles.methodHeading}>
                <span className={styles.iconWrapper}>🎯</span>
                <span className={styles.methodTitle}>
                  M – Multisensory Learning
                </span>
              </h3>
              <p className={styles.methodDescription}>
                Engaging multiple senses—visual, auditory, and kinesthetic—for
                deeper understanding and retention.
              </p>
            </div>
            <div className={`card ${styles.methodCard}`}>
              <h3 className={styles.methodHeading}>
                <span className={styles.iconWrapper}>👥</span>
                <span className={styles.methodTitle}>
                  C – Collaborative Inquiry
                </span>
              </h3>
              <p className={styles.methodDescription}>
                Encouraging teamwork, discussion, and collective problem-solving
                to develop critical thinking.
              </p>
            </div>
            <div
              className={`card ${styles.methodCard} ${styles.lastMethodCard}`}
            >
              <h3 className={styles.methodHeading}>
                <span className={styles.iconWrapper}>🎨</span>
                <span className={styles.methodTitle}>
                  C – Creative Expression & Innovation
                </span>
              </h3>
              <p className={styles.methodDescription}>
                Empowering learners to design, prototype, and implement
                solutions using futuristic technology.
              </p>
            </div>
          </div>

          <div className={styles.lidSection}>
            <p className={styles.lidTagline}>
              <span className={styles.lidHighlight}>
                Learn. Invent. Discover.
              </span>{" "}
              🚀 With E.M.C.C, we nurture future innovators, thinkers, and
              problem-solvers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default K12EMCC;
