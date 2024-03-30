import React from "react";
import IconBars from "../minor/IconBars"
function SocialCard() {
  return (
    <section className="section-container social">
      <div className="heading-large">Your Work, My Responsibility</div>
      <div className="label">
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
