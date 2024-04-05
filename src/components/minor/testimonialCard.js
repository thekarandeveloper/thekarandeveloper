import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
function TestimonialCard({ profileImg, userName, category, desc }) {
  return (
    <div className="test-card-container w-3/5 p-5 flex flex-row gap-x-3">
      <div
        className="test-card-profile w-11 h-10 overflow-hidden flex justify-center items-center"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <div className="test-card-body w-full flex flex-col justify-between items-center gap-y-2">
        <div className="user-detail w-full flex flex-row justify-between items-center">
          <div className="user-info">
            <div className="user-name opacity-90">{userName}</div>
            <div className="user-category">{category}</div>
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
        <div className="test-card-desc text-sm leading-smug">{desc}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
