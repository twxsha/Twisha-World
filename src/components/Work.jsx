import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AppleCanvas, AppleCanvas2, TeslaCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { devx, mercor, apple } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="m-5 rounded-[20px] min-h-[280px] justify-evenly items-center flex-col">
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-[#6193c2] text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {" "}
          {experience.company_name}{" "}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {" "}
            {point}{" "}
          </li>
        ))}
      </ul>
      <p className="text-secondary text-[14px] mt-3 font-semibold">
        {" "}
        {experience.date}{" "}
      </p>
    </div>
  );
};

const Work = () => {
  return (
    <div className={`xl:mt-20 w-full`}>
      <p className={styles.welcomeText}>MY WORK</p>
      <h2 className={styles.sectionHeadText}>Experiences</h2>
          <div className={`flex xl:flex-row flex-col  mt-20`}>
            <div className="xl:flex-1 xl:h-auto flex justify-center items-center">
              <AppleCanvas2 />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[5]} />
              </div>
            </div>
          </div>
          <div className={`flex xl:flex-row flex-col gap-10  mt-20`}>
            <div className="xl:flex-1 xl:h-auto flex justify-center items-center">
              <img src={mercor} className="h-60" />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[4]} />
              </div>
            </div>
          </div>
          <div className={`flex xl:flex-row flex-col gap-10  mt-20`}>
            <div className="xl:flex-1 xl:h-auto flex justify-center items-center">
              <img src={apple} className="h-40" />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[0]} />
              </div>
            </div>
          </div>
          <div className={`flex xl:flex-row flex-col gap-10  mt-20`}>
            <div className="xl:flex-1 xl:h-auto flex justify-center items-center">
              <img src={apple} className="h-40" />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[2]} />
              </div>
            </div>
          </div>
          <div className={`flex xl:flex-row flex-col gap-10  mt-20`}>
            <div className="xl:flex-1 xl:h-auto">
              <TeslaCanvas />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[3]} />
              </div>
            </div>
          </div>
          <div className={`flex xl:flex-row flex-col gap-10 mt-20`}>
            <div className="xl:flex-1 xl:h-auto flex justify-center items-center">
              <img src={devx} className="h-40" />
            </div>
            <div className="xl:flex-1 xl:h-auto ">
              <div className="w-full bg-[#182633] border-l-2 p-[1px] rounded-[10px]">
                <ExperienceCard experience={experiences[1]} />
              </div>
            </div>
          </div>
    </div>
  );
};

export default SectionWrapper(Work, "work");
