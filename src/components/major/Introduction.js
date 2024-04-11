import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProfilePhoto from "../../assets/media/profilePhoto.webp";
function Introduction({ toggle }) {
  return (
    <section className="home h-[90vh]">
      <div className="image-container w-full bg-light-bg h-full flex justify-center items-center overflow-hidden  pt-12  pb-0 p-0">
        <div
          className="w-full p-0 h-full flex justify-center items-center overflow-hidden bg-top bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${ProfilePhoto})` }}
        ></div>
      </div>
      <div className="w-full h-full bg-primary flex flex-col justify-center items-center p-5 pt-10 pb-10 gap-y-9 text-body">
        <div className="large-heading ">Hello,</div>
        <div className="label flex text-center">
          I'm Karan, a meticulous full-stack developer, harmonizes design and
          code with a focus on quality. Transforming ideas into seamless digital
          experiences is my expertise.
        </div>
        <button className="title border-body border-2" onClick={toggle}>
          View Resume{" "}
          <span className="heading cta-btn-icon">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Introduction;
