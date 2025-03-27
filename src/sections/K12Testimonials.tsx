import { k12StudentTestimonials } from "@/utils/data";
import React from "react";
import styles from "../styles/K12Testimonials.module.css";

const K12Testimonials = () => {
  return (
    <section
      id="testimonials-section"
      data-animate
      className={styles.testimonialsSection}
    >
      <div className={styles.headerContainer}>
        <h2 className={`section-title gradient-text ${styles.sectionTitle}`}>
          Top Performers
        </h2>
        <p className={styles.sectionDescription}>
          This section highlights outstanding students who have demonstrated
          exceptional skills in robotics, AI, coding, and STEM-related projects.
          Their achievements inspire fellow learners and showcase the potential
          of young innovators.
        </p>
      </div>

      <div className={styles.testimonialsGrid}>
        {k12StudentTestimonials.map((item, index) => (
          <div key={index} className={`card ${styles.testimonialCard}`}>
            <div className={styles.cardAccent}></div>
            <h3 className={styles.studentName}>
              {item.name} <span className={styles.starIcon}>⭐</span>
            </h3>
            <p className={styles.studentDescription}>{item.desc}</p>
            <p className={styles.studentComment}>
              <span className={styles.quoteIcon}>"</span>
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default K12Testimonials;
