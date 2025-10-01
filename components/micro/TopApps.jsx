"use client"

import Image from "next/image"
import { ArrowDownToLineIcon } from "lucide-react"
import ActionButton from "./Button"

export default function TopApps({
  name,
  desc,
  imageSrc,
  imagePosition = "left", // "left" or "right"
  caseStudyLink,
  appStoreLink,
  border = "true"
}) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center w-full h-full pt-10 md:pt-20 gap-6 md:gap-10 ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      } ${border== "true" ? "border-b border-b-gray-700" : ""}`}
    >
      {/* Image */}
      <div className={`w-full md:w-1/2 flex ${imagePosition === "left" ? "justify-start" : "justify-end" }`}>
        <Image
          src={imageSrc}
          alt={name}
          width={250}
          height={550}
          className="w-full max-w-[550px] h-auto object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div
        className={`px-4 md:px-0 flex flex-col gap-3 w-full md:w-1/2 ${
          imagePosition === "right" ? "md:pl-8 lg:pl-20" : "md:pr-8 lg:pr-20"
        } text-center md:text-left`}
      >
        {name && <div className="text-sm md:text-md font-bold">{name}</div>}

        {desc && <div className="text-lg md:text-2xl font-light">{desc}</div>}

        {/* Metrics */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 border-b border-b-gray-700 pb-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="flex flex-col w-[45%] sm:w-30 p-4 gap-2 rounded-md bg-[#212121] text-center"
            >
              <div className="text-xs font-light">Installs</div>
              <div className="text-2xl md:text-3xl font-bold">30+</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row sm:flex-row justify-center md:justify-start gap-3 mt-4">
          {appStoreLink && (
            <ActionButton
              label="App Store"
              Icon={ArrowDownToLineIcon}
              color="blue"
              onClick={() => alert("App Store clicked")}
            />
          )}

          {caseStudyLink && (
            <ActionButton
              label="Case Study"
              Icon={ArrowDownToLineIcon}
              color="white"
              onClick={() => alert("Case Study clicked")}
            />
          )}
        </div>
      </div>
    </div>
  )
}