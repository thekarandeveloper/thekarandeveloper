import React, { useRef } from "react";
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
    <div className="optionBody w-full h-10 md:h-14 2xl:h-[8vh] flex justify-center items-center p-1 bg-light-bg mb-6 2xl:p-3" ref={optionRef}>
      <div className="optionbutton active label h-full w-full flex justify-center items-center cursor-pointer" onClick={optionToggle}>
        Email
      </div>
      <div className="optionbutton label  h-full w-full flex justify-center items-center cursor-pointer" onClick={optionToggle}>
        Video meeting
      </div>
    </div>
  );
}

export default OptionBar;
