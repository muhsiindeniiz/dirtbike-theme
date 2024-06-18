import React, { useRef } from "react";
import { domAnimation, LazyMotion, motion, useInView } from "framer-motion";

const PageFramerMotion = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref}>
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </motion.div>
      </section>
    </LazyMotion>
  );
};

export default PageFramerMotion;
