import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import MiscContent from "./MiscContent";
import { MdFileDownload } from "react-icons/md";
import ProjectContent from "./ProjectContent";
import ServicesContent from "./ServicesContent";
import ArticleContent from "./ArticleContent";
import ContactFormContent from "./ContactFormContent";
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
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <div className="heading">
                <span className="previous">Karan/</span>
                <span className="current">{eve}</span>
              </div>
              <div className="modal-navigation">
                <div className="action-button">
                  <a
                    className="label modal cta-btn"
                    href="https://calendly.com/karankumarcv/30min"
                    target="blank"
                  >
                    Download{" "}
                    <span className="label cta-btn-icon">
                      <MdFileDownload />
                    </span>
                  </a>
                </div>
                <div className="close-button heading" onClick={setToggle}>
                  <IoClose />
                </div>
              </div>
            </div>
            <div className="modal-body">
              {/* <MiscContent /> */}
              {/* <ProjectContent /> */}
              {/* <ServicesContent /> */}
              {/* <ArticleContent /> */}
              {/* <ContactFormContent /> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModalBox;
