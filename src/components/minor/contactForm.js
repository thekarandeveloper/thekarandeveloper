import React, { useRef } from "react";
function TestimonialCard({ toggle }) {
  return (
    <form className="w-full h-full flex flex-col justify-between items-center gap-y-8">
      <input
        className="user-email "
        type="email"
        placeholder="YourEmail@gmail.com"
      ></input>
      <select className="user-topic">
        <option value={""} className="default-option">What topic you want to talk ?</option>
        <option value={"Website"}>Website</option>
        <option value={"App"}>App</option>
        <option value={"Desktop Apps"}>Desktop Apps</option>
        <option value={"iOS Apps"}>iOS Apps</option>
      </select>
      <textarea
        className="user-message "
        placeholder="How I can help you ?"
        spellCheck={false}
      ></textarea>
      <button className="submit-button cursor-pointer flex justify-center items-center" onClick={toggle}>
        Send
      </button>
    </form>
  );
}

export default TestimonialCard;
