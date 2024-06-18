import React from "react";
import ReservationPagePage from "../../features/Reservation";
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

const Reservation = () => {
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
      <ReservationPagePage />
    </motion.section>
  );
};

export default Reservation;
