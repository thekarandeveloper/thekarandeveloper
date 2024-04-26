import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";
import ArticleData from "../../data/articles.json";
import * as BsReactIcons from "react-icons/bi";

function ArticleCard({ toggle }) {
  return (
    <section id="articles" className="section-container article bg-highlight">
      {ArticleData.categories.map((categoryData) => (
        <div className="section-header w-full flex flex-row justify-center items-center lg:justify-between">
          <div className="section-title heading  text-dark-bg">
            {categoryData.heading}
          </div>
          {ArticleData.categories.map((data) =>
            data.data.buttons
              .filter((button) => button.name === "More Articles")
              .map((buttonItem) => (
                <button
                  onClick={toggle}
                  className="title hidden lg:flex bg-dark-bg text-body"
                >
                  {buttonItem.name}&emsp;
                  <span>
                    {React.createElement(BsReactIcons[buttonItem.icon], {
                      className: "heading",
                    })}
                  </span>
                </button>
              ))
          )}
        </div>
      ))}
      <div className=" section-body flex flex-col gap-y-8 md:grid gap-8 grid-cols-2 grid-rows-2">
        {ArticleData.categories.map((categoryData) => (
          <ArticleCardBig
            subToggle={toggle}
            imgname={categoryData.data.items[0].image}
            title={categoryData.data.items[0].name}
            desc={categoryData.data.items[0].desc}
          ></ArticleCardBig>
        ))}
        {ArticleData.categories.map((categoryData) =>
              categoryData.data.items.slice(1,3).map((dataItem) => (
                <ArticleCardSmall
          subToggle={toggle}
          imgname={dataItem.image}
          title={dataItem.name}
          desc={dataItem.desc}
        ></ArticleCardSmall>
     ))
 )}

        
        
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
