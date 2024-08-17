import React from "react";
import ProjectCardBig from "../minor/projectCardBig";
import ProjectCardSmall from "../minor/projectCardSmall";
import projectData from "../../data/project.json";
import Buttons from "../../data/buttons.json";

import * as BsReactIcons from "react-icons/bi";

function ProjectCard({ toggle }) {
  return (
    <section className="section-container w-full bg-highlight " id="work">
      {projectData.data.map((data) => (
        <div className="section-header w-full flex flex-row justify-center items-center lg:justify-between">
          <div className="section-title heading  text-dark-bg">
            {data.heading}
          </div>
          {Buttons.data.map((data) =>
            data.items
              .filter((button) => button.name.toLowerCase() === "more-projects")
              .map((buttonItem) => (
                <button
                  onClick={() => toggle(data, buttonItem)}
                  className="title hidden lg:flex bg-dark-bg text-body"
                >
                  {buttonItem.label}&emsp;
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
        {projectData.data.map((data) => (
          <ProjectCardBig
            subToggle={() => toggle(data, data.items[0])}
            imgname={data.items[0].image}
            title={data.items[0].name}
            desc={data.items[0].desc}
            tag1={data.items[0].tags[0]}
            tag2={data.items[0].tags[1]}
            tag3={data.items[0].tags[2]}
            
          ></ProjectCardBig>
        ))}

        {projectData.data.map((data) =>
          data.items
            .slice(1, 5)
            .map((item) => (
              <ProjectCardSmall
                subToggle={() => toggle(data, item)}
                imgname={item.image}
                title={item.name}
                desc={item.desc}
              ></ProjectCardSmall>
            ))
        )}
      </div>
      <div className="w-full py-4 flex justify-center items-center md:hidden bg-dark-bg text-body">
        {Buttons.data.map((data) =>
          data.items
            .filter((button) => button.name.toLowerCase() === "more-projects")
            .map((buttonItem) => (
              <button
                onClick={() => toggle(data, buttonItem)}
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
    </section>
  );
}

export default ProjectCard;