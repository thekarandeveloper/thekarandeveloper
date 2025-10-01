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

      <div className="flex flex-col mt-10 gap-4 px-30">
        {/* First row */}

        <div className="flex flex-row gap-4">
         <InfoCard  width="70%" heading={"Heading"} description={"desc"} Icon={Plus}  onClick={() => alert("Grey clicked!")}></InfoCard>
         <InfoCard  width="30%" heading={"Heading"} description={"desc"} Icon={Plus}  onClick={() => alert("Grey clicked!")}></InfoCard>
          
        </div>
         <div className="flex flex-row gap-4">
         <InfoCard  width="30%" heading={"Heading"} description={"desc"} Icon={Plus} onIconClick={() => alert("Grey clicked!")}></InfoCard>
         <div className="relative w-[70%] h-60 bg-gray-100 flex flex-row justify-between rounded-3xl p-10">
            
           <div className="flex flex-col gap-4">
             <div className="text-[40px] py-2 font-extralight text-black">
              Building Apps
            </div>
            <div className="text-[20px] w-120 font-extralight text-black">
             All-in-one platform to plan, collaborate and deliver faster and smarter.
            </div>
            <div className="flex flex-row">
 <ActionButton label={"Resassume"} Icon={ArrowDownToLineIcon} className="w-4 h-4 mr-2" color="blue"  onClick={() => alert("Grey clicked!")}></ActionButton>
              <ActionButton label={"Resume"} Icon={ArrowDownToLineIcon} className="w-4 h-4 mr-2" color="blue"  onClick={() => alert("Grey clicked!")}></ActionButton>
            </div>
             
           </div>
           <div className="absolute bottom-0 right-10 w-full flex justify-end">
               <Image src={"/Karan.png"} width={250} height={600}>

              </Image>
            </div>
          </div>
        </div>
      <ContactCard ></ContactCard>

      </div>
    </div>
  );
}
