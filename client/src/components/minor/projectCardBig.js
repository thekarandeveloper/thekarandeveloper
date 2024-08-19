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
  
}) {
  return (
    <div
      className="w-full h-fit bg-body flex flex-col justify-center items-center p-4 cursor-pointer md:col-span-2  gap-x-4 lg:h-full md:flex-row"
      onClick={subToggle}
    >
      <div
        className="w-full h-[25vh] rounded-large bg-no-repeat bg-contain mb-6  lg:mb-0 lg:h-[70%] mt-4 md:w-[40%]"
        style={{ backgroundImage: `url(${imgname})`}}
      ></div>
      <div className="w-full h-full flex flex-col items-start justify-center p-2 gap-y-6 pt-6 md:w-[60%]">
        <div className="title text-center w-full md:text-left ">{title}</div>
        <div className="big-card-desc body-normal opacity-60 text-center md:text-left">
          {desc}
        </div>
        <div className="big-card-tags w-full hidden justify-center flex-wrap gap-y-2 gap-x-3 opacity-70 md:flex md:justify-start ">
          <div className="big-card-tag-item body-normal bg-light-bg p-3">{tag1}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag2}</div>
          <div className="big-card-tag-item body-normal  bg-light-bg p-3">{tag3}</div>
         
        </div>
        
      </div>
    </div>
  );
}

export default projectCardBig;
