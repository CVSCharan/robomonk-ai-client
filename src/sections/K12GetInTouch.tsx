import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import styles from "../styles/K12GetInTouch.module.css";

const K12GetInTouch = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          email: formData.email,
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
            email: "",
            subject: "",
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
    <>
      <section className={styles.contactSection}>
        <div id="GetInTouch" className={styles.container}>
          <div
            id="contact-section"
            data-animate
            className={styles.contactContent}
          >
            <h2
              className={`section-title gradient-text ${styles.sectionTitle}`}
            >
              Get in Touch
            </h2>
            <p className={styles.contactIntro}>
              {`Have questions or ready to start? Our team is here to help you
              navigate your child's educational journey.`}
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardTitle}>Contact Information</h3>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemHeader}>
                    <EmailIcon className={styles.contactIcon} />
                    <h4 className={styles.contactItemTitle}>Email</h4>
                  </div>
                  <p className={styles.contactItemText}>info@robomonk.ai</p>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactItemHeader}>
                    <PhoneIcon className={styles.contactIcon} />
                    <h4 className={styles.contactItemTitle}>Phone</h4>
                  </div>
                  <p className={styles.contactItemText}>+91 9999999999</p>
                </div>

                <div className={styles.contactItem}>
                  <h4 className={styles.contactItemTitle}>Follow Us</h4>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://www.instagram.com/robomonk.ai/?igsh=bnh1M2owOGRiOTRl#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram
                        className={`${styles.socialIcon} ${styles.blackIcon}`}
                      />
                    </a>
                    <a
                      href="https://wa.me/qr/K5ILKPFNLG76J1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon
                        className={`${styles.socialIcon} ${styles.blackIcon}`}
                      />
                    </a>
                    <a
                      href="https://www.threads.net/@robomonk.ai?invite=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Threads"
                    >
                      <Image
                        src={"/images/threads.png"}
                        alt={"Threads social media icon"}
                        height={24}
                        width={24}
                        priority
                        className={styles.threadsIcon}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/robomonk-ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon
                        className={`${styles.socialIcon} ${styles.blackIcon}`}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.formCard}>
                <h3 className={styles.cardTitle}>Send Us a Message</h3>

                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.formInput}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default K12GetInTouch;
