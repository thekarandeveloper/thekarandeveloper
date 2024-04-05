import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
function OptionBar({ toggle }) {
  const optionRef = useRef(null);
  function optionToggle(e) {
    const optionButton = optionRef.current.querySelectorAll(".optionbutton");

    if (optionRef.current) {
      optionButton.forEach((element) => {
        element.classList.remove("active");
        e.target.classList.add("active")
      });
    }
  }
  return (
    <div className="optionBody" ref={optionRef}>
      <div className="optionbutton active" onClick={optionToggle}>
        Email
      </div>
      <div className="optionbutton" onClick={optionToggle}>
        Video meeting
      </div>
    </div>
  );
}

export default OptionBar;
