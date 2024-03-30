import React from "react";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";
function ArticleCard({ toggle }) {
  return (
    <section className="section-container article">
      <div className="section-header">
        <div className="section-title heading">What I have to Say ?</div>
        <Link
          to="https://www.linkedin.com/in/karankumarcv/"
          target="_blank"
          rel="noopener noreferrer"
          className="section-navigation"
        >
          <IoOpenOutline className="card-title" />
        </Link>
      </div>
      <div className="section-body article">
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
