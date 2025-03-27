import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import CalendarWidget from "@/components/CalendarWidget";
import K12Footer from "@/sections/K12Footer";

const SparkEvents = () => {
  const currentEvents = [
    {
      title: "Coding for Kids",
      description:
        "Introduction to coding for elementary and middle school students.",
      icon: "💻",
    },
    {
      title: "Robotics for Beginners",
      description: "Building and programming basic robots.",
      icon: "🤖",
    },
    {
      title: "AI/ML for High School Students",
      description:
        "Exploring artificial intelligence and machine learning concepts.",
      icon: "🧠",
    },
    {
      title: "3D Printing for Beginners",
      description: "Creating models and learning 3D printing techniques.",
      icon: "🖨️",
    },
    {
      title: "Math Puzzles and Games",
      description: "Engaging and fun math competitions for all ages.",
      icon: "🧩",
    },
  ];

  const upcomingEvents = [
    {
      title: "AI/ML Bootcamp",
      description:
        "A comprehensive 3-day bootcamp introducing students to machine learning algorithms and practical applications.",
      icon: "🤖",
    },
    {
      title: "Advanced Robotics Competition",
      description:
        "A competition for high school students to design and program complex robots for specific challenges.",
      icon: "🦾",
    },
    {
      title: "Drones and Automation Workshop",
      description:
        "Learn about drones and how to automate processes using technology.",
      icon: "🚁",
    },
    {
      title: "Coding for Teens",
      description:
        "A coding competition aimed at high school students, focusing on problem-solving with code.",
      icon: "👨‍💻",
    },
    {
      title: "Robotics Design Challenge",
      description:
        "A competition where students will design, build, and program robots to perform specific tasks.",
      icon: "🔧",
    },
  ];

  const benefits = [
    {
      title: "Skill Development",
      description:
        "Participants gain hands-on experience and practical skills in emerging technologies.",
      icon: "📈",
    },
    {
      title: "Engagement & Networking",
      description:
        "Connect with peers and mentors who share similar interests.",
      icon: "🤝",
    },
    {
      title: "Recognition & Awards",
      description:
        "Winners and top performers receive certificates, prizes, and recognition.",
      icon: "🏆",
    },
    {
      title: "Flexible Options",
      description:
        "With online and offline options, participants can join from anywhere.",
      icon: "🌐",
    },
    {
      title: "Custom Challenges",
      description:
        "We tailor competitions to suit different skill levels, from beginners to advanced students.",
      icon: "🎯",
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
                Spark <span className={styles.highlightText}>Events</span>
              </h1>
              <p className={styles.pageSubtitle}>
                Ignite curiosity, foster innovation, and showcase talent through
                exciting competitions and workshops
              </p>
            </div>
          </div>
        </section>

        {/* Why Participate Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Why Participate in Spark Events?
                </h2>
                <p className={styles.sectionText}>
                  At Robomonk, Spark Events provide students with exciting
                  opportunities to showcase their skills, learn through
                  competition, and enhance their knowledge in various fields
                  such as Robotics, AI/ML, Coding, and more. These events are
                  designed to challenge students, stimulate their creative
                  thinking, and promote teamwork and innovation. Participating
                  in Spark Events allows students to gain practical experience,
                  receive recognition, and explore potential career pathways in
                  technology.
                </p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="https://res.cloudinary.com/doxrqtfxo/image/upload/v1743025407/Robomonk%20AI%20Assets/smxpvx5tfmbmlkgfzucc.jpg"
                  alt="Students participating in Spark Events"
                  width={500}
                  height={350}
                  className={styles.sectionImage}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Current Available Demo Batches & Competitions */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Current Available Demo Batches & Competitions
            </h2>
            <p className={styles.sectionText}>
              We offer a range of current demo batches and competitions. These
              events are designed to provide hands-on experience in various
              subjects, with the opportunity for students to engage directly
              with real-world applications.
            </p>

            <div className={styles.calendarSection}>
              <h3 className={styles.subSectionTitle}>
                Calendar of Available Events
              </h3>
              <p className={styles.subSectionText}>
                The calendar below shows upcoming demo batches and competitions.
                Students can view available slots and book their place in these
                exciting events.
              </p>
              <div className={styles.calendarContainer}>
                <CalendarWidget type="current" />
              </div>
            </div>

            <div className={styles.eventsGrid}>
              <h3 className={styles.subSectionTitle}>
                Courses and Competitions
              </h3>
              <p className={styles.subSectionText}>
                The following courses are currently available as demo batches:
              </p>
              <div className={styles.cardsGrid}>
                {currentEvents.map((event, index) => (
                  <div key={index} className={styles.eventCard}>
                    <div className={styles.eventIcon}>{event.icon}</div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className={styles.noteText}>
                Participants can book slots for these demo batches and
                competitions through the calendar above.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Competitions, Bootcamps & Demo Batches */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitle}>
              Upcoming Competitions, Bootcamps & Demo Batches
            </h2>
            <p className={styles.sectionText}>
              Robomonk is also preparing a series of upcoming competitions,
              bootcamps, and demo batches for students to further develop their
              skills. These events offer students the chance to dive deeper into
              advanced topics and prepare for future challenges.
            </p>

            <div className={styles.calendarSection}>
              <h3 className={styles.subSectionTitle}>
                Calendar of Upcoming Events
              </h3>
              <p className={styles.subSectionText}>
                Below is a calendar showing the upcoming competitions,
                bootcamps, and demo batches. Users can easily book their slots
                by selecting the event.
              </p>
              <div className={styles.calendarContainer}>
                <CalendarWidget type="upcoming" />
              </div>
            </div>

            <div className={styles.eventsGrid}>
              <h3 className={styles.subSectionTitle}>
                Featured Upcoming Events
              </h3>
              <div className={styles.cardsGrid}>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={styles.eventCard}>
                    <div className={styles.eventIcon}>{event.icon}</div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Spark Events */}
        <section className={`${styles.section} ${styles.altSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Why Choose Spark Events?</h2>
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
        <section className={styles.section}>
          <div className="container">
            <div className={styles.ctaContainer}>
              <h2 className={styles.ctaTitle}>
                Ready to Ignite Your Potential?
              </h2>
              <p className={styles.ctaText}>
                Join our Spark Events and embark on an exciting journey of
                learning, competition, and growth.
              </p>
              <button className={styles.ctaButton}>
                Register Now
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

export default SparkEvents;
