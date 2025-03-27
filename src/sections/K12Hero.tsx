import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/K12Hero.module.css";
import { VisibilityState } from "@/utils/types";

const K12Hero = () => {
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section elements
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImgUrls.length);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % magicWords.length);
        setKey((prevKey) => prevKey + 1);
      }, 1000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const heroImgUrls = [
    "/images/Robotics.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018271/Robomonk%20AI%20Assets/mb2ejrjaxjmp8gkobprf.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018365/Robomonk%20AI%20Assets/swnmrwr266hgufjp5uyd.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018418/Robomonk%20AI%20Assets/qrxteczaaoyp6j4yqhgs.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018473/Robomonk%20AI%20Assets/kgjafwgqtkoz4kufhnu2.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018506/Robomonk%20AI%20Assets/u6b8ol6xd0ujewfpcsfl.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018118/Robomonk%20AI%20Assets/pyhza7ve18ck42als6ts.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018583/Robomonk%20AI%20Assets/xobb5yheqjrakzdhxcsl.png",
    "https://res.cloudinary.com/doxrqtfxo/image/upload/v1743018621/Robomonk%20AI%20Assets/m5o0wetvrqnvqhqqh7yd.png",
  ];

  const magicWords = [
    "Robotics 🤖",
    "Artificial Intelligence 🧠",
    "Mechanics ⚙️",
    "Mathematics 🔢",
    "Chess ♟️",
    "Arts 🎨",
    "Science 🔬",
    "AR / VR 🥽",
    "Coding 💻",
  ];

  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingInnerContainer}>
        <div className={styles.landingLeft} id="landing-text" data-animate>
          <h2
            className={`${styles.landingHeading} ${
              isVisible["landing-text"] ? "fade-in visible" : "fade-in"
            }`}
          >
            Experience the right skills for your child with
          </h2>
          <h2 key={key} className={`gradient-text ${styles.magicWord}`}>
            {magicWords[currentWordIndex]}
          </h2>
          <button className={`btn-primary ${styles.ctaButton}`}>
            Start Learning Today
          </button>
        </div>
        <div className={styles.landingRight}>
          <Image
            src={"/images/blob.svg"}
            alt="K-12 Landing Blob"
            height={400}
            width={400}
            priority
            className={`${styles.landingBlob} pulse-animation`}
          />
          <Image
            src={heroImgUrls[currentImgIndex]}
            alt="K-12 Student Hero"
            height={300}
            width={300}
            priority
            className={`${styles.studentHero} float-animation`}
            style={{ objectFit: "contain", width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default K12Hero;
