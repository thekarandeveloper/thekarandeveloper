"use client"

import React from "react"

export default function ActionButton({ 
  label, 
  Icon, 
  onClick, 
  color = "blue", // default color
  className = ""
}) {

  const colorClasses = {
    blue: "bg-[#0071E3] text-white hover:bg-blue-700",
    white: "bg-white text-black hover:bg-gray-200",
    grey: "bg-gray-500 text-white hover:bg-gray-600",
  }

  return (
    <button
      onClick={onClick}
    className={`${className} min-w-25 md:min-w-35 inline-flex items-center justify-center p-2 h-8 md:h-10 px-4 rounded-3xl cursor-pointer transition-colors ${colorClasses[color]}`}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {label}
    </button>
  )
}