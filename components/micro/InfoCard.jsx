"use client";

import React, { useState, useEffect, useRef } from "react";

export default function InfoCard({
  heading,
  description,
  Icon,
  onIconClick,
  imageSrc,
  width = "full",
  className = "",
  lines = 3, // number of lines to clamp
}) {
  const ref = useRef(null);
  const [displayText, setDisplayText] = useState(description);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * lines;

    let truncated = description;
    el.innerText = truncated;

    while (el.scrollHeight > maxHeight && truncated.length > 0) {
      truncated = truncated.slice(0, -1);
      el.innerText = truncated + "...";
    }

    setDisplayText(el.innerText);
  }, [description, lines]);

  return (
    <div
      className={`min-w-[250px] max-w-[250px] bg-[#272727] rounded-3xl overflow-hidden flex-shrink-0 flex flex-col ${className}
        w-full md:min-w-[300px] md:max-w-[300px] h-[360px]`}
      style={{ width: width === "full" ? "100%" : width }}
    >
      {/* Top: Image or Placeholder */}
      <div className="h-1/2 flex items-center justify-center bg-gray-200 relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={heading}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200"></div>
        )}
      </div>

      {/* Bottom: Content */}
      <div className="h-1/2 p-6 flex flex-col justify-start items-start text-left text-white">
        {heading && (
          <h3 className="text-md md:text-xl font-medium mb-2">
            {heading}
          </h3>
        )}
        {description && (
          <p ref={ref} className="text-sm md:text-sm font-light">
            {displayText}
          </p>
        )}
      </div>
    </div>
  );
}