import React, { useRef, useEffect, useState } from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { linkedin, pointer } from "../assets";
import { StarsCanvas } from "../components";

const About = () => {
  const linkedInRef = useRef(null);
  const isInView = useInView(linkedInRef, { once: true, margin: "-100px" });
  const [showClickMe, setShowClickMe] = useState(false);

  useEffect(() => {
    let showTimeout, hideTimeout;
    if (isInView) {
      showTimeout = setTimeout(() => {
        setShowClickMe(true);
        hideTimeout = setTimeout(() => {
          setShowClickMe(false);
        }, 6000);
      }, 1000);
    }
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [isInView]);

  return (
    <div
      className={`relative bg-primary min-h-screen w-screen flex xl:flex-row justify-evenly items-center flex-col gap-10 px-4 pt-20 pb-10 px-8`}
    >
      <div className="absolute inset-0 z-0">
        <StarsCanvas />
      </div>
      <section className={`${styles.padding} w-full max-w-3xl xl:mt-20 z-10`}>
        <motion.div
          variants={textVariant()}
          className="bg-primary sticky top-[65px] z-10"
        >
          <p className={styles.welcomeText}>who am i?</p>
          <h2 className={styles.sectionHeadText}>ABOUT</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] mt-10 md:mt-0 text-center xl:text-left"
        >
          Hi, I am <span className="text-[#de1289] font-bold">Twisha</span>. I
          am a CyberSecurity Engineer building and maintaining Identity-based
          Access Management services at{" "}
          <span className="font-bold text-[#6193c2]">Apple</span>
          . <br /> <br />I recently graduated from the{" "}
          <span className="italic">
            University of California - Los Angeles{" "}
          </span>
          Samueli School of Engineering, pursuing my bachelor's degree in{" "}
          <span className="italic">Computer Science</span>. <br /> <br />I have
          industry experience building end-to-end production-grade services, and
          I'm always eager to explore the latest in emerging technologies. I
          hope to make a meaningful impact with my skills, and I'd be thrilled
          to connect with you!
        </motion.p>
      </section>

      <div className="xl:flex xl:h-auto gap-10">
        <div>
          <a
            href="https://www.linkedin.com/in/twishasundararajan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="xs:w-[220px] w-full relative" ref={linkedInRef}>
              <ParallaxTilt>
                <motion.div
                  variants={fadeIn("right", "spring")}
                  className="w-full bg-gradient-to-b from-[#6193c2] to-white-100 p-[1px] rounded-[20px] shadow-card relative"
                >
                  <div className="rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col">
                    <h3 className="text-white text-[20px] font-bold text-center">
                      {" "}
                      Linkedin{" "}
                    </h3>
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="w-full h-full object-contain"
                    />
                    <h3 className="text-[#6193c2] text-[20px] font-bold text-center">
                      {" "}
                      Linkedin{" "}
                    </h3>
                  </div>
                  {showClickMe && (
                    <motion.div
                      className="absolute top-2/3 left-1/3 flex items-center gap-2 pointer-events-none"
                      style={{ transform: "translate(-50%, -50%)" }}
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{
                        scale: [1, 1.3, 1, 1.3, 1],
                        opacity: [1, 1, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src={pointer}
                        alt="click-pointer"
                        style={{ transform: "rotate(-30deg)" }}
                        className="h-[23px] w-auto object-contain"
                      />
                      <h1 className={`${styles.pointerText}`}>click me</h1>
                    </motion.div>
                  )}
                </motion.div>
              </ParallaxTilt>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
