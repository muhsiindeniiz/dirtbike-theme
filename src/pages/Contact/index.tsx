import React from "react";
import ContactPage from "../../features/Contact";
import { motion } from "framer-motion";

const Contact = () => {
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
      <ContactPage />
    </motion.section>
  );
};

export default Contact;
