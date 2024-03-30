import React from "react";

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
        <form>
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select
            className="user-topic"
          >
            <option value={""}>What topic you want to talk ?</option>
            <option value={"Website"}>Website</option>
            <option value={"App"}>App</option>
            <option value={"Desktop Apps"}>Desktop Apps</option>
            <option value={"iOS Apps"}>iOS Apps</option>
          </select>
          <textarea
            className="user-message"
            placeholder="How I can help you ?"
            spellCheck={false}
          ></textarea>
          <button className="submit-button" onClick={toggle}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactCard;
