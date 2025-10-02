"use client"

import React from "react"
import ActionButton from "./Button"
export default function Header({ 
  heading, 
  subHeading, 
  desc, 
  ctaLabel, 
  onCtaClick,
  ctaColor = "blue", // default is blue
  align = "center",   // default center, can be "left"
  animateButton = false // new prop for button animation
}) {
  // Choose button style based on ctaColor
  const buttonClasses = {
    blue: "bg-[#0071E3] text-white hover:bg-blue-700",
    white: "bg-white text-black hover:bg-gray-200",
  }

  // Alignment classes
  const alignmentClasses =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center"

  return (
    <div className={`w-[90%] md:w-full flex flex-col justify-center gap-2 px-4 ${alignmentClasses}`}>
      
      {/* Heading */}
      {heading && (
        <h1 className="text-[42px] md:text-[50px] font-extralight leading-tight">
          {heading}
        </h1>
      )}

      {/* SubHeading */}
      {subHeading && (
        <h2 className="text-[42px] md:text-[50px] font-medium leading-tight">
          {subHeading}
        </h2>
      )}

      {/* Description */}
      {desc && (
        <p className="text-md md:text-lg font-extralight max-w-2xl text-gray-300">
          {desc}
        </p>
      )}

      {/* CTA */}
      {ctaLabel && onCtaClick && (
        <div className="relative mt-4 inline-block">
          {/* Subtle glowing ring - Apple style */}
          {animateButton && (
            <div className="absolute -inset-2 rounded-[28px] bg-white/30 blur-lg animate-pulse"></div>
          )}
          
          {/* Actual Button */}
          <button
            onClick={onCtaClick}
            className={` relative flex items-center justify-center px-6 py-2 rounded-3xl cursor-pointer transition-colors ${buttonClasses[ctaColor]}`}
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </div>
  )
}