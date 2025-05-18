import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { pointer, circle } from "../assets";
import { Link } from "react-router-dom";
import { buttons } from "../constants";

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
    <div className="relative bg-primary min-h-screen w-screen flex flex-col">
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      <div
        className={`${styles.padding}  mt-10 max-w-7xl mx-auto relative z-0 flex-1 z-10 flex flex-col justify-center items-center px-4 py-2`}
      >
        <div className="flex flex-col xl:flex-row items-center justify-center w-full max-w-7xl xl:gap-4 gap-2">
          <div className="text-center xl:text-left flex flex-col justify-center items-center xl:items-start">
            <h2 className={`${styles.welcomeText} text-lg text-white-100`}>
              Welcome to
            </h2>
            <h1
              className={`${styles.titleText} text-[#6193c2] max-w-[50vw] leading-tight`}
            >
              TWISHA'S WORLD
            </h1>
          </div>
          <div className=" w-[300px] xl:w-[550px] relative aspect-square flex justify-center items-center xl:ml-4">
            <EarthCanvas onModelLoaded={() => setEarthLoaded(true)} />
            {showSpinText && (
              <motion.div
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                initial={{ opacity: 1 }}
                animate={{
                  x: [0, -50, 50, -50, 50, -50, 50, -50],
                  opacity: [1, 1, 1, 1, 1, 1, 1, 0],
                }}
                transition={{ duration: 7, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={pointer}
                    alt="click-to-drag"
                    style={{ transform: "rotate(-30deg)" }}
                    className="h-[23px] w-auto object-contain"
                  />
                  <h1 className={`text-[18px] ${styles.pointerText}`}>
                    drag to spin
                  </h1>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center items-center mt-4 mb-5 flex-wrap">
          {buttons.map((nav) => (
            <Link to={`${nav.id}`} key={nav.id}>
              <div className="relative w-24 md:w-28 lg:w-36 transform transition duration-300 ease-in-out hover:scale-125 hover:shadow-2xl active:scale-90 active:shadow-md">
                <img
                  src={circle}
                  alt="circle-nav"
                  className="w-full rounded-full animate-spin-slow object-cover cursor-pointer"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-base font-bold text-center px-1 pointer-events-none drop-shadow">
                  {nav.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-3 z-10">
        <Link to="/credit">
          <p className="text-slate-700 text-[10px] tracking-wider">sources</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
