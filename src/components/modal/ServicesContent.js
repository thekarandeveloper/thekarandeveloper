import React, { useState, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
function ServicesContent() {
  const progressRef = useRef(null);
  const sectionRef = useRef(null);

  // var [section, setSection] = useState(0);

  var section = 0;
  function showSection(e) {
    const progress = progressRef.current.querySelectorAll(".progress-item");
    const button = sectionRef.current.querySelectorAll(".submit-button");
    const form = sectionRef.current.querySelectorAll(".form-section");
    if (section < form.length-1) {
      console.log(form.length);

      form[section].classList.remove("show");
      // setSection(section++); // Problem in this line
      section++;
      form[section].classList.add("show");
      progress[section].classList.add("active");

      if (section === form.length-1) {
        button.forEach(element => {
          element.innerText = "Submit"
        })
      }
      console.log(section);
    } 
  }

  return (
    <div className="modal-body-container services">
      <div className="progress-bar-body w-full relative flex items-center justify-between flex-row pb-8">
        <div className="progress-line h-1 absolute w-full bg-highlight"></div>
        <div className="progress-items w-full flex justify-between z-20" ref={progressRef}>
          <div className=" active p-4 px-6 rounded-[50%] bg-highlight  ">1</div>
          <div className="progress-item p-4 px-6 rounded-[50%] bg-highlight ">2</div>
          <div className="progress-item p-4 px-6 rounded-[50%] bg-highlight ">3</div>
        </div>
      </div>

      <form ref={sectionRef}>
        <div className="form-section show w-full 2xl:h-[60vh] flex flex-col justify-between items-center gap-y-8">
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select className="user-topic">
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
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
        </div>
        <div className="form-section hidden">
          section-2
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select className="user-topic">
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
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
        </div>

        <div className="form-section hidden">
          section-3
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select className="user-topic">
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
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
        </div>
        <div className="form-section hidden">
          section-4
          <input
            className="user-email"
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select className="user-topic">
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
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
        </div>

        
        {/* <button type="submit" className="submit-button" onClick={showSection}>
          Send
        </button> */}
      </form>
    </div>
  );
}

export default ServicesContent;
