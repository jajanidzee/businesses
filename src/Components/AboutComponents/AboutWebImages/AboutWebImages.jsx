import React from "react";
import LazuliImg from "../../../assets/Lazuli.png";
import OpentriImg from "../../../assets/Opentri.png";
import WebIslandImg from "../../../assets/WebIsland.png";
import LaunchrImg from "../../../assets/Launchr.png";
const AboutWebImages = () => {
  return (
    <>
      {" "}
      <div className="flex pl-[60px] gap-[120px]   ">
        <div className="flex-col gap-[140px]   ">
          <img src={LazuliImg} alt="LazuliImg" className="" />
          <img src={WebIslandImg} alt="WebIslandImg" className="mt-[140px]" />
        </div>
        <div className=" gap-[120px] ">
          <img src={OpentriImg} alt="OpentriImg" className="mt-[144px]" />
          <img
            src={LaunchrImg}
            alt="LaunchrImg"
            className="mt-[140px] mb-[66px]"
          />
        </div>
      </div>
      <button className="w-[232.59px] h-[43.02px] bg-[#F85430] text-[#0F0F12] font-light text-[20px] font-[Space Grotesk] text-center rounded-[16px] ml-[40%]  mb-[200px]   ">
        View all projects
      </button>
    </>
  );
};

export default AboutWebImages;
