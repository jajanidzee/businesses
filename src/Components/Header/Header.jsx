import React from "react";
import img from "../../assets/flash.png";
import img2 from "../../assets/FlagUsa.png";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <img src={img} alt="Flashimg" />
      <div>
        <ul className="text-[white] flex gap-[35.83px] text-[16px] font-[Roboto]">
          <li className="flex items-center">
            <AiOutlineThunderbolt />
            home
          </li>
          <li>cases studies</li>
          <li>about us</li>
          <li>careers</li>
          <li>what we do</li>
          <li>contact</li>
          <li className="flex gap-[8px]">
            <img src={img2} alt="UsaFlagImage" className="h-[20px] w-[20px]" />
            EN-US <IoIosArrowDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
