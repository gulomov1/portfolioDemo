import React from "react";
import profilePic from "../assets/profilelogo.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVriants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex hero sm:flex-row-reverse gap-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center img lg:p-8">
            <motion.img
              src={profilePic}
              alt="Muhammadrasul Gulomjonov"
              className="border border-stone-900 rounded-3xl w-[650px] h-auto"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVriants}
              className="pb-2 name text-4xl  text-center tracking-tighter lg:text-8xl"
            >
              Muhammadrasul Gulomjonov
            </motion.h2>
            <motion.span
              variants={childVriants}
              className="hidden sm:flex bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-End Developer
            </motion.span>
            <motion.p
              variants={childVriants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              Front-End Developer with 8 months of study at Najot Ta’lim
              Educational Center. Proficient in HTML, CSS (SASS, Bootstrap,
              Tailwind), and JavaScript. Experienced in building responsive and
              interactive user interfaces using React, Context API, Redux (RTK,
              RTK Query), Zustand, and Next.js. Skilled in TypeScript for
              developing type-safe applications. Confident in version control
              using Git and GitHub. Strong problem-solving skills with a focus
              on debugging and performance optimization. Continuously learning
              modern web technologies to stay up to date with industry trends.
            </motion.p>
            <motion.a
              variants={childVriants}
              href="https://www.canva.com/design/DAGT757dl-w/k_F_VQYUjRet6DNtdQROdw/view?utm_content=DAGT757dl-w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbd1ed617b3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 cursor-pointer active:bg-slate-950 active:text-white transition duration-300 ease-in-out"
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
