import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ResumeContent from "../minor/resumeContent";
import { MdFileDownload } from "react-icons/md";
import InfoCard from "./infoCard";
function ModalBox(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    console.log("pressed");
  };
  return (
    <React.Fragment>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            <div className="heading">
              <span className="previous">Karan/</span>
              <span className="current">Resume</span>
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
              <div className="close-button heading">
                <IoClose />
              </div>
            </div>
          </div>
          <div className="modal-body">
            <ResumeContent />
          </div>
        </div>
      </div>
      <div
        className={`modal-overlay ${modal ? "modal-overlay-view" : ""}`}
      ></div>
    </React.Fragment>
  );
}

export default ModalBox;
