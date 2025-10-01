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
      className={`bg-gray-100 flex flex-col justify-between rounded-3xl p-8 ${className}`}
      style={{ width: width === "full" ? "100%" : width }}
    >
      {/* Icon at top-right */}
      {Icon && (
        <div className="w-full flex justify-end">
          <button
            onClick={onIconClick}
            className="bg-gray-300 rounded-full p-4 text-black flex items-center justify-center"
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Heading and Description */}
      <div className="mt-4">
        {heading && (
          <div className="text-[40px] font-extralight text-black py-4">
            {heading}
          </div>
        )}
        {description && (
          <div className="text-[20px] font-extralight text-black max-w-full">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}