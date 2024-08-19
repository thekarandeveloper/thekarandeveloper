import React from "react";
function ArticleCardBig({
  subToggle,
  imgname,
  title,
  desc,
 
}) {
  return (
    <div className="big-card-container col-span-2 w-full h-full flex flex-col justify-start align-center p-4 gap-y-2 bg-body lg:row-span-3 lg:col-span-1 cursor-pointer" onClick={subToggle}>
      <div className="w-full h-[25vh] rounded-large bg-no-repeat bg-cover lg:h-full" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className=" w-full flex flex-col items-start justify-center gap-y-4 p-4">
        <div className="big-title title pt-4 text-center w-full lg:text-left">{title}</div>
        <div className="body-normal big-card-desc opacity-60 text-center lg:text-left">{desc}</div>
       
      </div>
    </div>
  );
}

export default ArticleCardBig;
