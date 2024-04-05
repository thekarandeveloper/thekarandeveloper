import React from "react";
import ContactForm from "../minor/contactForm"
function ContactCard({ toggle }) {
  return (
    <section className="section-container contact h-[60vh] gap-y-[5vh]">
      <div className="section-body-start justify-center p-8">
        <div className="heading">Have Something in Mind ?</div>
        <div className="body-normal w-4/5">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="section-body-end flex flex-col">
      <ContactForm toggle={toggle}></ContactForm>
       
      </div>
    </section>
  );
}

export default ContactCard;
