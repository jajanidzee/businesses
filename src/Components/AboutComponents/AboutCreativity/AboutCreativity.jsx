import React from "react";

const AboutCreativity = () => {
  return (
    <div className="flex justify-between relative -right-[150px] mt-[196px] ">
      <h1 className="text-[#FFFFFF] text-[100px] font-[Inter] font-extrabold">
        "There is no wealth <br />
        without creativity."
      </h1>
      <button className="w-[53.56px] h-[171.34px] bg-[#FFFFFF]  ">
        <p className="text-[23px] font-bold font-[Inter]">W.</p>
        <p
          className="text-[18px] font-bold mt-[32px] pl-[10px] font-[Inter] "
          style={{ writingMode: "sideways-lr" }}
        >
          Honors
        </p>
      </button>
    </div>
  );
};

export default AboutCreativity;
