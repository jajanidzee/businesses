import React from "react";
import Header from "../../Components/Header/Header";
import AboutCreativity from "../../Components/AboutComponents/AboutCreativity/AboutCreativity";
import AboutWebDesign from "../../Components/AboutComponents/AboutWebDesign/AboutWebDesign";

const About = () => {
  return (
    <div className="max-w-[1440px] bg-[#000000] pt-[20px] pl-[150px] pr-[150px] m-auto ">
      <Header />
      <AboutCreativity />
      <AboutWebDesign />
    </div>
  );
};

export default About;
