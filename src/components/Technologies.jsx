import React from "react";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FaHtml5 className="text-7xl text-[#E34F26]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaCss3 className="text-7xl text-[#1572B6]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#38BDF8]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="p-4"
        >
          <AiOutlineJavaScript className="text-7xl text-[#F7DF1E]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <TbBrandTypescript className="text-7xl text-[#3178C6]" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        >
          <RiNextjsLine className="text-7xl text-white" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
        >
          <img src="/astro.svg" className="w-17 h-17 text-white" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
        >
          <div className="bg-[#4945FF] rounded-2xl">
            <SiStrapi className="text-7xl text-white" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
