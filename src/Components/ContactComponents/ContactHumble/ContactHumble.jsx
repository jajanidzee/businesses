import React from "react";
import Uximg from "../../../assets/Ux.png";
import Uiimg from "../../../assets/Ui.png";
import Honorsimg from "../../../assets/Honors.png";
import Inovationimg from "../../../assets/inovation.png";
const ContactHumble = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center mb-[102.84px] ">
        <h3 className="text-[123.43px] text-[#141414] font-[Inter] font-medium leading-[15.9px]">
          HUMBLE
        </h3>
        <div className="flex items-end gap-[24.67px]">
          <h3 className="text-[123.43px] text-[#141414] font-[Inter] font-medium ">
            {" "}
            BRAG
          </h3>

          <p className="text-[14.4px] text-[#141414] font-[Inter] font-medium">
            I WON SOME AWARDS <br />
            ALONG THE WAY
          </p>
        </div>
      </div>
      <div className="flex pl-[28.8px]  gap-[28.8px]">
        <img src={Uximg} alt="Uximg" className="mt-[41.14px]" />
        <img src={Uiimg} alt="Uiimg" />
        <img src={Honorsimg} alt="Honorsimg" className="mt-[41.14px]" />
        <img src={Inovationimg} alt="Inovationimg" />
        <img src={Uximg} alt="Uximg" className="mt-[41.14px]" />
        <img src={Uiimg} alt="Uiimg" />
        {/* <img
          src={Honorsimg}
          alt="Honorsimg"
          className="overflow-hidden mt-[41.14px] w-[186px]"
        /> */}
        <div className="bg-[url(public/Honors.png)] w-[180px] mt-[41.14px]"></div>
      </div>
    </>
  );
};

export default ContactHumble;
