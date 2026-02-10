import React from "react";
import Ethan from "../../../assets/EthanSuero.png";
import { Link } from "react-router-dom";
import img2 from "../../../assets/FlagUsa.png";
import { IoIosArrowDown } from "react-icons/io";
const ContactHeader = () => {
  return (
    <div className="flex items-center justify-between pl-[88.45px] pr-[88.45px] mb-[81.28px]">
      {" "}
      <Link to="/" className="inline-block">
        {" "}
        <img src={Ethan} alt="EthanImg" />
      </Link>
      <div className="flex items-center gap-[23px]">
        <nav>
          <ul className="text-[#141414] flex gap-[14.5px] text-[16px] font-[Inter]">
            <li className="flex items-center">
              <Link to="/about"> HOME</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">CASES STUDIO</Link>
            </li>

            <li className="flex gap-[8px]">
              <img
                src={img2}
                alt="UsaFlagImage"
                className="h-[20px] w-[20px]"
              />
              EN-US <IoIosArrowDown />
            </li>
          </ul>
        </nav>
        <button className="w-[189.28px] h-[50.38px] bg-[#141414] rounded-[8px] text-[#FAFAFA] font-[Inter] text-[17.3px]">
          SCHEDULE A CALL
        </button>
      </div>
    </div>
  );
};

export default ContactHeader;
