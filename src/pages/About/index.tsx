import React, { useRef } from "react";
import AboutPage from "../../features/About";
import { motion } from "framer-motion";

const About = () => {
  const motionFadeInDownEffect = {
    pageInitial: {
      opacity: 0,
      y: -20,
    },
    pageAnimate: {
      opacity: 1,
      y: 0,
    },
    pageExit: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <motion.section
      initial="pageInitial"
      animate="pageAnimate"
      transition={{
        duration: 1,
      }}
      exit="pageExit"
      variants={motionFadeInDownEffect}
    >
      <AboutPage />
    </motion.section>
  );
};

export default About;
