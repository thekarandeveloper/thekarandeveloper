import React from "react";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function IconBars() {
  return (
    <div className="icon-bars flex gap-5 flex-wrap">
      <a
        className="icon-container bg-dark-bg text-body p-3"
        target="_blank"
        href="mailto:contact@karankumar.dev"
      >
        <div className="heading">
          <IoMail />
        </div>
      </a>
      <a
        className="icon-container  bg-dark-bg text-body p-3"
        target="_blank"
        href="https://twitter.com/karankumarcv"
      >
        <div className="heading">
          <FaXTwitter />
        </div>
       
      </a>
      <a
        className="icon-container  bg-dark-bg text-body p-3"
        target="_blank"
        href="https://www.linkedin.com/in/karankumarcv/"
      >
        <div className="heading">
          <IoLogoLinkedin />
        </div>
        <div className="icon-title">
         
        </div>
      </a>
      <a
        className="icon-container  bg-dark-bg text-body p-3"
        target="_blank"
        href="https://www.instagram.com/karankumarcv/"
      >
        <div className="heading">
          <RiInstagramFill />
        </div>
        <div className="icon-title">
         
        </div>
      </a>
    </div>
  );
}

export default IconBars;
