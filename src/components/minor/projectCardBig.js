import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardBig({
  subToggle,
  imgname,
  title,
  desc,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
}) {
  return (
    <div
      className="w-full h-full bg-body flex flex-col justify-center items-center p-4 cursor-pointer"
      onClick={subToggle}
    >
      <div
        className="w-full h-[20vh] rounded-large bg-no-repeat bg-fill"
        style={{ backgroundImage: `url(${imgname})` }}
      ></div>
      <div className="w-full h-full flex flex-col items-start justify-center p-2 gap-y-8">
        <div className="title pt-8 text-center w-full">{title}</div>
        <div className="big-card-desc body-normal opacity-60 text-justify">
          {desc}
        </div>
        <div className="big-card-tags w-full flex justify-center flex-wrap gap-y-3 gap-x-3 opacity-70">
          <div className="big-card-tag-item body-normal bg-light-bg p-3">{tag1}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag2}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag3}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag4}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag5}</div>
        </div>
        
      </div>
    </div>
  );
}

export default projectCardBig;
