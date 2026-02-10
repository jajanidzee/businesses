import React from "react";
import Vector from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import img2 from "../../assets/FlagUsa.png";
const AboutHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="inline-block">
        <img src={Vector} alt="VectorImg" className="" />
      </Link>
      <div>
        <ul className="text-[#FFFFFF] flex gap-[35.83px] text-[16px] font-[Roboto]">
          <li className="flex items-center">
            <AiOutlineThunderbolt />
            <Link to="/about"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Cases studies</Link>
          </li>
          <li>About us</li>
          <li>Careers</li>
          <li>What we do</li>
          <li>Contact</li>
          <li className="flex gap-[8px]">
            <img src={img2} alt="UsaFlagImage" className="h-[20px] w-[20px]" />
            EN-US <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutHeader;
