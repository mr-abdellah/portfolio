/** @format */

import { motion } from "framer-motion";

type Props = {
  src?: SVGAElement;
};

const Skill = ({ src }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          // x: 0,
        }}
        transition={{
          duration: 1,
        }}
        src={`${src}`}
        className="rounded-full p-3 border border-gray-700 object-cover w-24 h-24 xl::w33 h-33 filter group-hover:border-gray-500 transition duration-300 ease-in-out"
      />
      <div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
