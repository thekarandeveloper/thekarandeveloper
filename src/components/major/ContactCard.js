import React from "react";
import ContactForm from "../minor/contactForm"
function ContactCard({ toggle }) {
  return (
    <section className="contact h-full gap-y-15 justify-between">
      <div className="w-full flex flex-col h-full  justify-center p-8 bg-primary text-center gap-y-8">
        <div className="heading text-body">Have Something in Mind ?</div>
        <div className="body-normal w-full text-body">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="w-full flex flex-col h-full  justify-center">
      <ContactForm toggle={toggle}></ContactForm>
       
      </div>
    </section>
  );
}

export default ContactCard;
