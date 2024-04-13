import React from "react";

function ProjectContent() {
  return (
    <div className="modal-body-container project flex flex-col gap-y-5 ">
      <div className="modal-body-banner w-full h-[30vh] xl:h-[40vh] flex justify-center items-center bg-highlight my-5">
        <div className="mockup">Mockup</div>
      </div>
      <div className="modal-body-section  bg-light-bg p-4 xl:p-8">
        <div className="modal-body-section-title title pb-2">Overview</div>
        <div className="modal-body-section-desc body-normal">
          Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality. Transforming ideas into seamless.
        </div>
      </div>
      <div className="modal-body-section bg-light-bg p-4 xl:p-8">
        <div className="modal-body-section-title title pb-2">Technology</div>
        <div className="modal-body-section-desc body-normal">
          Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality. Transforming ideas into seamless digital
          experiences is my expertise.
        </div>
        <div className="modal-body-section-tags flex gap-x-7 flex-wrap gap-y-4 pt-4 ">
          <div className="modal-body-section-tag-item body-normal p-2 bg-[#DEDEDE] px-4 flex-shrink-0 ">
            Mobile Apps
          </div>
          <div className="modal-body-section-tag-item body-normal p-2 bg-[#DEDEDE] px-4 flex-shrink-0">
            CMS
          </div>
          <div className="modal-body-section-tag-item body-normal p-2 bg-[#DEDEDE] px-4 flex-shrink-0">
            Node.js
          </div>
        </div>
      </div>
      <div className="modal-body-section bg-light-bg p-4 xl:p-8">
        <div className="modal-body-section-title title pb-4">Challenges</div>
        <div className="modal-body-section-desc body-normal">asdasd</div>
      </div>
      <div className="modal-body-section bg-light-bg p-4 xl:p-8">
        <div className="modal-body-section-title title pb-4   ">Timeline</div>
        <div className="date-sets flex flex-col w-full gap-y-4">
          <div className="date-set flex gap-x-4 bg-[#DEDEDE] py-4 items-center">
            <div className="date label p-4 flex justify-center items-center text-center">
              24 Mar
            </div>
            <div className="date-desc body-normal">
              Mai ek freelance e-commerce expert aur website developer hoon.
            </div>
          </div>
          <div className="date-set flex gap-x-4 bg-[#DEDEDE] py-4 items-center">
            <div className="date label p-4 flex justify-center items-center text-center">
              24 Mar
            </div>
            <div className="date-desc body-normal">
              Mai ek freelance e-commerce expert aur website developer hoon.
            </div>
          </div>
          <div className="date-set flex gap-x-4 bg-[#DEDEDE] py-4 items-center">
            <div className="date label p-4 flex justify-center items-center text-center">
              24 Mar
            </div>
            <div className="date-desc body-normal">
              Mai ek freelance e-commerce expert aur website developer hoon.
            </div>
          </div>
        </div>
      </div>

      <div className="modal-blank-footer"></div>
    </div>
  );
}

export default ProjectContent;
