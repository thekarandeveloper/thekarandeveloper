import React from "react";
function ArticleCardBig({
  subToggle,
  imgname,
  title,
  desc,
 
}) {
  return (
    <div className="big-card-container w-full flex flex-col justify-between align-center p-4" onClick={subToggle}>
      <div className="big-card-img w-full h-full overflow-hidden rounded-lg" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="big-card-body w-full flex flex-col items-start justify-center gap-y-4">
        <div className="big-card-title sub-heading pt-4">{title}</div>
        <div className=" body-normal big-card-desc opacity-60">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardBig;
