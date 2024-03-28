import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ProjectCard() {
  return (
    <div className="section-container project">
      <div className="section-header">
        <div className="section-title heading">Explore My Work</div>
        <div className="section-navigation">
          <IoOpenOutline className="card-title" />
        </div>
      </div>
      <div className="section-body project">
        <ProjectCardBig
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise. Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise."
          tag1="Mobile Apps"
          tag2="CMS"
          tag3="Mobile Apps"
          tag4="Mobile Apps"
        ></ProjectCardBig>
        <ProjectCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
        <ProjectCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
        <ProjectCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
        <ProjectCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ProjectCardSmall>
      </div>
    </div>
  );
}

export default ProjectCard;
