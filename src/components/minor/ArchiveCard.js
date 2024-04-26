import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
function ArchiveCard({ toggles, img, title, desc }) {
  return (
    <div
      className="item-container h-full flex flex-col bg-light-bg p-4 gap-4 md:flex-row lg:flex-col xl:flex-row 2xl:p-8 cursor-pointer hover:bg-[#dedede]"
      onClick={toggles}
    >
      <div
        className="item-banner w-full h-[35vw] md:w-[30vw] lg:w-full md:h-28 xl:w-[20vw] xl:h-[20vh]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="item-body flex gap-y-4 flex-col w-full justify-center">
        <div className="item-title title">{title}</div>
        <div className="item-desc body-normal">{desc}</div>
      </div>
      <div className="item-navigation heading hidden">
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}

export default ArchiveCard;
