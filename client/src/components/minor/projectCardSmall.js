import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="project-small-card-container  flex flex-col justify-start items-center p-5 cursor-pointer bg-body lg:min-h-[30vw]" onClick={subToggle}>
      <div className="project-small-card-img w-full min-h-[25vh] lg:h-full overflow-hidden rounded-lg" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="project-small-card-body w-full h-full flex flex-col items-center justify-center p-5 gap-y-3 lg:gap-y-0">
        <div className="project-small-title title pt-2 lg:pb-4">{title}</div>
        <div className="small-card-desc body-normal opacity-60 text-center">{desc}</div>
      </div>
    </div>
  );
}

export default projectCardSmall;
