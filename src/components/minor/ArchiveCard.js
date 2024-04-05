import React from 'react'
import profilePhoto from "../../assets/media/bg.png";
import { MdKeyboardArrowRight } from "react-icons/md";
function ArchiveCard({toggles,img,title, desc}) {
  return (
    <div className="item-container" onClick={toggles}>
        <div className="item-banner">
          <img src={profilePhoto} alt="profilePhoto"></img>
        </div>
        <div className="item-body">
          <div className="item-title">Social Analyzer</div>
          <div className="item-desc">
            Karan, a meticulous full-stack developer, harmonizes design and code
            with a focus on quality.
          </div>
        </div>
        <div className="item-navigation heading">
        <MdKeyboardArrowRight />
        </div>
      </div>
  )
}

export default ArchiveCard