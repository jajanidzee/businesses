import React from "react";
import Ethan from "../../../assets/EthanSuero.png";
import { Link } from "react-router-dom";
import img2 from "../../../assets/FlagUsa.png";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";
const ContactHeader = () => {
  return (
    <div className="flex items-center justify-between pl-[88.45px] pr-[88.45px] mb-[81.28px]">
      {" "}
      <Link to="/" className="inline-block">
        {" "}
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          src={Ethan}
          alt="EthanImg"
        />
      </Link>
      <div className="flex items-center gap-[23px]">
        <nav>
          <ul className="text-[#141414] flex gap-[14.5px] text-[16px] font-[Inter]">
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="flex items-center"
            >
              <Link to="/about"> HOME</Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
            >
              {" "}
              <Link to="/contact">CASES STUDIO</Link>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              className="flex gap-[8px] cursor-pointer"
            >
              <motion.img
                src={img2}
                alt="UsaFlagImage"
                className="h-[20px] w-[20px] "
              />
              EN-US <IoIosArrowDown />
            </motion.li>
          </ul>
        </nav>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="w-[189.28px] h-[50.38px] bg-[#141414] rounded-[8px] text-[#FAFAFA] font-[Inter] text-[17.3px] cursor-pointer"
        >
          SCHEDULE A CALL
        </motion.button>
      </div>
    </div>
  );
};

export default ContactHeader;
