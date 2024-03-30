import React from "react";
function ArticleCardBig({
  subToggle,
  imgname,
  title,
  desc,
 
}) {
  return (
    <div className="big-card-container" onClick={subToggle}>
      <div className="big-card-img">
        <img src={imgname} alt={imgname}></img>
      </div>
      <div className="big-card-body">
        <div className="big-card-title sub-heading">{title}</div>
        <div className=" body-normal big-card-desc">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardBig;
