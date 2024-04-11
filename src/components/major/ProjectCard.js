import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ProjectCard({ toggle }) {
  return (
    <section className="section-container w-full bg-highlight" id="project">
      <div className="section-header w-full flex flex-col justify-center items-center">
        <div className="section-title heading  text-dark-bg">
          Explore My Work
        </div>
        <button onClick={toggle} className="title hidden lg:flex">
          More Projects&emsp;
          <span>
            <MdKeyboardArrowRight className="title" />
          </span>
        </button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-14">
        <ProjectCardBig
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise. Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise."
          tag1="Mobile Apps"
          tag2="CMS"
          tag3="Mobile Apps"
          tag4="Mobile Apps"
          tag5="Node.js"
        ></ProjectCardBig>
        <ProjectCardSmall
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>

        <ProjectCardSmall
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
       
      </div>
      <div className="w-full py-4 flex justify-center items-center lg:hidden bg-dark-bg text-body">
        <button onClick={toggle} className="title">
          More Projects&emsp;
          <span>
            <MdKeyboardArrowRight className="heading" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default ProjectCard;
