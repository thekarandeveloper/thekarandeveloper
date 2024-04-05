import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProfilePhoto from "../../assets/media/profilePhoto.webp"
function Introduction({toggle}) {
  return (
    <section className="home h-[70vh]">
      <div className="card-container intro h-full justify-end p-0 px-8 py-14 gap-y-8">
        <div className="heading-large">Hello,</div>
        <div className="intro text-lg font-normal leading-7">
          I'm Karan, a meticulous full-stack developer, harmonizes design and
          code with a focus on quality. Transforming ideas into seamless digital
          experiences is my expertise.
        </div>
        <button
          className="label info cta-btn"
          // href={""}
          onClick={toggle}
        >
          View Resume{" "}
          <span className="heading cta-btn-icon">
            <MdKeyboardArrowRight />
          </span>
        </button>
      </div>
      <div className="image-container w-4/5 h-full flex justify-center items-center overflow-hidden bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${ProfilePhoto})`}}>
      </div>
    </section>
  );
}

export default Introduction;
