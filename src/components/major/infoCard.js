import React from "react";
import { MdFileDownload } from "react-icons/md";
function InfoCard() {
  return (
    <div className="card-container intro">
      <div className="heading-large">Hello,</div>
      <div className="body-normal intro">
        I'm Karan, a meticulous full-stack developer, harmonizes design and code
        with a focus on quality. Transforming ideas into seamless digital
        experiences is my expertise.
      </div>
      <a
            className="label info cta-btn"
            href={"/"}
            download={true}
          >
            Download Resume{" "}
            <span className="label cta-btn-icon">
            <MdFileDownload />
            </span>
          </a>
    </div>
  );
}

export default InfoCard;
