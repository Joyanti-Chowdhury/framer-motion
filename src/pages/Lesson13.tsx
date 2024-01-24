import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson13 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 200,
      transition: {
        duration: .5,
      },
    },
  };

  return (
    <div className="border border-black size-[600px] flex flex-col justify-center items-center">
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          Toggle
        </motion.button>
        {visible && (
          <motion.div
            className="size-64 bg-indigo-700 rounded-lg flex flex-wrap gap-5 p-4 justify-center items-center"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
