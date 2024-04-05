import React from "react";

function ProjectContent() {
  return (
    <div className="modal-body-container project">
      <div className="modal-body-banner w-full h-[15vw] flex justify-center items-center">
        <div className="mockup">Mockup</div>
      </div>
      <div className="modal-body-section">
        <div className="modal-body-section-title">Overview</div>
        <div className="modal-body-section-desc">
          Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality. Transforming ideas into seamless.
        </div>
      </div>
      <div className="modal-body-section">
        <div className="modal-body-section-title">Technology</div>
        <div className="modal-body-section-desc">
          Karan, a meticulous full-stack developer, harmonizes design and code
          with a focus on quality. Transforming ideas into seamless digital
          experiences is my expertise. Karan, a meticulous full-stack developer,
          harmonizes design and code with a focus on quality. Transforming ideas
          into seamless digital experiences is my expertise.
        </div>
        <div className="modal-body-section-tags flex gap-x-7">
          <div className="modal-body-section-tag-item">Mobile Apps</div>
          <div className="modal-body-section-tag-item">CMS</div>
          <div className="modal-body-section-tag-item">Node.js</div>
        </div>
      </div>
      <div className="modal-body-section">
        <div className="modal-body-section-title">Challenges</div>
        <div className="modal-body-section-desc">asdasd</div>
      </div>
      <div className="modal-body-section">
        <div className="modal-body-section-title">Timeline</div>

        <div className="date-set flex items-center h-[10vh] gap-x-4">
          <div className="date">24 Mar</div>
          <div className="date-desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user friendly.
          </div>
        </div>
        <div className="date-set">
          <div className="date">24 Mar</div>
          <div className="date-desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user friendly.
          </div>
        </div>
        <div className="date-set">
          <div className="date">24 Mar</div>
          <div className="date-desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user friendly.
          </div>
        </div>
        <div className="date-set">
          <div className="date">24 Mar</div>
          <div className="date-desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user friendly.
          </div>
        </div>
      </div>
     
      <div className="modal-blank-footer"></div>
    </div>
  );
}

export default ProjectContent;
