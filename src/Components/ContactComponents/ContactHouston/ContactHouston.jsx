import React from "react";
import group from "../../../assets/Group.png";
import CurlyGirl from "../../../assets/CurlyGirl.png";
import TwoBoy from "../../../assets/TwoBoy.png";
const ContactHouston = () => {
  return (
    <div className="pl-[136.8px] pr-[136.8px] mt-[534.83px] flex flex-col gap-[205.7px] mb-[306.5px]">
      {" "}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#141414] text-[31.91px] font-[inter] font-medium">
            HOUSTON EXPONENTIAL
          </h1>
          <p className="text-[#141414] text-[17.51px] font-[inter] font-medium ml-[18.5px]">
            A new digital HUB for houston’s <br /> biggest startup ecosystem.
          </p>
        </div>
        <img src={group} alt="groupImg" />
      </div>
      <div className="flex items-center justify-between">
        {" "}
        <img src={CurlyGirl} alt="CurlyGirlImg" />
        <div>
          <h1 className="text-[#141414] text-[31.91px] font-[inter] font-medium">
            NAMI ML
          </h1>
          <p className="text-[#141414] text-[17.51px] font-[inter] font-medium ml-[18.5px]">
            A brand new digital identity and <br /> website for the subscription{" "}
            <br /> App service that focuses on <br /> happy subscribers.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        {" "}
        <div>
          <h1 className="text-[#141414] text-[31.91px] font-[inter] font-medium">
            THIN REEL{" "}
          </h1>
          <p className="text-[#141414] text-[17.51px] font-[inter] font-medium ml-[18.5px]">
            How we turned a local studio into <br /> one of the biggest video
            agencies <br /> in the south of the UK.
          </p>
        </div>
        <img src={TwoBoy} alt="TwoBoyImg" />
      </div>
    </div>
  );
};

export default ContactHouston;
