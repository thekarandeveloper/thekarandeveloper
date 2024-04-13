import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import MiscContent from "./MiscContent";
import { MdFileDownload } from "react-icons/md";
import ProjectContent from "./ProjectContent";
import ServicesContent from "./ServicesContent";
import ArticleContent from "./ArticleContent";
import ContactFormContent from "./ContactFormContent";
import AllProjects from "./AllProjects";
import NavbarContent from "../modal/NavbarContent";

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
        <div className="modal-overlay w-full h-full fixed bottom-o left-0 m-0 bg-dark-bg-200 opacity-1 z-10 rounded-none hidden md:justify-end">
          <div className="blank-area h-[20vh] w-full" onClick={setToggle}></div>
          <div className="modal-container z-10000 w-full h-fit max-h-[80vh] bg-body fixed bottom-0 p-5 rounded-t-xl md:h-full md:max-h-full md:w-[60vw]  lg:w-[50vw] md:rounded-r-none ">
            <div className="modal-header w-full flex flex-col justify-center items-center gap-y-6 md:flex-row md:justify-between md:items-center md:p-4 md:bg-dark-bg md:text-body md:mb-5 md:sticky md:right-10 md:left-5">
              <div className="close w-20 h-1 bg-light-bg md:hidden"></div>
              <div
                className="close-button heading hidden md:block md:order-2"
                onClick={setToggle}
              >
                <IoClose />
              </div>
              <div className="title h-full pb-8 md:order-1 flex items-center md:pb-0 md:cursor-pointer">
                {/* <span className="previous">Karan/</span> */}
                <span className="current">{eve}</span>
              </div>
              <div className="action-button fixed left-0 right-0 bottom-0 text-body bg-body flex justify-center items-center h-25 p-5">
                <button
                  className="modal bg-primary h-12 w-full 2xl:h-[6vh] title"
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
            <div className="modal-body overflow-y-scroll h-[70vh] ">
              {/* <MiscContent /> */}
              <ProjectContent />
              {/* <ServicesContent/> */}
              {/* <ArticleContent /> */}
              {/* <ContactFormContent /> */}
              {/* <AllProjects toggles={toggle}/> */}
              {/* <NavbarContent subtoggle={toggle}></NavbarContent> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalBox;
