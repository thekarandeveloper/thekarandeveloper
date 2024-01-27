import React from "react";
import { IoMail } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
function InfoCard() {
  return (
    <div className="card-container intro">
      <div className="heading-large">Your Developer Guy</div>
      <div className="body-normal">
        Karan, a meticulous full-stack developer, harmonizes design and code
        with a focus on quality. Transforming ideas into seamless digital
        experiences is my expertise.
      </div>
      <div className="icon-bars">
        <a className="icon-container label" href="mailto:contact@karankumar.dev">
          <div><IoMail /></div>
          <div className="icon-label"><span>Mail Me</span></div>
        </a>
        <a className="icon-container label" href="https://twitter.com/home">
          <div><FaXTwitter /></div>
          <div className="icon-label"><span>Thoughts</span></div>
        </a>
        <a className="icon-container label" href="https://www.linkedin.com/in/thekarandeveloper/">
          <div><IoLogoLinkedin /></div>
          <div className="icon-label"><span>Work Life</span></div>
        </a>
        <a className="icon-container label" href="https://www.instagram.com/karandeveloper/">
          <div><RiInstagramFill /></div>
          <div className="icon-label"><span>Social Life</span></div>
        </a>
      </div>
    </div>
  );
}

export default InfoCard;
