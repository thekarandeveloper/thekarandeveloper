import React from "react";
import ContactForm from "../minor/contactForm"
function ContactCard({ toggle }) {
  return (
    <section className="section-container contact h-[60vh] gap-y-[5vh] justify-between">
      <div className="w-[60%] flex flex-col h-full  justify-center p-8 bg-highlight">
        <div className="heading">Have Something in Mind ?</div>
        <div className="body-normal w-4/5">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="w-[35%] flex flex-col h-full  justify-center">
      <ContactForm toggle={toggle}></ContactForm>
       
      </div>
    </section>
  );
}

export default ContactCard;
