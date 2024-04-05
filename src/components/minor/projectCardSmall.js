import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="project-small-card-container h-[60vh] flex flex-col justify-center items-center p-5 cursor-pointer" onClick={subToggle}>
      <div className="project-small-card-img w-full h-full overflow-hidden rounded-lg" style={{backgroundImage:`url(${imgname})`}}>
       
      </div>
      <div className="project-small-card-body w-full h-full flex flex-col items-center justify-center p-5 gap-y-3">
        <div className="project-small-card-title sub-heading pt-2">{title}</div>
        <div className="small-card-desc opacity-60 text-sm leading-6 text-center">{desc}</div>
      
        {/* <div className="project-small-card-Button w-full flex justify-center">
        <a
            className="label project-small-card cta-btn"
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

export default projectCardSmall;
