"use client";
import Blood from "@/components/main/Blood";
import Education from "@/components/main/Education";
import Health from "@/components/main/Health";
import Hero from "@/components/main/Hero";
import OurPurpose from "@/components/main/OurPurpose";
import Pakundia from "@/components/main/Pakundia";
import ScrollToTop from "@/components/main/ScroolToTop";
import Volunteer from "@/components/main/Volunteer";
import We from "@/components/main/We";
import { useRef } from "react";

const Main = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <OurPurpose sectionRef={sectionRef} />
      <Pakundia />
      <Health />
      <Education />
      <Blood />
      <Volunteer />
      <We />
      <ScrollToTop />
    </>
  );
};

export default Main;
