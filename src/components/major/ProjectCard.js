import React from "react";
import {Link} from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import profilePhoto from "../../assets/media/bg.png";

function ProjectCard({toggle}) {
  return (
    <section className="section-container project" id="project">
      <div className="section-header">
        <div className="section-title heading">Explore My Work</div>
        <Link to='https://github.com/karankumarcv' target="_blank" rel="noopener noreferrer" className="section-navigation project">
          <IoOpenOutline className="card-title" />
        </Link>
      </div>
      <div className="section-body project">
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
