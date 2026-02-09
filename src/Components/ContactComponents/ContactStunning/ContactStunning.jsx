import React from "react";
import Flux from "../../../assets/Flux.png";
import Yahoo from "../../../assets/Yahoo.png";
import F3 from "../../../assets/F3.png";
import Awwwvards from "../../../assets/Awwwvards.png";
const ContactStunning = () => {
  return (
    <>
      {" "}
      <div className="flex items-center relative -right-[72px] justify-end">
        <div className="flex items-end">
          <h1 className="text-[#141414] font-[Inter] font-medium text-[118.43px]">
            STUNNING <br /> BRANDS <br /> & DIGITAL <br /> EXPERIENCES
          </h1>
          <p className="text-[24.69px] text-[#141414] font-[Inter] font-medium">
            FREELANCER <br />
            dIGITAL DESIGNER <br />
            WEBFLOW EXPERT
          </p>
        </div>
        <button className="w-[53.56px] h-[171.34px] bg-[#141414]  ">
          <p className="text-[23px] font-bold font-[Inter] text-[#FFFFFF]">
            W.
          </p>
          <p
            className="text-[18px] font-bold mt-[32px] pl-[10px] font-[Inter] text-[#FFFFFF] "
            style={{ writingMode: "sideways-lr" }}
          >
            Honors
          </p>
        </button>
      </div>
      <div className="flex justify-center">
        {" "}
        <p className="text-[13.4px] font-[Inter] text-[#141414] font-medium mt-[163px] mb-[33.31px]">
          WORK SEEN ON
        </p>
      </div>
      <div className="flex gap-[126.52px] mb-[201.99px] justify-center ">
        <img src={Flux} alt="FluxImg" />
        <img src={Yahoo} alt="YahooImg" />
        <img src={F3} alt="F3Img" />
        <img src={Awwwvards} alt="AwwwvardsImg" />
      </div>
      <div className="flex justify-end">
        <p className="text-[#141414] text-[48.37px] font-[Inter]  font-medium">
          Ethan Suero is an independent <br /> designer focused on crafting{" "}
          <br />
          immersive digital experiences. He <br /> believes every project is an{" "}
          <br />
          opportunity to deliver a unique and <br /> memorable digital
          experience that <br />
          delights users and builds brand equity.
        </p>
      </div>
    </>
  );
};

export default ContactStunning;
