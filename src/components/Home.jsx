import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { pointer } from "../assets";

const Home = () => {
  const [earthLoaded, setEarthLoaded] = useState(false);
  const [showSpinText, setShowSpinText] = useState(false);

  useEffect(() => {
    let showTimeout;
    let hideTimeout;

    if (earthLoaded) {
      showTimeout = setTimeout(() => {
        setShowSpinText(true);

        hideTimeout = setTimeout(() => {
          setShowSpinText(false);
        }, 7000);
      }, 1000);
    }

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [earthLoaded]);

  return (
    <div>
      <div className="xl:mt-20 w-full flex xl:flex-row flex-col gap-10">
        <div className="flex-[0.75] xl:mt-20 p-8 rounded-2xl">
          <h2 className={`${styles.welcomeText} text-lg text-white-100`}>
            Welcome to
          </h2>
          <h1 className={`${styles.titleText} text-[#6193c2]`}>
            TWISHA'S WORLD
          </h1>
        </div>

        <div className="relative w-full max-w-[450px] aspect-square mx-auto flex justify-center items-center">
          <EarthCanvas onModelLoaded={() => setEarthLoaded(true)} />
          {showSpinText && (
            <motion.div
              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
              initial={{ opacity: 1 }}
              animate={{
                x: [0, -50, 50, -50, 50, -50, 50, -50],
                opacity: [1, 1, 1, 1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 7,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={pointer}
                  alt="click-to-drag"
                  style={{ transform: "rotate(-30deg)" }}
                  className="h-[23px] w-auto object-contain"
                />
                <h1 className={`text-[23px] ${styles.pointerText}`}>
                  drag to spin
                </h1>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Home, "home");
