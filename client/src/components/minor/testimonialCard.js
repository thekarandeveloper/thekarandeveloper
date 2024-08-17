import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
function TestimonialCard({ profileImg, userName, category, desc }) {
  return (
    <div className="test-card-container w-[65vw]  p-7 inline-flex flex-col justify-start items-center gap-y-8 bg-[#052566] flex-shrink-0 lg:w-[80%] lg:flex-row gap-x-6 lg:items-start">
      <div
        className="test-card-profile  overflow-hidden flex justify-center items-center rounded-full bg-fill p-6"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <div className="test-card-body w-[80%] flex flex-col justify-between items-center gap-y-2 body-normal lg:items-start">
        <div className="user-detail w-full flex flex-col justify-between items-center gap-y-3 lg:flex-row">
          <div className="user-info w-full">
            <div className="user-name opacity-90 w-full text-center lg:text-left">{userName}</div>
            <div className="user-category w-full text-center lg:text-left">{category}</div>
          </div>
          <div className="ratings flex flex-row justify-center gap-x-2 ">
            <div className="star text-[#ffd746]">
              <FaStar />
            </div>
            <div className="star text-[#ffd746]">
              <FaStar />
            </div>
            <div className="star text-[#ffd746]">
              <FaStar />
            </div>
            <div className="star text-[#ffd746]">
              <FaStar />
            </div>
          </div>
        </div>
        <div className="test-card-desc label text-center pt-7 lg:text-left ">{desc}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
