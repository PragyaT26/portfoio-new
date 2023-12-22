"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">



        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] pr-2">
            UI/UX Designer & Frontend Developer
          </h1>
        </motion.div>

      <motion.h1
          variants={slideInFromTop}
          className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold py-1"
        >
          Pragya Tiwari
        </motion.h1>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Crafting
            <span className="text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}unique and engaging{" "}
            </span>
            digital experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-center md:text-left text-gray-400 my-5 max-w-[600px]"
        >
          As a <span className="text-purple-500 font-semibold">UX designer</span>, I excel in creating <span className="text-cyan-500 font-semibold">intuitive, business-aligned</span> digital experiences, leveraging tools like <span className="text-white font-semibold">Figma and Adobe XD</span> for end-to-end design solutions. My expertise lies in leading <span className="text-purple-500 font-semibold">user research</span>, crafting <span className="text-cyan-500 font-semibold">user-centric designs</span>, and driving usability enhancements that <span className="text-white font-semibold">elevate user engagement</span> and meet business objectives.
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/pragya-tiwarii/"
          target="_blank"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
