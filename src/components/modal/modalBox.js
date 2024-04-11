import React, {useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import MiscContent from "./MiscContent";
import { MdFileDownload } from "react-icons/md";
import ProjectContent from "./ProjectContent";
import ServicesContent from "./ServicesContent";
import ArticleContent from "./ArticleContent";
import ContactFormContent from "./ContactFormContent";
import AllProjects from "./AllProjects";

function ModalBox({ toggle, setToggle, elements }) {
  const modalRef = useRef(null);

  // For the Clicked Element

  var eve;
  if (elements) {
    const events = elements.target.innerText;
    eve = events;
  }

  // For the Modal View

  useEffect(() => {
    const body = document.body;
    if (toggle && modalRef.current) {
      const modalOverlays = modalRef.current.querySelectorAll(".modal-overlay");
      const modalContainer =
        modalRef.current.querySelectorAll(".modal-container");
      modalOverlays.forEach((overlay) => {
        overlay.classList.add("modal-overlay-view");
        console.log("reached");
      });
      setTimeout(() => {
        modalContainer.forEach((container) => {
          container.classList.add("modal-container-view");
          body.classList.add("hide-scroll");
        });
      }, 200);
    } else if (!toggle && modalRef.current) {
      const modalOverlays = modalRef.current.querySelectorAll(".modal-overlay");
      const modalContainer =
        modalRef.current.querySelectorAll(".modal-container");
      modalContainer.forEach((container) => {
        container.classList.remove("modal-container-view");
        body.classList.remove("hide-scroll");
      });

      setTimeout(() => {
        modalOverlays.forEach((overlay) => {
          overlay.classList.remove("modal-overlay-view");
          console.log("check");
        });
      }, 500);
    }
  }, [toggle]);


  return (
    <React.Fragment>
      <div ref={modalRef}>
        <div className="modal-overlay w-full h-full fixed bottom-o left-0 m-0 bg-dark-bg-200 opacity-1 z-1 rounded-none hidden">
          <div className="blank-area h-[20vh] w-full" onClick={setToggle}></div>
          <div className="modal-container z-10000 w-full h-[80vh] bg-body fixed bottom-0 p-5 rounded-t-xl">
            <div className="modal-header w-full flex flex-col justify-center items-center gap-y-6">
            <div className="close w-20 h-1 bg-light-bg"></div>
            <div className="close-button heading hidden" onClick={setToggle}>
                  <IoClose />
                </div>
              <div className="heading">
                {/* <span className="previous">Karan/</span> */}
                <span className="current title">{eve}</span>
              </div>
                <div className="action-button fixed left-0 right-0 bottom-0 text-body bg-body flex justify-center items-center h-25 p-5">
                  <button
                    className="modal bg-primary h-12 w-full "
                    href="https://calendly.com/karankumarcv/30min"
                    target="blank"
                  >
                    Download{" "}
                    <span className="label cta-btn-icon hidden">
                      <MdFileDownload />
                    </span>
                  </button>
                </div>
                
            </div>
            <div className="modal-body overflow-y-scroll h-full">
              {/* <MiscContent /> */}
              <ProjectContent />
              {/* <ServicesContent/> */}
              {/* <ArticleContent /> */}
              {/* <ContactFormContent /> */}
              <AllProjects toggles={toggle}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalBox;
