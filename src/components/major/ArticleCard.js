import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";

function ArticleCard({ toggle }) {
  return (
    <section id="article" className="section-container article bg-highlight">
      <div className="section-header w-full flex flex-col justify-center items-center">
        <div className="section-title heading">What I have to Say ?</div>
        <button onClick={toggle} className="title hidden lg:flex">
          More Projects&emsp;
          <span>
            <MdKeyboardArrowRight className="title" />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-y-8">
        <ArticleCardBig
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise. Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise."
          tag1="Mobile Apps"
          tag2="CMS"
          tag3="Mobile Apps"
          tag4="Mobile Apps"
        ></ArticleCardBig>
       
        <ArticleCardSmall
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
       <ArticleCardSmall
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
        
      </div>
      <div className="w-full py-4 flex justify-center items-center lg:hidden bg-dark-bg text-body">
        <button onClick={toggle} className="title">
          More Articles&emsp;
          <span>
            <MdKeyboardArrowRight className="heading" />
          </span>
        </button>
      </div>
    </section>
  );
}

export default ArticleCard;
