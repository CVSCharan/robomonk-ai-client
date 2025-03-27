import Link from "next/link";
import React from "react";

const K12CTA = () => {
  return (
    <div className="container" style={{ padding: "5rem 2rem" }}>
      <div
        id="cta-section"
        data-animate
        style={{
          background: "var(--gradient-primary)",
          borderRadius: "20px",
          padding: "4rem 2rem",
          textAlign: "center",
          color: "white",
          boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "800",
            marginBottom: "1.5rem",
          }}
        >
          Ready to Begin Your Child's Learning Journey?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            lineHeight: "1.8",
          }}
        >
          Join RoboMonk today and give your child the advantage of future-ready
          skills through our innovative, hands-on learning programs.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="#GetInTouch"
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "30px",
              padding: "15px 40px",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
            }}
          >
            Schedule a Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default K12CTA;
