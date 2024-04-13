import React from "react";
import IconBars from "../minor/IconBars";
function SocialCard() {
  return (
    <section className="section-container bg-highlight social h-[45vh] flex flex-col justify-center items-center gap-y-8">
      <div className="heading w-full text-center ">
        Your Work, My Responsibility
      </div>
      <div className="label w-full text-center">
        I’m a software engineer specializing in building exceptional digital
        experiences.
      </div>
      <div className="Icons">
        <IconBars></IconBars>
      </div>
    </section>
  );
}

export default SocialCard;
