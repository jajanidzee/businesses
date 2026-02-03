import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Buttons({ btn1, btn2, btnclassname, btnclassname2 }) {
  return (
    <div className="flex gap-[60px]">
      <button
        className={`${btnclassname} w-[184.78px] h-[58px] text-white border-solid border-[white] border-[2px] flex items-center pt-[17px] pb-[17px] pl-[26px] gap-[6px] text-[16px]`}
      >
        {" "}
        {btn1}
        <FiArrowUpRight className="w-[45px] h-[45px]" />
      </button>
      <button
        className={`${btnclassname2} w-[109.17px] h-[58px]   text-white border-solid border-[white] border-[2px] pt-[15px] pb-[17px] pl-[19px] pr-[19px] text-[16px]`}
      >
        {btn2}
      </button>
    </div>
  );
}

export default Buttons;
