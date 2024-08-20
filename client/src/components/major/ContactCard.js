import React from "react";
import ContactForm from "../minor/contactForm"
import { useGlobalContext } from "../../context/GlobalDataManager";

function ContactCard({ toggle }) {
  const {formData, setForm, resetForm, sendForm, openCustomWindow} = useGlobalContext() // Here set the gloabal context

  const handleOutSubmit = (e) =>{
    sendForm()
    resetForm()
  }

  return (
    <section className="contact h-fit gap-y-15 justify-between lg:flex-row lg:h-[70vh]">
      <div className="w-full flex flex-col h-18  justify-center p-8 bg-primary text-center gap-y-8 lg:h-[100%] lg:text-left py-20">
        <div className="heading text-body">Have Something in Mind ?</div>
        <div className="body-normal w-full text-body">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="w-full flex flex-col h-full  justify-center bg-slate-100 p-8">
      <ContactForm toggle={toggle}></ContactForm>
      <button
                  className="modal-button bg-primary h-12 w-full 2xl:h-[6vh] label  hover:bg-dark-bg text-white mt-8"
                  target="blank"
                 onClick={(e) => handleOutSubmit(e)}
                >
                  Submit
                </button>
      </div>
    </section>
  );
}

export default ContactCard;
