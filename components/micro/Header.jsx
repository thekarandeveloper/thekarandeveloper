"use client"

import React from "react"

export default function Header({ 
  heading, 
  subHeading, 
  desc, 
  ctaLabel, 
  onCtaClick,
  ctaColor = "blue" // default is blue
}) {
  // Choose button style based on ctaColor
  const buttonClasses = {
    blue: "bg-[#0071E3] text-white hover:bg-blue-700",
    white: "bg-white text-black hover:bg-gray-200",
  }

  return (
    <div className="w-full flex flex-col justify-center gap-2 items-center text-center px-4">
      
      {/* Heading */}
      {heading && (
        <h1 className="text-[42px] md:text-[50px] font-extralight leading-tight">
          {heading}
        </h1>
      )}

      {/* SubHeading */}
      {subHeading && (
        <h2 className="text-[42px] md:text-[50px] font-extralight leading-tight">
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
        <button
          onClick={onCtaClick}
          className={`mt-4 md:flex items-center justify-center px-6 py-2 rounded-3xl cursor-pointer transition-colors ${buttonClasses[ctaColor]}`}
        >
          {ctaLabel}
        </button>
      )}
    </div>
  )
}