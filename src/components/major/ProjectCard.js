import React from "react";
import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import projectData from "../../data/project.json";
import * as BsReactIcons from "react-icons/bi";

function ProjectCard({ toggle }) {
  return (
    <section className="section-container w-full bg-highlight " id="work">
      {projectData.categories.map((categoryData) => (
        <div className="section-header w-full flex flex-row justify-center items-center lg:justify-between">
          <div className="section-title heading  text-dark-bg">
            {categoryData.heading}
          </div>
          {projectData.categories.map((data) =>
            data.data.buttons
              .filter((button) => button.title === "More Projects")
              .map((buttonItem) => (
                <button
                  onClick={toggle}
                  className="title hidden lg:flex bg-dark-bg text-body"
                >
                  {buttonItem.title}&emsp;
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

      <div className="section-body w-full h-full flex flex-col justify-center items-center gap-y-14 md:grid md:grid-cols-2 gap-8 lg:grid-cols-3">
        {projectData.categories.map((categoryData) => (
          <ProjectCardBig
            subToggle={toggle}
            imgname={categoryData.data.items[0].image}
            title={categoryData.data.items[0].title}
            desc={categoryData.data.items[0].desc}
            tag1={categoryData.data.items[0].tags[0]}
            tag2={categoryData.data.items[0].tags[1]}
            tag3={categoryData.data.items[0].tags[2]}
            tag4={categoryData.data.items[0].tags[3]}
            tag5={categoryData.data.items[0].tags[4]}
          ></ProjectCardBig>
        ))}

        {projectData.categories.map((categoryData) =>
          categoryData.data.items
            .slice(1, 5)
            .map((dataItem) => (
              <ProjectCardSmall
                subToggle={toggle}
                imgname={dataItem.image}
                title={dataItem.title}
                desc={dataItem.desc}
              ></ProjectCardSmall>
            ))
        )}
      </div>
      <div className="w-full py-4 flex justify-center items-center md:hidden bg-dark-bg text-body">
        {projectData.categories.map((data) =>
          data.data.buttons
            .filter((button) => button.title === "More Projects")
            .map((buttonItem) => (
              <button
                onClick={toggle}
                className="title flex lg:hidden bg-dark-bg text-body"
              >
                {buttonItem.title}&emsp;
                <span>
                  {React.createElement(BsReactIcons[buttonItem.icon], {
                    className: "heading",
                  })}
                </span>
              </button>
            ))
        )}
      </div>
    </section>
  );
}

export default ProjectCard;
