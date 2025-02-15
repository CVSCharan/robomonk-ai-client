"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import Image from "next/image";

const K12Programs = () => {
  const magicWords = [
    "Robotics",
    "Artificial Intelligence",
    "Mechanics",
    "Mathematics",
    "Chess",
    "Arts",
    "Science",
    "AR / VR",
    "Coding",
  ];

  const heroImgUrls = [
    "/images/student-hero.png",
    "/images/student-hero-one.png",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImgUrls.length);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % magicWords.length);
        setKey((prevKey) => prevKey + 1);
      }, 500); // 0.5s delay before changing the word
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <K12Nav />
      <section className={styles.mainbody}>
        <div className={styles.landingContainer}>
          <div className={styles.landingInnerContainer}>
            <div className={styles.landingLeft}>
              <h2 className={styles.landingHeading}>
                Experience the right skills to your child
              </h2>
              <h2 key={key} className={styles.magicWord}>
                {magicWords[currentWordIndex]}
              </h2>
            </div>
            <div className={styles.landingRight}>
              <Image
                src={"/images/blob.svg"}
                alt="K-12 Landing Blob"
                height={500}
                width={500}
                priority
                className={styles.landingBlob}
              />
              <Image
                src={heroImgUrls[currentImgIndex]}
                alt="K-12 Landing Blob"
                height={400}
                width={400}
                priority
                className={styles.studentHero}
              />
            </div>
          </div>
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.lidContainer}>
            <Image
              src={"/images/LID.gif"}
              alt="LID Banner"
              height={250}
              width={600}
              priority
              className={styles.lidImg}
            />
            <h2 className={styles.lidHeading}>
              <span className={styles.lidSpan}>LEARN</span> |{" "}
              <span className={styles.lidSpan}>INVENT</span> |{" "}
              <span className={styles.lidSpan}>DISCOVER</span>
            </h2>
            <h2 className={styles.lidTxt} style={{ margin: "0.5rem 0" }}>
              Learn. Invent. Discover. (L.I.D) – The RoboMonk Philosophy
            </h2>
            <h3 className={styles.lidSubTxt} style={{ margin: "0.5rem 0" }}>
              At RoboMonk, we believe in Learn. Invent. Discover. (L.I.D)—a
              dynamic approach to education that nurtures curiosity, creativity,
              and innovation. This philosophy ensures that learners not only
              acquire knowledge but also apply it to solve real-world
              challenges. Through hands-on experiences, project-based learning,
              and industry-aligned methodologies, we empower students to think
              critically, innovate boldly, and explore limitless possibilities.
            </h3>
            <div className={styles.lidContentContainer}>
              <div className={styles.lidContent}>
                <h2 className={styles.lidTxt} style={{ alignSelf: "center" }}>
                  Learn
                </h2>
                <h2 className={styles.lidTxt}>
                  Gaining Knowledge & Building Strong Foundations
                </h2>
                <h3 className={styles.lidPointsTxt}>
                  • Hands-on, experiential learning with real-world
                  applications.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Multidisciplinary approach integrating Robotics, AI, and
                  STEM.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Problem-solving and critical thinking at the core of
                  learning.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Engaging, student-centric methodologies that encourage
                  curiosity.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Learning beyond textbooks with interactive experiments and
                  projects.
                </h3>
              </div>
              <div className={styles.lidContent}>
                <h2 className={styles.lidTxt} style={{ alignSelf: "center" }}>
                  Invent
                </h2>
                <h2 className={styles.lidTxt}>
                  Creating & Innovating Solutions
                </h2>
                <h3 className={styles.lidPointsTxt}>
                  • Encouraging a maker mindset with hands-on prototyping.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Developing unique solutions through design thinking.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Applying creativity to real-world engineering and tech
                  challenges.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Bridging academic knowledge with industry-oriented
                  problem-solving.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Fostering collaboration to develop and refine innovative
                  ideas.
                </h3>
              </div>
              <div className={styles.lidContent}>
                <h2 className={styles.lidTxt} style={{ alignSelf: "center" }}>
                  Discover
                </h2>
                <h2 className={styles.lidTxt}>
                  Exploring New Possibilities & Expanding Horizons
                </h2>
                <h3 className={styles.lidPointsTxt}>
                  • Cultivating curiosity to explore emerging technologies and
                  trends.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Empowering students to push boundaries and challenge
                  assumptions.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Enabling self-driven exploration and independent learning.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Connecting classroom concepts with real-world innovations.
                </h3>
                <h3 className={styles.lidPointsTxt}>
                  • Inspiring students to pursue careers in future technologies.
                </h3>
              </div>
            </div>

            <p className={styles.lidPara}>
              This L.I.D philosophy is embedded in RoboMonk’s curriculum,
              training, and approach, ensuring that every learner is prepared to
              thrive in the ever-evolving technological landscape. 🚀
            </p>
          </div>
        </div>
        <div className={styles.emccContainer}>
          <div className={styles.emccInnerContainer}>
            <h2 className={styles.emccHeading}>
              EMCC Methodology – Our Approach to Learning
            </h2>
            <div className={styles.emccContent}>
              <h2 className={styles.emccTxt}>Exploration & Play</h2>
              <h3 className={styles.emccSubTxt}>
                Encouraging curiosity-driven learning through hands-on
                experiments, tinkering, and real-world problem-solving. Students
                engage in open-ended exploration, fostering creativity and a
                deep understanding of concepts.
              </h3>
            </div>
            <div className={styles.emccContent}>
              <h2 className={styles.emccTxt}>Multisensory Learning</h2>
              <h3 className={styles.emccSubTxt}>
                Integrating visual, auditory, and kinesthetic experiences to
                enhance comprehension and retention. This approach makes
                learning more engaging and accessible for diverse learners.
              </h3>
            </div>
            <div className={styles.emccContent}>
              <h2 className={styles.emccTxt}>Collaborative Inquiry</h2>
              <h3 className={styles.emccSubTxt}>
                Promoting teamwork and inquiry-based learning where students
                work together to analyze problems, test hypotheses, and develop
                innovative solutions through shared knowledge.
              </h3>
            </div>
            <div className={styles.emccContent}>
              <h2 className={styles.emccTxt}>
                Creative Expression & Innovation
              </h2>
              <h3 className={styles.emccSubTxt}>
                Encouraging students to think outside the box, design unique
                solutions, and develop their own inventions. This empowers them
                to become creators rather than just consumers of technology.
              </h3>
            </div>
            <div className={styles.emccContent}>
              <h2 className={styles.emccTxt}>
                {" "}
                Learn. Invent. Discover. (L.I.D)
              </h2>
              <h3 className={styles.emccSubTxt}>
                Our philosophy inspires students to continuously learn new
                skills, invent groundbreaking solutions, and discover new
                possibilities, preparing them for the future. 🚀
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default K12Programs;
