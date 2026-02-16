import React from "react";
import img from "../assets/flash.png";
import img2 from "../assets/FlagUsa.png";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Routeing = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/">
        <motion.img
          src={img}
          alt="Flashimg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="cursor-pointer."
        />
      </Link>
      <div>
        <ul className="text-[#FFFFFF] flex gap-[35.83px] text-[16px] font-[Roboto]">
          <motion.li
            className="flex items-center cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <AiOutlineThunderbolt />
            <Link to="/about"> Home</Link>
          </motion.li>
          <motion.li
            className="cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            {" "}
            <Link to="/contact">Cases studies</Link>
          </motion.li>
          <motion.li
            className="cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            About us
          </motion.li>
          <motion.li
            className="cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            Careers
          </motion.li>
          <motion.li
            className="cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            What we do
          </motion.li>
          <motion.li
            className="cursor-pointer"
            alt="Flashimg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            Contact
          </motion.li>
          <motion.li
            className="flex gap-[8px] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            <motion.img
              src={img2}
              alt="UsaFlagImage"
              className="h-[20px] w-[20px] cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            />
            EN-US <IoIosArrowDown />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Routeing;
