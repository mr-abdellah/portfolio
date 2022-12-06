/** @format */

import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/img2.jpg";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-xl">
        About
      </h3>
      <motion.img
        initial={{
          opacity: 0,
          x: -300,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        src={img2.src}
        className="-mb-28  md:mb-0 flex-shrink-0 w-44 h-4w-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-6 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I started coding in January 2022, I&apos;m a junior full stack web
          developer who loves building applications & learning new technologies,
          I love helping others learning how to code . When I&apos;m not coding,
          I&apos;ll be playing video games or reading some historical books
        </p>
      </div>
    </motion.div>
  );
}

export default About;
