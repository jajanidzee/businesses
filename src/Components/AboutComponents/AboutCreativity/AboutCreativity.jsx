import React from "react";
import { motion } from "motion/react";
const AboutCreativity = () => {
  return (
    <div className="flex justify-between relative -right-[150px] mt-[196px] ">
      <h1 className="text-[#FFFFFF] text-[100px] font-[Inter] font-extrabold">
        "There is no wealth <br />
        without creativity."
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
        className="w-[53.56px] h-[171.34px] bg-[#FFFFFF] cursor-pointer  "
      >
        <p className="text-[23px] font-bold font-[Inter]">W.</p>
        <p
          className="text-[18px] font-bold mt-[32px] pl-[10px] font-[Inter] "
          style={{ writingMode: "sideways-lr" }}
        >
          Honors
        </p>
      </motion.button>
    </div>
  );
};

export default AboutCreativity;
