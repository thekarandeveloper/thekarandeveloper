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
  tag6,
}) {
  return (
    <div className="big-card-container w-full h-full col-span-2 flex justify-center lg:flex-col xl:flex-row items-center p-4 cursor-pointer lg:p-3" onClick={subToggle}>
      <div className="big-card-img w-8/12 h-full overflow-hidden rounded-large bg-fill lg:w-full" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="big-card-body w-full h-full flex flex-col items-start justify-center p-8 pr-30 gap-y-8 lg:gap-y-5 xl:py-0 lg:p-6">
        <div className="big-title title pt-8 xl:pt-5 lg:pt-0">{title}</div>
        <div className="big-card-desc body-normal opacity-60 text-justify">{desc}</div>
        <div className="big-card-tags w-full flex justify-between flex-wrap gap-y-6 gap-x-3 opacity-70">
          <div className="big-card-tag-item body-normal">{tag1}</div>
          <div className="big-card-tag-item body-normal">{tag2}</div>
          <div className="big-card-tag-item body-normal">{tag3}</div>
          
        </div>
        {/* <div className="big-card-Button w-full flex justify-end">
        <a
            className="label big-card cta-btn"
            href={"/"}
            download={true}
          >
            View Demo
            <span className="label cta-btn-icon">
            <MdOutlineArrowOutward />
            </span>
          </a>
          
        </div> */}
      </div>
    </div>
  );
}

export default projectCardBig;
