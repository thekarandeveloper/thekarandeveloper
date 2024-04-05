import React from "react";
function ArticleCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="small-card-container flex flex-row lg:flex-col justify-center items-center p-4 h-[60vh]" onClick={subToggle}>
      <div className="small-card-img xl:w-3/4 lg:w-4/5 h-full overflow-hidden bg-fill" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="small-card-body w-full h-full flex flex-col justify-center items-center p-4 gap-y-1">
        <div className="title small-title pt-1">{title}</div>
        <div className="body-normal small-card-desc opacity-60 text-center">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
