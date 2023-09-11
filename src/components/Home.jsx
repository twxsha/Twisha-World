import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";


import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Home = () => {
  return (
      <div className={`xl:mt-20 w-full flex xl:flex-row flex-col gap-10`} >
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] xl:mt-20 p-8 rounded-2xl' >
          <h2 className={`${styles.welcomeText}  text-lg text-white-100`}> Welcome to</h2>
          <h1 className={`${styles.titleText} text-[#6193c2]`}> TWISHA'S WORLD</h1>
          <h1 className={`${styles.titleSubText}`}> ( drag to spin )</h1>
        </motion.div>

        <div className='xl:flex-1 xl:h-auto ' >
          <EarthCanvas />
        </div>
      </div>
  );
};

export default SectionWrapper(Home, "home");
