"use client";

import styles from "./page.module.css";
import Navbar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main>
      <Navbar />
      <section className={styles.mainBody}>
        <div className={styles.landingSection}>
          <div className={styles.welcomeSection}>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={styles.heading}
            >
              <span className={styles.subHeading}>Welcome to </span>Robomonk.ai
            </motion.h1>
            <h2 className={styles.subHeading}>
             {` Gear Up for the Future! 🚀 Your Robotics & AI Journey Starts Soon!`}
            </h2>
            <h2 className={styles.subHeading}>
             {` 🔧 We're Building Something Epic!`}
            </h2>
            <p className={styles.welcomeText}>
              {`RoboMonk is crafting a next-gen learning platform where innovation
              meets education. Get ready to build, code, and create with
              hands-on Robotics, AI, and STEM learning!`}
            </p>
          </div>

          <div id="Coming-Up-Section" className={styles.comingUpSection}>
            <div className={styles.comingUpImgContainer}>
              <Image
                src={"/images/e-learning-stock-img-two.jpg"}
                alt={"Coming Up Section Img"}
                height={350}
                width={350}
                priority
                className={styles.comingUpImg}
              />
            </div>
            <div className={styles.comingUpContainer}>
              <h2 className={styles.heading}>What’s Coming?</h2>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.comingUpTxt}
              >
                Fun & Interactive Robotics Challenges
              </motion.h3>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.comingUpTxt}
              >
                AI & Coding for Beginners & Experts
              </motion.h3>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.comingUpTxt}
              >
                Hands-on DIY Kits & Experiments
              </motion.h3>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.comingUpTxt}
              >
                Industry-Aligned Curriculum
              </motion.h3>
            </div>
          </div>

          <div className={styles.stayInLoopSection}>
            <div className={styles.stayInLoopImgContainer}>
              <Image
                src={"/images/website-under-construction-img-one.jpeg"}
                alt={"Stay In Loop Section Img"}
                height={350}
                width={350}
                priority
                className={styles.stayInLoopImg}
              />
            </div>
            <div className={styles.stayInLoopContainer}>
              <h2 className={styles.heading}>💡 Stay in the Loop!</h2>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.stayInLoopTxt}
              >
                📩 Sign up for updates and be the first to experience the future
                of learning!
              </motion.h3>
            </div>
          </div>

          <form id="Contact-Us-Section" className={styles.formSection}>
            <h2 className={styles.heading}>🚀 Join the Waitlist</h2>
            <div className={styles.formContainer}>
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Occupation" />
              <input type="text" placeholder="Institution" />
              <input type="text" placeholder="City" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Mobile No." />
              <textarea placeholder="Message" rows={4}></textarea>
            </div>
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
