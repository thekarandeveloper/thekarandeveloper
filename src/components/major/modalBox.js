import React from "react";
import { IoClose } from "react-icons/io5";
import ResumeContent from "../major/resumeContent";
import { MdFileDownload } from "react-icons/md";
function modalBox() {
  return (
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
  );
}

export default modalBox;
