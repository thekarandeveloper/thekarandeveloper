import React from "react";
import ContactForm from "../minor/contactForm"
function ContactCard({ toggle }) {
  return (
    <section className="section-container contact">
      <div className="section-body-start">
        <div className="heading">Have Something in Mind ?</div>
        <div className="body-normal">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="section-body-end">
      <ContactForm toggle={toggle}></ContactForm>
       
      </div>
    </section>
  );
}

export default ContactCard;
