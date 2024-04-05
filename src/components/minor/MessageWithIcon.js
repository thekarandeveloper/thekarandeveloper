import React, { useRef } from "react";
import { IoOpenOutline } from "react-icons/io5";
function MessageWithIcon({ description }) {
  return (
    <div className="meeting-body">
      <div className="title">
        <IoOpenOutline className="heading" />
        {description}
      </div>
    </div>
  );
}

export default MessageWithIcon;
