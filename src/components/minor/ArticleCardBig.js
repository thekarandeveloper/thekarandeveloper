import React from "react";
function ArticleCardBig({
  subToggle,
  imgname,
  title,
  desc,
 
}) {
  return (
    <div className="big-card-container col-span-2 w-full h-full flex flex-col justify-between align-center p-4 gap-y-2 bg-body" onClick={subToggle}>
      <div className="w-full h-[20vh] rounded-large bg-no-repeat bg-fill" style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className=" w-full flex flex-col items-start justify-center gap-y-4 p-4">
        <div className="big-title title pt-4 text-center w-full">{title}</div>
        <div className="body-normal big-card-desc opacity-60 text-center">{desc}</div>
       
      </div>
    </div>
  );
}

export default ArticleCardBig;
