import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ProjectCard({ toggle }) {
  return (
    <section className="section-container w-full bg-highlight " id="project">
      <div className="section-header w-full flex flex-row justify-center items-center lg:justify-between">
        <div className="section-title heading  text-dark-bg">
          Explore My Work
        </div>
        <button
          onClick={toggle}
          className="title hidden lg:flex bg-dark-bg text-body"
        >
          More Projects&emsp;
          <span>
            <MdKeyboardArrowRight className="heading" />
          </span>
        </button>
      </div>
      <div className="section-body w-full h-full flex flex-col justify-center items-center gap-y-14 md:grid md:grid-cols-2 gap-8 lg:grid-cols-3">
        <ProjectCardBig
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
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
        <div className="hidden lg:block">
          <ProjectCardSmall
            subToggle={toggle}
            imgname={profilePhoto}
            title="Covid Tracker"
            desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
          ></ProjectCardSmall>
        </div>
        <div className="hidden lg:block">
          <ProjectCardSmall
            subToggle={toggle}
            imgname={profilePhoto}
            title="Covid Tracker"
            desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
          ></ProjectCardSmall>
        </div>
      </div>
      <div className="w-full py-4 flex justify-center items-center md:hidden bg-dark-bg text-body">
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
