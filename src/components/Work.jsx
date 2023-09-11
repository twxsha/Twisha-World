import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AppleCanvas, AppleCanvas2, TeslaCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { devx } from "../assets"

const ExperienceCard = ({ experience }) => {
    return (
        <div className='m-5 rounded-[20px] min-h-[280px] justify-evenly items-center flex-col' >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-[#6193c2] text-[16px] font-semibold' style={{ margin: 0 }} > {experience.company_name} </p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider' > {point} </li>
                ))}
            </ul>
            <p className='text-secondary text-[14px] mt-3 font-semibold' >  {experience.date} </p>
        </div >
    );
};

const Work = () => {
    return (
        <div className={`xl:mt-20 w-full gap-10`} >
            <p className={styles.welcomeText}>MY WORK</p>
            <h2 className={styles.sectionHeadText}>Experiences</h2>

            <div className={`flex xl:flex-row flex-col gap-10  mt-20`} >
                <div className='xl:flex-1 xl:h-auto'>
                    <AppleCanvas />
                </div>
                <div className='xl:flex-1 xl:h-auto ' >
                    <motion.div variants={fadeIn("right", "spring")} className='w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px] shadow-card' >
                        <ExperienceCard experience={experiences[0]} />
                    </motion.div>
                </div>
            </div>

            <div className={`flex xl:flex-row flex-col gap-10 mt-20`} >
                <div className='xl:flex-1 xl:h-auto place-content-center'>
                    <img src={devx} className="h-48 mt-20 ml-20" />
                </div>
                <div className='xl:flex-1 xl:h-auto ' >
                    <motion.div variants={fadeIn("right", "spring")} className='w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px] shadow-card' >
                        <ExperienceCard experience={experiences[1]} />
                    </motion.div>
                </div>
            </div>

            <div className={`flex xl:flex-row flex-col gap-10  mt-20`} >
                <div className='xl:flex-1 xl:h-auto'>
                    <AppleCanvas2 />
                </div>
                <div className='xl:flex-1 xl:h-auto ' >
                    <motion.div variants={fadeIn("right", "spring")} className='w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px] shadow-card' >
                        <ExperienceCard experience={experiences[2]} />
                    </motion.div>
                </div>
            </div>

            <div className={`flex xl:flex-row flex-col gap-10  mt-20`} >
                <div className='xl:flex-1 xl:h-auto'>
                    <TeslaCanvas />
                </div>
                <div className='xl:flex-1 xl:h-auto ' >
                    <motion.div variants={fadeIn("right", "spring")} className='w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px] shadow-card' >
                        <ExperienceCard experience={experiences[3]} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Work, "work");


{/* {experiences.map((experience, index) => ( */ }
{/* <ExperienceCard
                                key={`experience-${0}`}
                                experience={experiences[0]}
                            /> */}
{/* ))} */ }