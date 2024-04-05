import React from "react";
import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ProjectCard({toggle}) {
  return (
    <section className="section-container project" id="project">
      <div className="section-header">
        <div className="section-title heading">Explore My Work</div>
        <div onClick={toggle} className="section-navigation label">
          More Projects&emsp;
          <MdKeyboardArrowRight className="sub-heading"/>
        </div>
      </div>
      <div className="w-full h-full project grid grid-cols-3 gap-12">
        <ProjectCardBig
          subToggle = {toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise. Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise."
          tag1="Mobile Apps"
          tag2="CMS"
          tag3="Mobile Apps"
          tag4="Mobile Apps"
        ></ProjectCardBig>
        <ProjectCardSmall subToggle = {toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
        <ProjectCardSmall subToggle = {toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
        <ProjectCardSmall subToggle = {toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
         <ProjectCardSmall subToggle = {toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
      </div>
    </section>
  );
}

export default ProjectCard;
