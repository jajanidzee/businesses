import React from "react";
import StarOutline from "../../../assets/StarOutline.png";
import Star from "../../../assets/Star.png";
const AboutWebDesign = () => {
  return (
    <div className=" bg-[#0F0F12] relative -left-[150px] w-[1440px] pl-[30px] mt-[49px] flex-col items-center justify-center mb-[200px] ">
      <div className="text-center font-[Inter]">
        <ul className="text-[#484848] text-[54px] flex gap-[40px] ">
          <li>Directrice Artistique</li>
          <li className="flex items-center gap-[24px]">
            <img src={StarOutline} alt="StarOutlineImg" />
            Webdesign
          </li>
          <li className="flex items-center gap-[24px]">
            <img src={StarOutline} alt="StarOutlineImg" />
            Print
          </li>
          <li className="flex items-center gap-[24px]">
            {" "}
            <img src={StarOutline} alt="StarOutlineImg" />
            Illustration
          </li>
        </ul>
      </div>
      <div>
        <ul className="text-[#484848] text-[54px] flex gap-[40px] font-[Inter] mb-[70px]">
          <li>UI design</li>
          <li className="flex items-center gap-[24px]">
            {" "}
            <img src={StarOutline} alt="StarOutlineImg" /> UX design
          </li>
          <li className="flex items-center gap-[24px]">
            {" "}
            <img src={StarOutline} alt="StarOutlineImg" />
            Motion design
          </li>
          <li className="flex items-center gap-[24px]">
            {" "}
            <img src={StarOutline} alt="StarOutlineImg" />
            Interactiv
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <p className="text-[#FFFFFF] font-light flex gap-[7.97px] font-[Space Grotesk] text-[20px]  ">
          To know more <img src={Star} alt="StarImg" />
        </p>
      </div>
    </div>
  );
};

export default AboutWebDesign;
