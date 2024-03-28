import React from "react";

function ContactCard() {
  return (
    <div className="section-container contact">
      <div className="section-body-start">
        <div className="heading">Have Something in Mind ?</div>
        <div className="body-normal">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </div>
      </div>
      <div className="section-body-end">
        <form>
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <input
            className="user-topic"
            type="text"
            placeholder="What topic you want to talk ?"
          ></input>
          <textarea
            className="user-message"
            placeholder="How I can help you ?"
          ></textarea>
          <button className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
