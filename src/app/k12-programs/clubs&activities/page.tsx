import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import K12Footer from "@/sections/K12Footer";

const ClubsAndActivitiesPage = () => {
  const offeringItems = [
    {
      icon: "🌐",
      title: "Offline & Online Options",
      description:
        "Flexibility to choose between in-person or virtual clubs based on your institution's needs.",
    },
    {
      icon: "👨‍🏫",
      title: "Trainer Engagements",
      description:
        "Access to skilled trainers and experts in various fields who can guide students effectively.",
    },
    {
      icon: "📚",
      title: "Academic Support",
      description:
        "Comprehensive assistance in enhancing the academic capabilities of students through structured programs.",
    },
    {
      icon: "🎮",
      title: "Recreation Activities",
      description:
        "Engaging games, competitions, and creative activities that make learning enjoyable.",
    },
    {
      icon: "🏆",
      title: "Sports & Games",
      description:
        "Incorporation of physical activities to foster teamwork, leadership, and healthy competition.",
    },
  ];

  return (
    <>
      <K12Nav />
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.pageTitle}>
                Clubs & <span className={styles.highlightText}>Activities</span>
              </h1>
              <p className={styles.pageSubtitle}>
                Fostering creativity, critical thinking, and innovation beyond
                the classroom
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
                <p className={styles.sectionText}>
                  At Robomonk, we believe in fostering creativity, critical
                  thinking, and innovation among students. Our Clubs &
                  Activities are designed to encourage students to explore,
                  learn, and develop essential skills that extend beyond the
                  classroom. These activities promote teamwork, problem-solving,
                  and leadership while integrating various subjects like Coding,
                  Mathematics, Robotics, AI/ML, and more.
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743020767/Robomonk%20AI%20Assets/grexjc6vr1aku02p376o.jpg"
                  alt="Students engaged in club activities"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Clubs Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Types of Clubs</h2>
            <p className={styles.sectionText}>
              Robomonk offers a diverse range of clubs catering to various
              interests and academic needs.
            </p>

            <div className={styles.clubsGrid}>
              <div className={styles.clubCard}>
                <div className={styles.clubIcon}>🤖</div>
                <h3 className={styles.clubTitle}>STEM Clubs</h3>
                <p className={styles.clubDescription}>
                  Coding, Robotics, 3D Printing, AI/ML, and more.
                </p>
              </div>

              <div className={styles.clubCard}>
                <div className={styles.clubIcon}>🎨</div>
                <h3 className={styles.clubTitle}>Creative Arts Clubs</h3>
                <p className={styles.clubDescription}>
                  Robotics design, drone-making, digital art, and animation.
                </p>
              </div>

              <div className={styles.clubCard}>
                <div className={styles.clubIcon}>🔬</div>
                <h3 className={styles.clubTitle}>Math and Science Clubs</h3>
                <p className={styles.clubDescription}>
                  Math puzzles, science experiments, and practical learning
                  sessions.
                </p>
              </div>

              <div className={styles.clubCard}>
                <div className={styles.clubIcon}>🏀</div>
                <h3 className={styles.clubTitle}>Sports and Games</h3>
                <p className={styles.clubDescription}>
                  Physical activities designed to improve teamwork and fitness.
                </p>
              </div>

              <div className={styles.clubCard}>
                <div className={styles.clubIcon}>📚</div>
                <h3 className={styles.clubTitle}>Academic Support</h3>
                <p className={styles.clubDescription}>
                  Tutoring in various subjects, exam preparation, and
                  skill-building.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Support Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743020768/Robomonk%20AI%20Assets/cw2m881p4ythls7v6kts.jpg"
                  alt="Robomonk support for educational institutions"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Support</h2>
                <p className={styles.sectionText}>
                  Robomonk is committed to supporting schools, institutions, and
                  colleges in achieving their educational goals. We provide:
                </p>
                <ul className={styles.featureList}>
                  <li>
                    Tailored programs based on specific needs and requirements.
                  </li>
                  <li>
                    Workshops and training sessions for teachers and students.
                  </li>
                  <li>
                    Assistance in creating custom learning paths for students.
                  </li>
                  <li>
                    Integration of technology and creative activities to enhance
                    learning experiences.
                  </li>
                  <li>
                    Support for clubs to operate smoothly and reach their full
                    potential.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Offer Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Where We Offer</h2>
            <p className={styles.sectionText}>
              We partner with schools, institutions, and colleges to establish
              and maintain clubs and activities based on their unique needs. Our
              flexible approach allows us to collaborate with educational
              institutions in various ways, whether it's a full-fledged club or
              a one-time event, ensuring that we align with the specific
              requirements of each institution.
            </p>

            <div className={styles.partnersContainer}>
              <div className={styles.partnerType}>
                <h3 className={styles.partnerTitle}>Schools</h3>
                <div className={styles.partnerIcon}>🏫</div>
              </div>
              <div className={styles.partnerType}>
                <h3 className={styles.partnerTitle}>Colleges</h3>
                <div className={styles.partnerIcon}>🎓</div>
              </div>
              <div className={styles.partnerType}>
                <h3 className={styles.partnerTitle}>Institutions</h3>
                <div className={styles.partnerIcon}>🏢</div>
              </div>
              <div className={styles.partnerType}>
                <h3 className={styles.partnerTitle}>Learning Centers</h3>
                <div className={styles.partnerIcon}>📖</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offerings Section */}
        <section className={styles.section}>
          <div className="container">
            <div
              className={`${styles.sectionContent} ${styles.offeringsSection}`}
            >
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Offerings</h2>
                <p className={styles.sectionText}>
                  Robomonk provides comprehensive solutions to educational
                  institutions, including:
                </p>
                <div className={styles.offeringsGrid}>
                  {offeringItems.map((item, index) => (
                    <div key={index} className={styles.offeringItem}>
                      <div className={styles.offeringHeader}>
                        <div className={styles.offeringIcon}>{item.icon}</div>
                        <h3 className={styles.offeringTitle}>{item.title}</h3>
                      </div>
                      <p className={styles.offeringDescription}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.conclusion}>
              <p>
                Robomonk's approach focuses on engaging students with hands-on
                experiences, ensuring that learning is not only informative but
                also fun and meaningful.
              </p>
              <div className={styles.ctaContainer}>
                <button className="btn-primary">
                  <span>Contact Us Today</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className={styles.btnIcon}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <K12Footer />
    </>
  );
};

export default ClubsAndActivitiesPage;
