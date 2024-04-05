import React from "react";
function ArticleCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="small-card-container flex flex-row justify-center items-center p-4 h-28" onClick={subToggle}>
      <div className="small-card-img w-1/4 h-full overflow-hidden" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="small-card-body w-full h-full flex flex-col justify-center items-start p-4 gap-y-1">
        <div className="sub-heading small-card-title pt-1">{title}</div>
        <div className="text-xs small-card-desc opacity-60 ">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
