import React from "react";
import SocialData from "../../data/social.json";
import * as BsReactIcons from "react-icons/bi";

function IconBars() {
  return (
    <div className="icon-bars flex gap-5 flex-wrap">
      {SocialData.categories.map((categoryData) =>
        categoryData.data.items.map((dataItem) => (
          <a
            className="icon-container bg-primary text-body p-3 cursor-pointer"
            target="_blank"
            href={dataItem.url}
            rel="noreferrer"
          >
            <div className="heading">
              {React.createElement(BsReactIcons[dataItem.image])}
            </div>
          </a>
        ))
      )}
    </div>
  );
}

export default IconBars;
