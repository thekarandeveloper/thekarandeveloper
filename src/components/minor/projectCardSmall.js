import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="small-card-container" onClick={subToggle}>
      <div className="small-card-img">
        <img src={imgname} alt={imgname}></img>
      </div>
      <div className="small-card-body">
        <div className="small-card-title sub-heading">{title}</div>
        <div className=" body-normal small-card-desc">{desc}</div>
      
        {/* <div className="small-card-Button">
        <a
            className="label small-card cta-btn"
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
