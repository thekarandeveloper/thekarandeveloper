import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";

function ArticleCard({ toggle }) {
  return (
    <section id="article" className="section-container article h-[90vh] ">
      <div className="section-header">
        <div className="section-title heading">What I have to Say ?</div>
        <div onClick={toggle} className="section-navigation label">
          More Articles&emsp;
          <MdKeyboardArrowRight className="sub-heading" />
        </div>
      </div>
      <div className="h-4/5 article-body grid grid-rows-3 gap-12">
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
       <ArticleCardSmall
          subToggle={toggle}
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
      </div>
    </section>
  );
}

export default ArticleCard;
