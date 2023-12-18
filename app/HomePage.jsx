"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Socials />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
