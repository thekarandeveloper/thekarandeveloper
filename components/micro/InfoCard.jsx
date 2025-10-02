"use client"

import React from "react"

export default function InfoCard({
  heading,
  description,
  Icon,
  onIconClick,
  width = "full", // can pass percentage like '70%'
  className = "",
}) {
  return (
    <div
      className={`bg-gray-100 flex flex-col items-center md:items-start justify-between rounded-3xl p-4 sm:p-6 ${className}`}
    >
      {/* Icon at top-right */}
      {Icon && (
        <div className="w-full flex justify-center my-4 md:my-0  md:justify-end order-1 md:order-0">
          <button
            onClick={onIconClick}
            className="bg-gray-300 rounded-full p-3 sm:p-4 text-black flex items-center justify-center"
          >
            <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      )}

      {/* Heading and Description */}
      <div className="mt-8 text-center md:text-left">
        {heading && (
          <div className="text-[28px] sm:text-[40px] font-extralight text-black py-2 sm:py-4">
            {heading}
          </div>
        )}
        {description && (
          <div className="text-[16px] sm:text-[20px] font-extralight text-black max-w-full">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}