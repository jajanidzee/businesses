import React from "react";
import girlImg from "../../../assets/GirlImg.png";
import ComputerImg from "../../../assets/ComputerImg.png";
const HomeAcademyImages = () => {
  return (
    <div className="flex items-center relative -left-[150px] mt-[80px]">
      <img src={girlImg} alt="girlImg" />
      <img src={ComputerImg} alt="ComputerImg" />
    </div>
  );
};

export default HomeAcademyImages;
