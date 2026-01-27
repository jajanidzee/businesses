import React from "react";
import Header from "../../Components/Header/Header";
import HomeDesign from "../../Components/HomeComponents/HomeDesign/HomeDesign";

const Home = () => {
  return (
    <div className="max-w-[1440px] bg-[#000000] pt-[20px] pl-[150px] pb-[20px] pr-[150px] m-auto">
      <Header />
      <HomeDesign />
    </div>
  );
};

export default Home;
