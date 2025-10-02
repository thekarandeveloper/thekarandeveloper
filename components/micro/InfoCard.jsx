"use client";

import React, { useState, useEffect, useRef } from "react";

export default function InfoCard({
  heading,
  description,
  imageSrc,
  link, // entire card clickable
  width = "full",
  className = "",
  headingLines = 2,
  descLines = 3,
}) {
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const [displayHeading, setDisplayHeading] = useState(heading);
  const [displayDesc, setDisplayDesc] = useState(description);

  // Function to truncate text based on lines
  const truncateText = (el, text, lines) => {
    if (!el) return text;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const maxHeight = lineHeight * lines;
    let truncated = text;

    el.innerText = truncated;

    while (el.scrollHeight > maxHeight && truncated.length > 0) {
      truncated = truncated.slice(0, -1);
      el.innerText = truncated + "...";
    }

    return el.innerText;
  };

  useEffect(() => {
    setDisplayHeading(truncateText(headingRef.current, heading, headingLines));
    setDisplayDesc(truncateText(descRef.current, description, descLines));
  }, [heading, description, headingLines, descLines]);

  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`min-w-[250px] max-w-[250px] md:min-w-[300px] md:max-w-[300px] h-[360px] bg-[#272727] border-1 border-white/0 rounded-3xl overflow-hidden flex-shrink-0 flex flex-col ${className} transition-transform hover:border-1 hover:border-white/20`}
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
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Bottom: Content */}
      <div className="h-1/2 p-6 flex flex-col justify-start items-start text-left text-white">
        {heading && (
          <h3
            ref={headingRef}
            className="text-md md:text-xl font-medium mb-2 line-clamp-2"
          >
            {displayHeading}
          </h3>
        )}
        {description && (
          <p
            ref={descRef}
            className="text-sm md:text-sm font-light line-clamp-3"
          >
            {displayDesc}
          </p>
        )}
      </div>
    </a>
  );
}