
import React from "react";

import * as AiReactIcons from "react-icons/ai"; // ai for Ant Design Icons
import * as BsReactIcons from "react-icons/bs"; // bs for Bootstrap
import * as BiReactIcons from "react-icons/bi"; // bi for Box Icons

const DynamicReactIcons = (iconso) => {
  // step 2:

  /**
   *
   * @param {string} iconName
   * @returns
   */

  

  const DisplayIcons = (iconName) => {
    // now here we have to check which icon is from "bootstrap" and which one is from "AI"

    if (iconName.startsWith("Ai")) {
      return AiReactIcons[iconName];
    }
    if (iconName.startsWith("Bs")) {
      return BsReactIcons[iconName];
    }
    if (iconName.startsWith("Bi")) {
      return BiReactIcons[iconName];
    }
  };


  const icons = [
    "AiFillApple",
    "AiFillAppstore",
    "AiFillBug",
    "BsFillAirplaneEnginesFill",
    "BiBeer",
  ];

  return (
    <div>
   { React.createElement(DisplayIcons(iconso))}
         {/* {icons.map((iconName, index) => {
        return (
          <span key={index} style={{ fontSize: "50px", margin: "0 10px" }}>
            {React.createElement(DisplayIcons(iconName))}
          </span>
        );
      })} */}
    </div>
  );
};

export default DynamicReactIcons;