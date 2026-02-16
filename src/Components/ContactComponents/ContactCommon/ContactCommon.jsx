import React from "react";
import { FaPlus } from "react-icons/fa6";
import { motion } from "motion/react";
const ContactCommon = () => {
  return (
    <div className="ml-[35%] mt-[201.59px]">
      <div className="flex items-end ">
        <h1 className="text-[121.43px] text-[#141414] font-medium font-[Inter] ">
          COMMON
        </h1>
        <p className="text-[14.4px] text-[#141414] font-medium font-[Inter]  ">
          SOME QUESTIONS <br /> PEOPLE USUALLY ASK
        </p>
      </div>
      <h1 className="text-[121.43px] text-[#141414] font-medium font-[Inter] leading-[20%]">
        QUESTIONS
      </h1>
      <div className="mt-[81.25px] max-w-[907.19px]">
        {" "}
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            I'M AN AGENCY,DO YOU DEVELOP FIGMA DESIGNS?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            WHY DO I DEVELOP SOLELY USING WEBFLOW?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            HOW MUCH DOES IT COST?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            IS THERE ANY EXTRA COST INVOLVED?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            HOW LONG DOES IT TAKE?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
        <div className="flex items-center justify-between">
          <p className="text-[13.4px] text-[#141414] font-medium font-[Inter]">
            DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES FOR MY WBSITE?
          </p>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="text-[#3E3E3E] font-bold text-[13.4px] cursor-pointer"
          >
            <FaPlus />
          </motion.p>
        </div>
        <hr className="w-[100%] text-[#BA9787] mb-[27.33px] mt-[28.75px]    " />
      </div>
    </div>
  );
};

export default ContactCommon;
