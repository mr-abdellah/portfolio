/** @format */

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { UserPlusIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-start p-5 sticky top-0 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          className="cursor-pointer"
          url="https://twitter.com/belkaiduus"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://linkedin.com/in/belkaidus"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://instagram.com/abdou.coding"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-50 cursor-pointer"
      >
        <a
          className="flex items-center"
          href="https://docs.google.com/document/d/1oX3GGd1LP3ALImlUwtwjxvw00AQH-7o-9_j7yIWfxf8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserPlusIcon className="w-7 mr-2" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get My Resume
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
