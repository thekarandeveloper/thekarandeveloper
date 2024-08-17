import React from "react";
import IconBars from "../minor/IconBars";
import SocialData from "../../data/social.json";
function SocialCard() {
  return (
    <section className="section-container bg-highlight social h-[45vh] flex flex-col justify-center items-center">
      {SocialData.categories.map((categoryData) => (
        <div className="flex flex-col justify-center items-center gap-y-8">
          <div className="heading w-full text-center ">
            {categoryData.heading}
          </div>
          <div className="label w-full text-center">{categoryData.desc}</div>
          <div className="Icons">
            <IconBars></IconBars>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SocialCard;
