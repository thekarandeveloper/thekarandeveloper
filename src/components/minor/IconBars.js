import React from "react";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function IconBars() {
  return (
    <div className="icon-bars flex flex-row items-center gap-10">
      <a
        className="icon-container title"
        target="_blank"
        href="mailto:contact@karankumar.dev"
      >
        <div className="label">
          <IoMail />
        </div>
        <div className="icon-title">
         
        </div>
      </a>
      <a
        className="icon-container title"
        target="_blank"
        href="https://twitter.com/karankumarcv"
      >
        <div className="label">
          <FaXTwitter />
        </div>
       
      </a>
      <a
        className="icon-container title"
        target="_blank"
        href="https://www.linkedin.com/in/karankumarcv/"
      >
        <div className="label">
          <IoLogoLinkedin />
        </div>
        <div className="icon-title">
         
        </div>
      </a>
      <a
        className="icon-container title"
        target="_blank"
        href="https://www.instagram.com/karankumarcv/"
      >
        <div className="label">
          <RiInstagramFill />
        </div>
        <div className="icon-title">
         
        </div>
      </a>
    </div>
  );
}

export default IconBars;
