/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ov">
      <Head>
        <title>Abdellah Belkaid | Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center ">
        <About />
      </section>

      <section id="skills" className="snap-start ">
        <Skills />
      </section>

      <section id="projects" className="snap-start ">
        <Projects />
      </section>

      <section id="contact" className="snap-center ">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
