import React from "react";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function IconBars() {
  return (
    <div className="icon-bars flex flex-row items-center gap-10">
      <a
        className="icon-container sub-heading"
        target="_blank"
        href="mailto:contact@karankumar.dev"
      >
        <div>
          <IoMail />
        </div>
        <div className="icon-sub-heading">
         
        </div>
      </a>
      <a
        className="icon-container sub-heading"
        target="_blank"
        href="https://twitter.com/karankumarcv"
      >
        <div>
          <FaXTwitter />
        </div>
       
      </a>
      <a
        className="icon-container sub-heading"
        target="_blank"
        href="https://www.linkedin.com/in/karankumarcv/"
      >
        <div>
          <IoLogoLinkedin />
        </div>
        <div className="icon-sub-heading">
         
        </div>
      </a>
      <a
        className="icon-container sub-heading"
        target="_blank"
        href="https://www.instagram.com/karankumarcv/"
      >
        <div>
          <RiInstagramFill />
        </div>
        <div className="icon-sub-heading">
         
        </div>
      </a>
    </div>
  );
}

export default IconBars;
