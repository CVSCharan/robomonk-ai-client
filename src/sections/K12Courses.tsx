import { k12CoursesData } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/K12Courses.module.css";

const K12Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % k12CoursesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [k12CoursesData]);

  const currentItem = k12CoursesData[currentIndex];

  return (
    <section
      id="courses-section"
      data-animate
      className={styles.coursesSection}
    >
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={`section-title gradient-text ${styles.sectionTitle}`}>
            Open the Door to New Edventures
          </h2>
        </div>
        <div className={styles.courseCardWrapper}>
          <div className={`card ${styles.courseCard}`}>
            <div className={styles.courseImageContainer}>
              <Image
                src={currentItem.imgSrc}
                alt={`${currentItem.title} image`}
                height={220}
                width={220}
                priority
                className={`pulse-animation ${styles.courseImage}`}
                style={{ objectFit: 'cover', width: '100%', height: '220px' }}
              />
            </div>
            <div className={styles.courseContent}>
              <h3 className={styles.courseTitle}>{currentItem.title}</h3>
              <p className={styles.courseDescription}>{currentItem.desc}</p>
              <a href="#" className={`btn-primary ${styles.joinButton}`}>
                Join Now
              </a>
            </div>
          </div>
        </div>

        <div className={styles.courseNavigation}>
          <div className={styles.courseIndicators}>
            {k12CoursesData.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicator} ${
                  idx === currentIndex ? styles.activeIndicator : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View course ${idx + 1}`}
              />
            ))}
          </div>
          <a href="#" className={`btn-primary ${styles.viewAllButton}`}>
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default K12Courses;
