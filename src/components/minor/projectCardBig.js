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
    <div className="big-card-container" onClick={subToggle}>
      <div className="big-card-img">
        <img src={imgname} alt={imgname}></img>
      </div>
      <div className="big-card-body">
        <div className="big-card-title sub-heading">{title}</div>
        <div className=" body-normal big-card-desc">{desc}</div>
        <div className="big-card-tags">
          <div className="big-card-tag-item">{tag1}</div>
          <div className="big-card-tag-item">{tag2}</div>
          <div className="big-card-tag-item">{tag3}</div>
          
        </div>
        {/* <div className="big-card-Button">
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
