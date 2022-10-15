import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TurricoImg from "/assets/projects/tourrico.png";
import LinkedInImg from "/assets/projects/linkedIn.png";
import { SocialIcon } from "react-social-icons";
import { EyeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      title: "Turrico",
      description:
        "Turrico is a web app for a tour aggency , it help people to find the best places in the world to discover and visit",
      img: TurricoImg,
      technologies: [
        "React Js",
        "Redux",
        "Css",
        "Material Ui",
        "React Icons",
        "React Router",
        "Firebase Auth",
      ],
      github: "https://github.com/mr-abdellah/Tour-landing-page",
      live: "https://tourrico.netlify.app/",
    },
    {
      title: "LinkedIn Clone",
      description:
        "A LinkedIn clone , you can login / logout and sign up with email and password, share a post and see your profile with your posts",
      img: LinkedInImg,
      technologies: [
        "Next Js",
        "Typescript",
        "Redux",
        "Css",
        "Material Ui",
        "React Router",
        "Firebase Auth",
        "React Icons",
        "React Social Icons",
      ],
      github: "https://github.com/mr-abdellah/linkedIn",
      live: "https://linkedin-mr-abdellah.netlify.app/",
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.div
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
            >
              <Image
                src={project.img.src}
                width="300px"
                height="250px"
                alt=""
              />
            </motion.div>
            <div className="space-y-4 w-screen px-0 md:px-5 max-w-6xl">
              <h4 className="text-2xl whitespace-nowrap font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 whitespace-pre-line">
                  Case Study {index + 1} of {projects.length} :{" "}
                </span>
                {project.title}
              </h4>
              <p className="text-sm mx-auto w-[80%] text-center md:text-left">
                {project.description}
              </p>
              <h4 className="mx-auto w-[90%]">Used technologies :</h4>
              <div className=" mx-auto w-[90%] flex flex-wrap gap-x-3 justify-start">
                {project.technologies.map((tech, index) => (
                  <>
                    <p
                      key={index}
                      className="w-[30%] whitespace-nowrap text-sm"
                    >
                      - {tech}
                    </p>
                  </>
                ))}
              </div>
              <div className="flex items-center justify-between mx-auto w-[90%]">
                <a
                  className="w-[40%]"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  - Source Code
                </a>
                <a
                  className="w-[40%]"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  - Live demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
