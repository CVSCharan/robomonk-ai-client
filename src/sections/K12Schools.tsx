import { k12SchoolClientsData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import styles from "../styles/K12Schools.module.css";

const K12Schools = () => {
  return (
    <section className={styles.schoolsSection}>
      <div className="container">
        <div id="schools-section" data-animate>
          <h2 className={`section-title gradient-text ${styles.sectionTitle}`}>
            Join the Family of Edventures
          </h2>

          <div className={styles.schoolsGrid}>
            {k12SchoolClientsData.map((item, index) => (
              <div key={index} className={`card ${styles.schoolCard}`}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.imgSrc}
                    alt={`${item.name} logo`}
                    height={120}
                    width={120}
                    priority
                    className={styles.schoolImage}
                  />
                </div>
                <h3 className={styles.schoolName}>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default K12Schools;
