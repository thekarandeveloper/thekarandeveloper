import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ArticleCard() {
  return (
    <div className="section-container article">
      <div className="section-header">
        <div className="section-title heading">What I have to Say ?</div>
        <div className="section-navigation">
          <IoOpenOutline className="card-title" />
        </div>
      </div>
      <div className="section-body article">
        <ArticleCardBig
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise. Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality. Transforming ideas into seamless digital experiences is my expertise."
          tag1="Mobile Apps"
          tag2="CMS"
          tag3="Mobile Apps"
          tag4="Mobile Apps"
        ></ArticleCardBig>
        <ArticleCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
        <ArticleCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
        <ArticleCardSmall
          imgname={profilePhoto}
          title="Covid Tracker"
          desc="Karan, a meticulous full-stack developer, harmonizes design and code with a focus on quality."
        ></ArticleCardSmall>
      
      </div>
    </div>
  );
}

export default ArticleCard;
