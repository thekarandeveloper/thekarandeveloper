import React from "react";

function ArticleContent({ banner, content }) {
  return (
    <div className="modal-body-container article">
      <div className="modal-body-banner  w-full h-[30vh] xl:h-[35vh] flex justify-center items-center bg-[#F3F3F3] my-5">
        <div className="w-full mockup h-[27vh] xl:h-[30vh] flex justify-center items-center bg-contain bg-no-repeat my-8" style={{ backgroundImage: `url(${banner})`}}></div>
      </div>
      <div className="modal-body-section  bg-light-bg p-4 xl:p-8 2xl:p-12">
        <div className="modal-body-section-title title pb-2">Overview</div>
        <div className="modal-body-section-desc body-normal">{content}</div>
      </div>

      <div className="modal-blank-footer"></div>
    </div>
  );
}

export default ArticleContent;
