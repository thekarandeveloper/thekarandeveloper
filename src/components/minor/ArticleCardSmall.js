import React from "react";
function ArticleCardSmall({
  imgname,
  title,
  desc
}) {
  return (
    <div className="small-card-container">
      <div className="small-card-img">
        <img src={imgname} alt={imgname}></img>
      </div>
      <div className="small-card-body">
        <div className="sub-heading small-card-title">{title}</div>
        <div className=" body-normal small-card-desc">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
