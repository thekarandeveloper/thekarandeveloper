import React,{useRef} from "react";
import { FaStar } from "react-icons/fa6";
function TestimonialCard({ profileImg, userName, category, desc }) {

  return (
    <div className="test-card-container">
      <div className="test-card-profile">
        <img src={profileImg} alt={profileImg} />
      </div>
      <div className="test-card-body">
        <div className="user-detail">
          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-category">{category}</div>
          </div>
          <div className="ratings" >
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
        <div className="body-normal test-card-desc">{desc}</div>
      </div>
    </div>
  );
}

export default TestimonialCard;
