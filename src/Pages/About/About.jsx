import React from "react";

import AboutCreativity from "../../Components/AboutComponents/AboutCreativity/AboutCreativity";
import AboutWebDesign from "../../Components/AboutComponents/AboutWebDesign/AboutWebDesign";
import AboutWebImages from "../../Components/AboutComponents/AboutWebImages/AboutWebImages";
import AboutNewProjects from "../../Components/AboutComponents/AboutNewProjects/AboutNewProjects";
import Footer from "../../Components/Footer/Footer";
import AboutHeader from "../../Components/AboutHeader/AboutHeader";
const About = () => {
  return (
    <div className="max-w-[1440px] bg-[#000000] pt-[20px] pl-[150px] pr-[150px] m-auto ">
      <AboutHeader />
      <AboutCreativity />
      <AboutWebDesign />
      <AboutWebImages />
      <AboutNewProjects />
      <Footer />
    </div>
  );
};

export default About;
