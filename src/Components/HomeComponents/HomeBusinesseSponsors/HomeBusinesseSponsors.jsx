import React from "react";
import TripleWhale from "../../../assets/TripleWhale.png";
import MojoHeads from "../../../assets/MojoHeads.png";
import TroveMate from "../../../assets/TroveMate.png";
import Socilly from "../../../assets/Socilly.png";
import HandCash from "../../../assets/HandCash.png";
import Vera from "../../../assets/Vera.png";
import Foundry from "../../../assets/Foundry.png";
import FlyWallet from "../../../assets/FlyWallet.png";
import Ascend from "../../../assets/Ascend.png";
import Finnet from "../../../assets/Finnet.png";
import NyCryPto from "../../../assets/NyCryPto.png";
import Dolphin from "../../../assets/Dolphin.png";

const sponsors = [
  <img src={TripleWhale} alt="" />,
  <img src={MojoHeads} alt="" />,
  <img src={TroveMate} alt="" />,
  <img src={Socilly} alt="" />,
];
const sponsors2 = [
  <img src={HandCash} alt="" />,
  <img src={Vera} alt="" />,
  <img src={Foundry} alt="" />,
  <img src={FlyWallet} alt="" />,
];
const sponsors3 = [
  <img src={Ascend} alt="" />,
  <img src={Finnet} alt="" />,
  <img src={NyCryPto} alt="" />,
  <img src={Dolphin} alt="" />,
];

const HomeBusinesseSponsors = () => {
  return (
    <div className="max-w-[831px] m-auto flex  gap-[127px] mt-[265.42px] ">
      <ul className="flex flex-col gap-y-[16px]  ">
        {sponsors.map((company, index) => (
          <li key={company} className="">
            {company}
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-y-[16px]  ">
        {sponsors2.map((company2, index) => (
          <li key={company2} className="">
            {company2}
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-y-[16px]  ">
        {sponsors3.map((company3, index) => (
          <li key={company3} className="">
            {company3}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeBusinesseSponsors;
