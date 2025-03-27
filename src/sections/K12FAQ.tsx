import React, { useState } from "react";
import styles from "../styles/K12FAQ.module.css";

const K12FAQ = () => {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Toggle function for expanding/collapsing FAQ items
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className={styles.faqContainer}>
      <div className="container">
        <div id="faq-section" data-animate className={styles.faqSection}>
          <h2 className={`section-title gradient-text ${styles.faqTitle}`}>
            Frequently Asked Questions
          </h2>

          <div className={styles.faqList}>
            {[
              {
                question: "What age groups do your programs cater to?",
                answer:
                  "Our programs are designed for students from kindergarten through 12th grade, with age-appropriate content and teaching methodologies for each developmental stage.",
              },
              {
                question:
                  "How are your programs different from traditional education?",
                answer:
                  "RoboMonk programs focus on hands-on, project-based learning that emphasizes critical thinking, creativity, and real-world application. We integrate technology and innovation into every aspect of learning.",
              },
              {
                question: "Do you offer both online and in-person classes?",
                answer:
                  "Yes, we provide flexible learning options including in-person classes, online live sessions, and hybrid models to accommodate different learning preferences and situations.",
              },
              {
                question: "What qualifications do your instructors have?",
                answer:
                  "Our instructors are industry professionals and educators with extensive experience in their fields. They undergo rigorous training in our teaching methodologies and are passionate about inspiring the next generation.",
              },
              {
                question: "How do you measure student progress?",
                answer:
                  "We use a comprehensive assessment approach that includes project evaluations, skill demonstrations, portfolio development, and regular progress reports to track and communicate student growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`card ${styles.faqCard} ${expandedItems.includes(index) ? styles.expanded : ''}`}
                onClick={() => toggleItem(index)}
              >
                <h3 className={styles.faqQuestion}>
                  {item.question}
                  <span className={styles.toggleIcon}>
                    {expandedItems.includes(index) ? '−' : '+'}
                  </span>
                </h3>
                <div className={`${styles.faqAnswer} ${expandedItems.includes(index) ? styles.show : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default K12FAQ;
