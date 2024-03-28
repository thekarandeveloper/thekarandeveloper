import React from "react";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function IconBars() {
  return (
    <div className="icon-bars">
      <a
        className="icon-container label"
        target="_blank"
        href="mailto:contact@karankumar.dev"
      >
        <div>
          <IoMail />
        </div>
        <div className="icon-label">
          <span>Mail Me</span>
        </div>
      </a>
      <a
        className="icon-container label"
        target="_blank"
        href="https://twitter.com/karankumarcv"
      >
        <div>
          <FaXTwitter />
        </div>
        <div className="icon-label">
          <span>Thoughts</span>
        </div>
      </a>
      <a
        className="icon-container label"
        target="_blank"
        href="https://www.linkedin.com/in/karankumarcv/"
      >
        <div>
          <IoLogoLinkedin />
        </div>
        <div className="icon-label">
          <span>Work Life</span>
        </div>
      </a>
      <a
        className="icon-container label"
        target="_blank"
        href="https://www.instagram.com/karankumarcv/"
      >
        <div>
          <RiInstagramFill />
        </div>
        <div className="icon-label">
          <span>Social Life</span>
        </div>
      </a>
    </div>
  );
}

export default IconBars;
