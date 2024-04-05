import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="project-small-card-container" onClick={subToggle}>
      <div className="project-small-card-img">
        <img src={imgname} alt={imgname}></img>
      </div>
      <div className="project-small-card-body">
        <div className="project-small-card-title sub-heading">{title}</div>
        <div className=" body-normal small-card-desc">{desc}</div>
      
        {/* <div className="project-small-card-Button">
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
