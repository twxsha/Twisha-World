import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkedin } from "../assets";

const About = () => {
  return (
    <div className={`xl:mt-20 w-full flex xl:flex-row justify-evenly items-center flex-col gap-10`} >
      <div >
        <motion.div variants={textVariant()}>
          <p className={styles.welcomeText}>who am i?</p>
          <h2 className={styles.sectionHeadText}>ABOUT</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 mr-10 text-secondary text-[17px] max-w-2xl leading-[30px]'
        >
          Hi, I am <span className='space-blue'>Twisha</span>. I'm a senior at the University of California - Los Angeles,
          pursuing my bachelor's degree in Computer Science. I have industry experience
          building end-to-end production-grade services. I am constantly
          expanding my knowledge of emerging technologies, and I am skilled at communicating
          with end-users and building products and solutions catered to their needs.
          I hope to make a real impact with my skills, and I would love to connect!
        </motion.p>
      </div>

      <div className='xl:flex xl:h-auto gap-10' >
        <div>
          <a href="https://www.linkedin.com/in/twishasundararajan/" target="_blank">
            <Tilt className='xs:w-[220px] w-full'>
              <motion.div
                variants={fadeIn("right", "spring")}
                className='w-full bg-gradient-to-b from-[#6193c2] to-white-100 p-[1px] rounded-[20px] shadow-card' >
                <div className='rounded-[20px] min-h-[280px]flex justify-evenly items-center flex-col' >
                  <h3 className='text-white text-[20px] font-bold text-center'> Linkedin </h3>
                  <img src={linkedin} alt='web-development' className='w-full h-full object-contain' />
                  <h3 className='text-[#6193c2] text-[20px] font-bold text-center'> Linkedin </h3>
                </div>
              </motion.div>
            </Tilt>
          </a>
          <h1 className={`mt-4 text-secondary text-[17px] max-w-2xl leading-[30px]`}> ( click me ) </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
