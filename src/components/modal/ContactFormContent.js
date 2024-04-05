import React from "react";
import ContactForm from "../minor/contactForm";
import OptionBar from "../minor/optionBar";
import MessageWithIcon  from "../minor/MessageWithIcon";

function ContactFormContent() {
  return (
    <div className="modal-body-container contactForm">
      <OptionBar></OptionBar>

        <ContactForm></ContactForm>
        {/* <MessageWithIcon descrption=" Redirecting You to Calendly to Schedule Meeting with Karan"></MessageWithIcon> */}
    </div>
  );
}

export default ContactFormContent;
