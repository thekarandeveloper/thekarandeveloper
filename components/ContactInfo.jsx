"use client"

import Header from "./micro/Header";
import { Plus } from "lucide-react";
import InfoCard from "./micro/InfoCard";
import ActionButton from "./micro/Button";
import { ArrowDownToLineIcon } from "lucide-react";
import Image from "next/image";
import ContactCard from "../components/ContactCard"

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center py-20">
       <Header
              heading={"Building Apps"}
              subHeading={"Solving Problems"}
              desc={
                "All-in-one platform to plan, collaborate and deliver faster and smarter, collaborate and deliver — faster and smarter."
              }
              />

      {/* Contact Grid */}

      <div className="flex flex-col mt-10 gap-4 px-6 md:px-30">
        {/* First row */}

        <div className="flex flex-col  md:flex-row gap-4">
         <InfoCard  className="w-full md:w-[70%]" heading={"Heading"} description={"desc"} Icon={Plus}  onClick={() => alert("Grey clicked!")}></InfoCard>
         <InfoCard className="hidden md:block w-full md:w-[30%]" heading={"Heading"} description={"desc"} Icon={Plus}  onClick={() => alert("Grey clicked!")}></InfoCard>
          
        </div>
         <div className="flex flex-col md:flex-row gap-4">
         <InfoCard  className="hidden md:block w-full md:w-[30%]" heading={"Heading"} description={"desc"} Icon={Plus} onIconClick={() => alert("Grey clicked!")}></InfoCard>

         {/* Profile Card */}
         <div className="relative w-full md:w-[70%] bg-gray-100 flex flex-col md:flex-row justify-between rounded-3xl p-6 pb-0 md:pb-10">
      
      {/* Text Content */}
      <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
        <div className="text-[28px] sm:text-[40px] py-2 font-extralight text-black ">
          Building Apps
        </div>
        <div className="text-[16px] sm:text-[20px] font-extralight text-black">
          All-in-one platform to plan, collaborate and deliver faster and smarter.
        </div>
        <div className="flex flex-row gap-2 mt-2 justify-center md:justify-start">
          <ActionButton 
            label="Resassume" 
            Icon={ArrowDownToLineIcon} 
            color="blue" 
            onClick={() => alert("Grey clicked!")} 
          />
          <ActionButton 
            label="Resume" 
            Icon={ArrowDownToLineIcon} 
            color="blue" 
            onClick={() => alert("Grey clicked!")} 
          />
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end">
        <Image 
          src="/Karan.png" 
          width={250} 
          height={600} 
          className="w-3/4 md:w-auto h-auto object-contain" 
          alt="Karan"
        />
      </div>

    </div>
        </div>
      <ContactCard ></ContactCard>

      </div>
    </div>
  );
}
