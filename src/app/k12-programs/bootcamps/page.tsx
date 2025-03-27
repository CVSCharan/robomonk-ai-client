import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import K12Footer from "@/sections/K12Footer";

const K12Bootcamps = () => {
  const offerings = [
    {
      title: "Embedded Systems & IoT",
      icon: "🔌",
      description:
        "Learn to build smart devices and connect them to the internet.",
    },
    {
      title: "Drones&apos; Technology",
      icon: "🚁",
      description:
        "Explore the mechanics and programming of modern drone systems.",
    },
    {
      title: "Edge AI",
      icon: "🤖",
      description:
        "Implement AI algorithms on edge devices for real-time processing.",
    },
    {
      title: "Robotics & Automation",
      icon: "🦾",
      description:
        "Design, build, and program robots for various applications.",
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      description:
        "Dive into algorithms that enable computers to learn from data.",
    },
    {
      title: "3D Printing & Prototyping",
      icon: "🖨️",
      description:
        "Create physical models and functional prototypes using 3D printing.",
    },
    {
      title: "Renewable Energy Systems",
      icon: "☀️",
      description:
        "Explore sustainable energy solutions and their implementations.",
    },
    {
      title: "Electronics Design & Simulation",
      icon: "💡",
      description:
        "Learn to design and simulate electronic circuits and systems.",
    },
  ];

  const benefits = [
    {
      title: "Interactive Learning",
      description:
        "Experience hands-on sessions that blend theory with practical implementation.",
      icon: "👨‍💻",
    },
    {
      title: "Industry-Relevant Content",
      description:
        "Learn from cutting-edge topics aligned with real-world applications.",
      icon: "🌐",
    },
    {
      title: "Expert Mentors",
      description:
        "Our Bootcamps are led by experienced professionals and industry experts.",
      icon: "👨‍🏫",
    },
    {
      title: "Comprehensive Approach",
      description:
        "From basic concepts to advanced techniques, we cater to all learning levels.",
      icon: "📚",
    },
  ];

  const additionalBenefits = [
    {
      title: "Customizable Modules",
      description:
        "Tailor the workshop to address your institution&apos;s specific learning goals.",
      icon: "🧩",
    },
    {
      title: "Certification",
      description:
        "Participants receive certificates upon successful completion of Bootcamps.",
      icon: "🏆",
    },
    {
      title: "Post-Workshop Support",
      description:
        "Access resources, project guidance, and mentorship beyond the session.",
      icon: "🤝",
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
                <span className={styles.highlightText}>Bootcamps</span> at
                Robomonk
              </h1>
              <p className={styles.pageSubtitle}>
                Empowering the next generation through hands-on learning and
                innovative education.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Our Bootcamps Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Why Choose Our Bootcamps?
                </h2>
                <div className={styles.benefitsGrid}>
                  {benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitCard}>
                      <div className={styles.benefitIcon}>{benefit.icon}</div>
                      <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743026197/Robomonk%20AI%20Assets/cb0zbs6rmsddyqoq4mzy.jpg"
                  alt="Students participating in a Robomonk bootcamp"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* When Do We Conduct Bootcamps Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743026197/Robomonk%20AI%20Assets/tgcnmb97vf0u3efl2wly.jpg"
                  alt="Bootcamp schedule planning"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  When Do We Conduct Bootcamps?
                </h2>
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>📅</div>
                    <p>Our Bootcamps are tailored to fit your schedule!</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🕒</div>
                    <p>Conducted based on mutually agreed dates and times.</p>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>🏫</div>
                    <p>
                      Designed to align with the academic calendar or specific
                      institutional needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Are Our Bootcamps Held Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Where Are Our Bootcamps Held?
            </h2>
            <p className={styles.sectionText}>
              Flexible delivery modes to suit your requirements:
            </p>

            <div className={styles.locationCards}>
              <div className={styles.locationCard}>
                <div className={styles.locationIcon}>🏢</div>
                <h3 className={styles.locationTitle}>Offline</h3>
                <p className={styles.locationDescription}>
                  On-campus sessions at schools, colleges, and institutions.
                </p>
              </div>

              <div className={styles.locationCard}>
                <div className={styles.locationIcon}>💻</div>
                <h3 className={styles.locationTitle}>Online</h3>
                <p className={styles.locationDescription}>
                  Virtual Bootcamps accessible from anywhere, ensuring a
                  seamless learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Offerings Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Offerings</h2>
            <p className={styles.sectionText}>
              Robomonk&apos;s Bootcamps cover a variety of fields, enabling
              learners to dive into diverse topics, including:
            </p>

            <div className={styles.offeringsGrid}>
              {offerings.map((offering, index) => (
                <div key={index} className={styles.offeringCard}>
                  <div className={styles.offeringIcon}>{offering.icon}</div>
                  <h3 className={styles.offeringTitle}>{offering.title}</h3>
                  <p className={styles.offeringDescription}>
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Additional Benefits</h2>
                <div className={styles.additionalBenefitsGrid}>
                  {additionalBenefits.map((benefit, index) => (
                    <div key={index} className={styles.additionalBenefitCard}>
                      <div className={styles.additionalBenefitIcon}>
                        {benefit.icon}
                      </div>
                      <div className={styles.additionalBenefitContent}>
                        <h3 className={styles.additionalBenefitTitle}>
                          {benefit.title}
                        </h3>
                        <p className={styles.additionalBenefitDescription}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743026194/Robomonk%20AI%20Assets/foruyfqmqxqpv6sxrcay.jpg"
                  alt="Students receiving certificates after bootcamp completion"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>How to Get Started?</h2>

            <div className={styles.stepsContainer}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Contact Us</h3>
                  <p className={styles.stepDescription}>
                    Share your requirements via our website or email.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Schedule a Session</h3>
                  <p className={styles.stepDescription}>
                    Decide on the topics, mode, and schedule with our team.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Engage & Learn</h3>
                  <p className={styles.stepDescription}>
                    Join an enriching workshop designed for maximum impact.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.ctaContainer}>
              <h3 className={styles.ctaTitle}>Ready to Transform Learning?</h3>
              <p className={styles.ctaText}>
                Join our Bootcamps and embark on an exciting journey of hands-on
                learning and innovation.
              </p>
              <button className={styles.ctaButton}>
                Contact Us Today
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
        </section>
      </div>
      <K12Footer />
    </>
  );
};

export default K12Bootcamps;
