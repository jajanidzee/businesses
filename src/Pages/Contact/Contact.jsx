import React from "react";

import ContactStunning from "../../Components/ContactComponents/ContactStunning/ContactStunning";
import ContactHouston from "../../Components/ContactComponents/ContactHouston/ContactHouston";
import ContactHunter from "../../Components/ContactComponents/ContactHunter/ContactHunter";
import ContactProcess from "../../Components/ContactComponents/ContactProcess/ContactProcess";
import ContactHeader from "../../Components/ContactComponents/ContactHeader/ContactHeader";
import ContactHumble from "../../Components/ContactComponents/ContactHumble/ContactHumble";
import ContactPerson from "../../Components/ContactComponents/ContactPerson/ContactPerson";

function Contact() {
  return (
    <div className="max-w-[1440px] bg-[#FAFAFA] pt-[25.64px] m-auto ">
      <ContactHeader />
      <ContactStunning />
      <ContactHouston />
      <ContactHunter />
      <ContactProcess />
      <ContactHumble />
      <ContactPerson />
    </div>
  );
}

export default Contact;
