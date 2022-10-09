/** @format */

import { motion } from "framer-motion";
// import Image from "next/image";
import React from "react";
import project1Img from "/assets/projects/tourrico.png";

type Props = { Image?: string };

function Projects({ Image }: Props) {
  const projects = [
    {
      title: "Turrico",
      description:
        "Turrico is a web app for a tour aggency , it help people to find the best places in the world to discover and visit",
      img: project1Img,
      technologies: [
        "React Js",
        "Redux",
        "Css",
        "Material Ui",
        "React Icons",
        "React Router",
        "Firebase Auth",
      ],
    },
    {
      title: "Turrico",
      description:
        "Turrico is a web app for a tour aggency , it help people to find the best places in the world to discover and visit",
      img: project1Img,
      technologies: [
        "React Js",
        "Redux",
        "Css",
        "Material Ui",
        "React Icons",
        "React Router",
        "Firebase Auth",
      ],
    },
    {
      title: "Turrico",
      description:
        "Turrico is a web app for a tour aggency , it help people to find the best places in the world to discover and visit",
      img: project1Img,
      technologies: [
        "React Js",
        "Redux",
        "Css",
        "Material Ui",
        "React Icons",
        "React Router",
        "Firebase Auth",
      ],
    },
    {
      title: "Turrico",
      description:
        "Turrico is a web app for a tour aggency , it help people to find the best places in the world to discover and visit",
      img: project1Img,
      technologies: [
        "React Js",
        "Redux",
        "Css",
        "Material Ui",
        "React Icons",
        "React Router",
        "Firebase Auth",
      ],
    },
  ];

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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{
                once: true,
              }}
              src={project.img.src}
              width="300px"
              height="250px"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length} :{" "}
                </span>
                {project.title}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
