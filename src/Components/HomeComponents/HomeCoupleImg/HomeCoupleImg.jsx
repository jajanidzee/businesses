import React from "react";
import LeftHandImg from "../../../assets/LeftHand.png";
import CoupleImg from "../../../assets/Couple.png";
import RightHandImg from "../../../assets/RightHand.png";
const HomeCoupleImg = () => {
  return (
    <div className="flex relative -left-[150px] mb-[25.5px]  ">
      <img
        src={LeftHandImg}
        alt="LeftHandImg"
        className="w-[304px] h-[311px] mt-[31px]"
      />
      <img
        src={CoupleImg}
        alt="LeftHandImg"
        className="w-[760px] h-[541.5px] ml-[38px] mr-[28px]"
      />
      <img
        src={RightHandImg}
        alt="LeftHandImg"
        className="w-[312px] h-[203px] mt-[307px]"
      />
    </div>
  );
};

export default HomeCoupleImg;
