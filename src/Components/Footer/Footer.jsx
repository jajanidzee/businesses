import React from "react";
import LowHandImg from "../../assets/FooterLowHand.png";
import UpHandImg from "../../assets/FooterUpHand.png";
import Buttons from "../Buttons/buttons";
import BeImg from "../../assets/Be.png";
import DribbleImg from "../../assets/Dribble.png";
import TwitterImg from "../../assets/Twitter.png";
import InstagramImg from "../../assets/Instagram.png";
import MediumImg from "../../assets/Medium.png";
const Footer = () => {
  return (
    <>
      <img src={UpHandImg} alt="UpHandImg" className="pl-[780px]" />
      <div className="pl-[100px]  pb-[129.63px] relative -left-[150px] flex items-start justify-between">
        <div>
          <h1 className="text-[#FFFFFF] text-[40px] font-[Manrope] font-extralight mb-[40px]">
            Your business will <br />
            never be the same
          </h1>
          <p className="text-[#858A99] text-[14px] font-[Manrope] font-extralight">
            LitCollective © 2022
          </p>
        </div>
        <div>
          {" "}
          <Buttons
            btnclassname="w-[218.36px] h-[58px] "
            btnclassname2="w-[137.28px] h-[58px] bg-[darkblue]"
            btn1="Talk to a specialist"
            btn2="Get in touch"
          />
          <div className="flex gap-[10px] mt-[95px] relative">
            <img src={BeImg} alt="BeImg" />
            <img src={DribbleImg} alt="DribbleImg" />
            <img src={TwitterImg} alt="" />
            <img src={InstagramImg} alt="InstagramImg" />
            <img src={MediumImg} alt="MediumImg" />
            <img src={LowHandImg} alt="LowHandImg" className="absolute " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
