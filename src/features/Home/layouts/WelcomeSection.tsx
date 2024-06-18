import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const WelcomeSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    {
      url: "https://motocross.progressionstudios.com/wp-content/uploads/2017/11/slide-1.jpg",
      text: "RIDER CLASS",
      title: "NEW TO MOTOCROSS",
      description:
        "We offer new rider classes every week. These courses are for all types of riders from newbies to professional racers.",
    },
    {
      url: "https://motocross.progressionstudios.com/wp-content/uploads/2017/11/slide-2.jpg",
      text: "DIRT BIKE EVENT",
      title: "OFF ROAD",
      description:
        "Join us every month for our famous motocross bike races. We hold races on the third Friday of the month.",
    },
  ];

  const handleNext = () => {
    setActiveImage((prevActiveImage) => (prevActiveImage + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImage(
      (prevActiveImage) => (prevActiveImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[calc(100vh-_120px)]">
      <div className="z-50">
        <Navbar />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={activeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col justify-center text-center lg:text-left items-center text-white -z-20"
          style={{
            backgroundImage: `url(${images[activeImage].url})`,
          }}
        >
          <div className="w-full max-w-[calc(100%_-_50px)] lg:max-w-xl flex flex-col gap-3">
            <h3 className="text-lg lg:text-2xl">{images[activeImage].title}</h3>
            <h1 className="text-4xl lg:text-7xl mb-4 font-bold">
              {images[activeImage].text}
            </h1>
            <p className="font-light text-md tracking-wider">
              {images[activeImage].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <motion.button
        onClick={handlePrev}
        className="w-10 flex items-center justify-center h-24 rounded absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        <FaAngleLeft size={25} color="#fff" />
      </motion.button>
      <motion.button
        onClick={handleNext}
        className="w-10 flex items-center justify-center h-24 rounded absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        <FaAngleRight size={25} color="#fff" />
      </motion.button>
    </div>
  );
};

export default WelcomeSection;
