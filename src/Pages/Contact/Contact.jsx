import React from "react";
import Header from "../../Components/Header/Header";
import ContactStunning from "../../Components/ContactComponents/ContactStunning/ContactStunning";
import ContactHouston from "../../Components/ContactComponents/ContactHouston/ContactHouston";
import ContactHunter from "../../Components/ContactComponents/ContactHunter/ContactHunter";
import ContactProcess from "../../Components/ContactComponents/ContactProcess/ContactPRocess";

function Contact() {
  return (
    <div className="max-w-[1440px] bg-[#FAFAFA] pt-[20px] pl-[72px] pr-[72px] m-auto ">
      <Header />
      <ContactStunning />
      <ContactHouston />
      <ContactHunter />
      <ContactProcess />
    </div>
  );
}

export default Contact;
