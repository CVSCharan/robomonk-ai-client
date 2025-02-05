"use client";

import styles from "./page.module.css";
import Navbar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Home() {
  const [formData, setFormData] = useState({
    full_name: "",
    occupation: "",
    institution: "",
    city: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure environment variables are defined, otherwise throw an error
    const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS environment variables.");
      setSnackbar({
        open: true,
        message: "Configuration error. Please try again later.",
        severity: "error",
      });
      return;
    }

    emailjs
      .send(
        service_id, // Service ID
        template_id, // Template ID
        {
          full_name: formData.full_name,
          occupation: formData.occupation,
          institution: formData.institution,
          city: formData.city,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        public_key // Public Key
      )
      .then(
        (response) => {
          console.log(response.text);
          setSnackbar({
            open: true,
            message: "Email sent successfully!",
            severity: "success",
          });
          setFormData({
            full_name: "",
            occupation: "",
            institution: "",
            city: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error:", error);
          setSnackbar({
            open: true,
            message: "Failed to send email. Please try again.",
            severity: "error",
          });
        }
      );
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

          <form
            id="Contact-Us-Section"
            onSubmit={handleSubmit}
            className={styles.formSection}
          >
            <h2 className={styles.heading}>🚀 Join the Waitlist</h2>
            <div className={styles.formContainer}>
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="occupation"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution"
                value={formData.institution}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
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

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity as "success" | "error"}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </main>
  );
}
