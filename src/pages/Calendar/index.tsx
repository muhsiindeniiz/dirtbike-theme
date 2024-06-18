import React from "react";
import CalendarPage from "../../features/Calendar";
import { motion } from "framer-motion";

const Calendar = () => {
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
      <CalendarPage />
    </motion.section>
  );
};

export default Calendar;
