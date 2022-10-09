/** @format */

import React from "react";
import { motion } from "framer-motion";
import img2 from "../../assets/img2.png";
import Image from "next/image";

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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center gap-2 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={img2}
          className="-mb20 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-lg md:w-35 h-35 xl:w-[500px] xl:h-[600px]"
          width="200px"
          height="200px"
          alt="my image"
        />
      </motion.div>
      <div className="space-y-6 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I started coding in January 2022, I&apos;m a junior front-end web
          developer who loves building front-end applications & learning new
          technologies, I love helping others how to code . When I&apos;m not
          coding, I&apos;ll be playing video games or reading some historical
          books
        </p>
      </div>
    </motion.div>
  );
}

export default About;
