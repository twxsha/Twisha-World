import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AppleCanvas, TeslaCanvas, StarsCanvas, DevXCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { experiences } from "../constants";
import { devx, mercor } from "../assets";

const ExperienceCard = ({ experience }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className="bg-white/10 rounded-2xl p-6 shadow-lg"
  >
    <h3 className="text-white text-xl font-bold mb-1">{experience.title}</h3>
    <p className="text-[#6193c2] font-semibold text-sm mb-4">
      {experience.company_name}
    </p>
    <ul className="list-disc pl-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={index} className="text-white-100 text-sm leading-relaxed">
          {point}
        </li>
      ))}
    </ul>
    <p className="text-secondary text-xs mt-4">{experience.date}</p>
  </motion.div>
);

const Work = () => {
  const visualMap = {
    AppleCanvas: <AppleCanvas />,
    TeslaCanvas: <TeslaCanvas />,
    mercor: <img src={mercor} className="h-60" alt="Mercor" />,
    DevXCanvas: <DevXCanvas/>,
  };

  const experienceOrder = [
    { id: 5, visual: "AppleCanvas" },
    { id: 4, visual: "mercor" },
    { id: 0, visual: "AppleCanvas" },
    { id: 2, visual: "AppleCanvas" },
    { id: 3, visual: "TeslaCanvas" },
    { id: 1, visual: "DevXCanvas" },
  ];

  return (
    <div className={`relative bg-primary min-h-screen w-screen`}>
      <section className={`${styles.padding}`}>
        <motion.div
          variants={textVariant()}
          className="sticky top-[65px] z-10 bg-primary pb-4"
        >
          <p className={styles.welcomeText}>MY WORK</p>
          <h2 className={styles.sectionHeadText}>Experiences</h2>
        </motion.div>

        <div className="mt-16 space-y-24">
          {experienceOrder.map(({ id, visual }) => (
            <div
              key={id}
              className="flex flex-col xl:flex-row gap-10 justify-between items-center"
            >
              <div className="xl:flex-1 flex justify-center">
                {visualMap[visual]}
              </div>
              <div className="xl:flex-1">
                <ExperienceCard experience={experiences[id]} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
