import React from "react";
import Vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import img2 from "../../assets/FlagUsa.png";
import { motion } from "motion/react";
const AboutHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="inline-block">
        <motion.img
          src={Vector}
          alt="VectorImg"
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
        />
      </Link>
      <div>
        <ul className="text-[#FFFFFF] flex gap-[35.83px] text-[16px] font-[Roboto]">
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="flex items-center"
          >
            <AiOutlineThunderbolt />
            <Link to="/about"> Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            {" "}
            <Link to="/contact">Cases studies</Link>
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            About us
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            Careers
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            What we do
          </motion.li>
          <motion.li
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            Contact
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
            className="flex gap-[8px] cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              src={img2}
              alt="UsaFlagImage"
              className="h-[20px] w-[20px]"
            />
            EN-US <IoIosArrowDown />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default AboutHeader;
