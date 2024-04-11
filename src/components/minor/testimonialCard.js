import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
function TestimonialCard({ profileImg, userName, category, desc }) {
  return (
    <div className="test-card-container w-[65vw]  p-7 inline-flex flex-col justify-start items-center gap-y-8 bg-[#052566] flex-shrink-0">
      <div
        className="test-card-profile w-[10vw] h-[10vw] overflow-hidden flex justify-center items-center rounded-full bg-fill"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <div className="test-card-body w-50 flex flex-col justify-between items-center gap-y-2 body-normal">
        <div className="user-detail w-full flex flex-col justify-between items-center gap-y-3">
          <div className="user-info w-full ">
            <div className="user-name opacity-90 w-full text-center">{userName}</div>
            <div className="user-category w-full text-center">{category}</div>
          </div>
          <div className="ratings flex flex-row justify-center gap-x-2">
            <div className="star">
              <FaStar />
            </div>
            <div className="star">
              <FaStar />
            </div>
            <div className="star">
              <FaStar />
            </div>
            <div className="star">
              <FaStar />
            </div>
          </div>
        </div>
        <div className="test-card-desc label text-center pt-7">{desc}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
