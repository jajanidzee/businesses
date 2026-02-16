import React from "react";
import HurrellImg from "../../../assets/Hurrell.png";
import CommaImg from "../../../assets/Comma.png";
import LeftArrowImg from "../../../assets/LeftArrow.png";
import RightArrowImg from "../../../assets/RightArrow.png";

import Yahoo2 from "../../../assets/Yahoo2.png";
import Nami from "../../../assets/Nami.png";
import Hunter from "../../../assets/Hunter.png";
import Nuu from "../../../assets/Nuu.png";
import Houston from "../../../assets/Houston.png";

const ContactPerson = () => {
  return (
    <>
      {" "}
      <div className=" max-w-[1292px] m-auto border-[3px] border-solid border-[#141414] h-[697.27px] mt-[482px]  ">
        <div className="flex justify-between border-b-3 border-solid border-[#141414] pt-[32.98px] pr-[95.57px] pb-[36.41px] pl-[14.39px]">
          <p className="text-[14.4px] font-medium font-[Inter] text-[#141414]">
            <span className="text-[14.4px] font-bold font-[Inter] text-[#141414]">
              {" "}
              NAME:
            </span>
            FRAZER HURRELL
          </p>
          <p className="text-[14.4px] font-medium font-[Inter] text-[#141414]">
            <span className="text-[14.4px] font-bold font-[Inter] text-[#141414]">
              ROLE:
            </span>
            CREATIVE TECHNOLOGIST
          </p>
          <p className="text-[14.4px] font-medium font-[Inter] text-[#141414]">
            <span className="text-[14.4px] font-bold font-[Inter] text-[#141414]">
              COMPANY:
            </span>
            YAHOO!
          </p>
          <p className="text-[14.4px] font-medium font-[Inter] text-[#141414]">
            <span className="text-[14.4px] font-bold font-[Inter] text-[#141414]">
              PROJECT:
            </span>
            BRITISH AIRWAYS
          </p>
        </div>
        <div className="flex items-start mt-[14.39px] gap-[72px] border-b-3 border-solid border-[#141414] pb-[14.39px] pl-[14.39px]">
          {" "}
          <img src={HurrellImg} alt="HurrellImg" />
          <div className="pt-[22.2px]">
            <img src={CommaImg} alt="CommaImg" />
            <p className="text-[23.69px] text-[#141414] font-medium font-[Inter] mt-[60.97px]">
              From the initial meeting to the final delivery, Ethan has <br />{" "}
              created a feeling of trust and delivered everything we <br />{" "}
              asked of him. The quality of his work speaks for itself <br /> and
              he is able to execute at a pace. He is an excellent <br /> Webflow
              developer and we will be calling on his <br /> services again,
              very soon.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pl-[14.39px] pr-[14.39px]">
          <img src={LeftArrowImg} alt="LeftArrowImg" />
          <p className="text-[14.4px] font-medium font-[Inter] text-[#141414]">
            01/04
          </p>
          <img src={RightArrowImg} alt="RightArrowImg" />
        </div>
      </div>
      <div className="flex justify-center pl-[111.8px] pr-[105.84px] ">
        <div className="flex flex-col items-center">
          <p className="text-[13.4px] font-[Inter] text-[#141414] font-medium mt-[163px] mb-[33.31px]">
            WORKED WITH SOME OF THE BEST OUT THERE
          </p>
          <div className="flex items-center gap-[103.6px]">
            <img src={Hunter} alt="HunterImg" />
            <img src={Nuu} alt="NuuImg" />
            <img src={Yahoo2} alt="Yahoo2Img" />
            <img src={Houston} alt="HoustonImg" />
            <img src={Nami} alt="NamiImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPerson;
