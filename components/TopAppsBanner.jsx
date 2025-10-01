"use client"

import TopApps from "./micro/TopApps"
import Header from "./micro/Header"
import { ArrowDownToLineIcon } from "lucide-react"
import ActionButton from "./micro/Button"
export default function BannerApps(){

    return (
        <section className="w-full px-5  md:px-20 ">
        <div className="bg-[#141414]  rounded-4xl overflow-hidden pb-10 md:pb-0">
        <div className="w-full flex  flex-col md:flex-row px-5 md:px-20 border-b-0 border-b-gray-700 py-20 bg-[#2a2a2a] pt-20 ">
        <Header
        heading={"Building Apps"}
        // subHeading={"Solving Problems"}
        desc={
          "All-in-one platform to plan, collaborate and deliver faster and smarter, collaborate and deliver — faster and smarter."
        }
        align="left"
        />
          <ActionButton className="hidden md:block" label={"App Store"} Icon={ArrowDownToLineIcon} color="white"  onClick={() => alert("Grey clicked!")}></ActionButton>
        </div>
       
           

  <TopApps
  name="Sakhi - Your Menstrual Companion"
  desc="Codevarsity helped me master mobile app development with expert guidance and hands-on projects, making learning seamless and practical."
  imageSrc="/apps/Sakhi-ss.png"
  imagePosition="left"
  appStoreLink="https://apps.apple.com/app/id123456"
  caseStudyLink="https://medium.com/@karankumar/sakhi-case-study"
  border="false"

/>
<TopApps
  name="Sakhi - Your Menstrual Companion"
  desc="Codevarsity helped me master mobile app development with expert guidance and hands-on projects, making learning seamless and practical."
  imageSrc="/apps/app2.png"
  imagePosition="right"
  appStoreLink="https://apps.apple.com/app/id123456"
  caseStudyLink="https://medium.com/@karankumar/sakhi-case-study"
  border="false"
/>

            </div>

          
        </section>
    )
}