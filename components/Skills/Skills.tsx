/** @format */

import { motion } from "framer-motion";
import Skill from "../Skill/Skill";
import {
  Html,
  Css,
  Js,
  ReactIcon,
  Redux,
  Ruby,
  Postgres,
  Material,
  Tailwind,
  Git,
  Github,
  webpack,
} from "../../components";
type Props = {};

const Skills = (props: Props) => {
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
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
        <Skill src={Html.src} />
        <Skill src={Css.src} />
        <Skill src={Js.src} />
        <Skill src={Tailwind.src} />
        <Skill src={Material.src} />
        <Skill src={webpack.src} />
        <Skill src={ReactIcon.src} />
        <Skill src={Redux.src} />
        <Skill src={Postgres.src} />
        <Skill src={Ruby.src} />
        <Skill src={Git.src} />
        <Skill src={Github.src} />
      </div>
    </motion.div>
  );
};

export default Skills;
