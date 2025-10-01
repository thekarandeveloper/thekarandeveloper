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
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full h-full pt-20 gap-10 ${imagePosition === "right" ? "md:flex-row-reverse" : ""}  border-b-1 border-b-gray-700`}>
      
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={650}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-3 w-full md:w-1/2 pr-0 ${imagePosition === "right" ? "md:pl-20" : "md:pr-20"} text-center md:text-left`}>
        
        {name && <div className="text-md font-bold">{name}</div>}

        {desc && <div className="text-2xl font-light">{desc}</div>}

        {/* Metrics */}
        
        <div className="flex flex-row gap-4 w-full border-b-1 pb-4 border-b-gray-700">
 <div className="flex flex-col w-30 p-5 gap-4 rounded-md bg-[#212121]">
            <div className="text-xs font-light">Installs</div>
            <div className="text-3xl font-bold">30+</div>
        </div>
         <div className="flex flex-col w-30 p-5 gap-4 rounded-md bg-[#212121]">
            <div className="text-xs font-light">Installs</div>
            <div className="text-3xl font-bold">30+</div>
        </div>
         <div className="flex flex-col w-30 p-5 gap-4 rounded-md bg-[#212121]">
            <div className="text-xs font-light">Installs</div>
            <div className="text-3xl font-bold">30+</div>
        </div>
        </div>
       


        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          {appStoreLink && (
             <ActionButton label={"App Store"} Icon={ArrowDownToLineIcon} color="blue"  onClick={() => alert("Grey clicked!")}></ActionButton>

          )}

          {caseStudyLink && (

               <ActionButton label={"Case Study"} Icon={ArrowDownToLineIcon} color="white"  onClick={() => alert("Grey clicked!")}></ActionButton>

          
          )}
        </div>

      </div>
    </div>
  )
}