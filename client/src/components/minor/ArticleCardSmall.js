import React from "react";
function ArticleCardSmall({
  subToggle,
  imgname,
  title,
  desc
}) {
  return (
    <div className="article-small-card-container h-[50vh] flex flex-col justify-start items-start p-5 cursor-pointer bg-body lg:flex-row lg:h-[18vh]" onClick={subToggle}>
      <div className="small-card-img w-full h-[25vh] lg:h-full overflow-hidden rounded-lg lg:w-[20vw]" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="small-card-body w-full flex flex-col justify-center mt-6 md:mt-0 items-center p-4 gap-y-1 lg:items-start">
        <div className="title pb-2 text-center font-[500] lg:text-left lg:w-full">{title}</div>
        <div className="body-normal small-card-desc h-6 opacity-60 text-center lg:text-left text-sm overflow-hidden ">{desc}</div>
      </div>
    </div>
  );
}

export default ArticleCardSmall;
