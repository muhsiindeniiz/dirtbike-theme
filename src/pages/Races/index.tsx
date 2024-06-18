import React from "react";
import RacesPage from "../../features/Races";
import { motion } from "framer-motion";
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

const Races = () => {
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
      <RacesPage />
    </motion.section>
  );
};

export default Races;
