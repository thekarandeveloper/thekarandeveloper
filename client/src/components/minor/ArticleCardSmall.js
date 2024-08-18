import React from "react";
function ArticleCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="article-small-card-container h-[50vh] flex flex-col justify-center items-center p-5 cursor-pointer bg-body lg:flex-row lg:h-[15vh]" onClick={subToggle}>
      <div className="small-card-img w-full h-full overflow-hidden rounded-lg lg:w-[20vw]" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="small-card-body w-full h-full flex flex-col justify-center items-center p-4 gap-y-1 lg:items-start">
        <div className="body-normal small-title pb-1 font-bold text-center">{title}</div>
        <div className="body-normal small-card-desc opacity-60 text-center lg:text-left text-sm">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
