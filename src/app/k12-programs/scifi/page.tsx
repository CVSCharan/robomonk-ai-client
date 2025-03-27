import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import K12Footer from "@/sections/K12Footer";

const K12ScifiPage = () => {
  const projectTypes = [
    {
      title: "Environmental Science Projects",
      description:
        "Exploring the impact of human activities on the environment, climate change, sustainability, pollution, and more.",
      icon: "🌍",
    },
    {
      title: "Robotics and Automation",
      description:
        "Designing and programming robots to solve real-world problems.",
      icon: "🤖",
    },
    {
      title: "Physics and Engineering",
      description:
        "Investigating principles of mechanics, electricity, magnetism, and materials science.",
      icon: "⚙️",
    },
    {
      title: "Chemistry Projects",
      description:
        "Conducting experiments related to chemical reactions, materials, and processes.",
      icon: "🧪",
    },
    {
      title: "Biology and Life Sciences",
      description:
        "Projects related to plants, animals, human biology, genetics, and health.",
      icon: "🧬",
    },
    {
      title: "Mathematics Projects",
      description:
        "Exploring mathematical concepts through problem-solving, games, and real-world applications.",
      icon: "🔢",
    },
    {
      title: "Technology and Innovation",
      description:
        "Creating innovative solutions using technology, including coding, machine learning, and artificial intelligence.",
      icon: "💻",
    },
    {
      title: "Astronomy & Space Science",
      description:
        "Investigating celestial bodies, space exploration, and related technologies.",
      icon: "🔭",
    },
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description:
        "Our team of experienced mentors provides professional guidance every step of the way.",
      icon: "👨‍🏫",
    },
    {
      title: "Holistic Approach",
      description:
        "We focus on the overall development of students, helping them grow as critical thinkers and problem-solvers.",
      icon: "🧠",
    },
    {
      title: "Creative Projects",
      description:
        "We encourage students to explore innovative ideas and solutions that go beyond traditional projects.",
      icon: "💡",
    },
    {
      title: "Flexible Support",
      description:
        "Whether you&apos;re participating individually or as part of a school or institution, we offer adaptable support to meet your unique needs.",
      icon: "🔄",
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
                Science Fair{" "}
                <span className={styles.highlightText}>
                  Assistance & Mentorship
                </span>
              </h1>
              <p className={styles.pageSubtitle}>
                Empowering students to explore, experiment, and showcase their
                scientific curiosity
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
                  {`At Robomonk, we believe in empowering students to explore,
                  experiment, and showcase their scientific curiosity. Our
                  Science Fair Assistance & Mentorship program is designed to
                  provide students with the tools, knowledge, and guidance they
                  need to succeed in science fairs. Whether you're working on a
                  project as an individual or as part of a team, we offer
                  personalized support to help bring your ideas to life and
                  guide you through the process from concept to presentation.`}
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743031495/Robomonk%20AI%20Assets/qnosam5fcxbbsc7tjmmc.jpg"
                  alt="Students working on science fair projects"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Support Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our Support</h2>
            <p className={styles.sectionText}>
              Robomonk offers comprehensive support for students, schools, and
              institutions participating in science fairs. Our team of experts
              provides guidance on selecting projects, conducting experiments,
              documenting results, and preparing presentations. We work closely
              with schools and institutions to ensure that the support is
              tailored to their specific needs and requirements.
            </p>

            <div className={styles.supportCards}>
              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>👨‍🎓</div>
                <h3 className={styles.supportTitle}>Individual Support</h3>
                <p className={styles.supportDescription}>
                  Mentorship for individual students to develop their science
                  fair projects, from brainstorming ideas to final
                  presentations.
                </p>
              </div>

              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>🏫</div>
                <h3 className={styles.supportTitle}>
                  School & Institution Support
                </h3>
                <p className={styles.supportDescription}>
                  Helping schools and institutions organize and manage science
                  fair participation, including assistance with project
                  creation, logistics, and preparation.
                </p>
              </div>

              <div className={styles.supportCard}>
                <div className={styles.supportIcon}>🔧</div>
                <h3 className={styles.supportTitle}>Customizable Assistance</h3>
                <p className={styles.supportDescription}>
                  Support based on mutual understandings of specific needs,
                  ensuring every participant gets the help they require.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Projects Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743031495/Robomonk%20AI%20Assets/gsdtpknjqtxvhj6i58hx.jpg"
                  alt="Students presenting science fair projects"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Types of Projects (K-12 Projects)
                </h2>
                <p className={styles.sectionText}>
                  {`Robomonk's Science Fair Assistance & Mentorship program covers
                  a wide range of project categories for K-12 students,
                  including but not limited to:`}
                </p>
              </div>
            </div>

            <div className={styles.projectsGrid}>
              {projectTypes.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectIcon}>{project.icon}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where We Offer Our Services Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Where We Offer Our Services</h2>
            <p className={styles.sectionText}>
              {`Robomonk's Science Fair Assistance & Mentorship can be integrated
              into schools, institutions, and colleges based on their specific
              needs. We are committed to providing support where it matters
              most, whether it's for individual students or entire educational
              institutions.`}
            </p>

            <div className={styles.servicesContainer}>
              <div className={styles.serviceContent}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>🎯</div>
                  <div className={styles.serviceText}>
                    <h3 className={styles.serviceTitle}>Tailored Support</h3>
                    <p className={styles.serviceDescription}>
                      {`We offer flexible and personalized assistance to ensure
                      that each student's project aligns with their academic`}
                      goals.
                    </p>
                  </div>
                </div>

                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>🔄</div>
                  <div className={styles.serviceText}>
                    <h3 className={styles.serviceTitle}>
                      School/Institution Integration
                    </h3>
                    <p className={styles.serviceDescription}>
                      Schools and institutions can integrate our mentorship
                      program into their existing curricula or extracurricular
                      activities, ensuring students receive continuous support
                      throughout the science fair process.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.serviceImage}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743031594/Robomonk%20AI%20Assets/rmxiv3mpddqsbyg7jhcz.jpg"
                  alt="Science fair mentorship in action"
                  width={500}
                  height={350}
                  className={styles.roundedImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Robomonk Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Why Choose Robomonk for Your Science Fair Needs?
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
        </section>

        {/* CTA Section */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <div className={styles.ctaContainer}>
              <h2 className={styles.ctaTitle}>
                Ready to Showcase Your Scientific Talent?
              </h2>
              <p className={styles.ctaText}>
                Join our Science Fair Assistance & Mentorship program and turn
                your ideas into award-winning projects.
              </p>
              <button className={styles.ctaButton}>
                Get Started Today
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

export default K12ScifiPage;
