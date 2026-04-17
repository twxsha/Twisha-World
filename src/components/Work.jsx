import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AppleCanvas, TeslaCanvas, DevXCanvas } from "./canvas";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { experiences } from "../constants";
import { mercor } from "../assets";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MercorImage = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  return (
    <motion.img
      ref={ref}
      src={mercor}
      className="h-60"
      alt="Mercor"
      animate={inView ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 4, ease: "easeInOut" }}
    />
  );
};

const ExperienceCard = ({ experience, color, cardDirection, visualDirection }) => (
  <motion.div
    className={`flex flex-col gap-10 justify-between items-center ${
      cardDirection === "right" ? "xl:flex-row" : "xl:flex-row-reverse"
    }`}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.15, 0)}
  >
    <motion.div
      className="xl:flex-1 flex justify-center"
      variants={fadeIn(visualDirection, "spring", 0, 0.8)}
    >
      {experience.visual}
    </motion.div>

    <motion.div
      className="xl:flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
      style={{ borderLeft: `3px solid ${color}` }}
      variants={fadeIn(cardDirection === "right" ? "left" : "right", "spring", 0.1, 0.8)}
    >
      <h3 className="text-white text-xl font-bold mb-1">{experience.title}</h3>
      <p className="font-semibold text-sm mb-4" style={{ color }}>
        {experience.company_name}
      </p>
      <motion.ul
        className="list-disc pl-5 space-y-2"
        variants={staggerContainer(0.08, 0.2)}
      >
        {experience.points.map((point, index) => (
          <motion.li
            key={index}
            className="text-secondary text-sm leading-relaxed"
            variants={fadeIn("up", "tween", 0, 0.4)}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
      <p className="text-white/30 text-xs mt-4 tracking-wide">{experience.date}</p>
    </motion.div>
  </motion.div>
);

const Work = () => {
  const visualMap = {
    AppleCanvas: <AppleCanvas />,
    TeslaCanvas: <TeslaCanvas />,
    mercor: <MercorImage />,
    DevXCanvas: <DevXCanvas />,
  };

  const experienceOrder = [
    { id: 5, visual: "AppleCanvas", color: "#a2aaad" },
    { id: 4, visual: "mercor",      color: "#a78bfa" },
    { id: 0, visual: "AppleCanvas", color: "#a2aaad" },
    { id: 2, visual: "AppleCanvas", color: "#a2aaad" },
    { id: 3, visual: "TeslaCanvas", color: "#cc0000" },
    { id: 1, visual: "DevXCanvas",  color: "#6794e0" },
  ];

  return (
    <div className="relative bg-primary min-h-screen w-screen">
      <section className={`${styles.padding}`}>
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="sticky top-[65px] z-10 bg-primary pb-4"
        >
          <p className={styles.welcomeText}>MY WORK</p>
          <h2 className={styles.sectionHeadText}>Experiences</h2>
        </motion.div>

        <div className="mt-16 space-y-24">
          {experienceOrder.map(({ id, visual, color }, index) => {
            const cardDirection = index % 2 === 0 ? "right" : "left";
            const visualDirection = cardDirection === "right" ? "right" : "left";
            return (
              <ExperienceCard
                key={id}
                experience={{ ...experiences[id], visual: visualMap[visual] }}
                color={color}
                cardDirection={cardDirection}
                visualDirection={visualDirection}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Work;
