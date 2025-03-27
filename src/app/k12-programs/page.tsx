"use client";

import React from "react";
import styles from "./page.module.css";
import K12Nav from "@/sections/K12Nav";
import K12Footer from "@/sections/K12Footer";
import K12GetInTouch from "@/sections/K12GetInTouch";
import K12Hero from "@/sections/K12Hero";
import K12LID from "@/sections/K12LID";
import K12EMCC from "@/sections/K12EMCC";
import K12Testimonials from "@/sections/K12Testimonials";
import K12Courses from "@/sections/K12Courses";
import K12Schools from "@/sections/K12Schools";
import K12CTA from "@/sections/K12CTA";
import K12FAQ from "@/sections/K12FAQ";

const K12Programs = () => {
  return (
    <>
      <K12Nav />
      <main className={styles.mainBody}>
        <K12Hero />

        <K12LID />

        <K12EMCC />

        <K12Courses />

        <K12Testimonials />

        <K12Schools />

        <K12CTA />

        <K12FAQ />

        <K12GetInTouch />
      </main>
      <K12Footer />
    </>
  );
};

export default K12Programs;
