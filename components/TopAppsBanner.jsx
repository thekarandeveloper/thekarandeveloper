"use client"

import TopApps from "./micro/TopApps"
import Header from "./micro/Header"
import { FaGithub } from "react-icons/fa"
import ActionButton from "./micro/Button"
export default function BannerApps(){

    return (
        <section className="w-full px-5  md:px-20 ">
        <div className="bg-[#141414]  rounded-4xl overflow-hidden pb-10 md:pb-0">
        <div className="w-full flex  flex-col md:flex-row px-5 md:px-20 border-b-0 border-b-gray-700 py-20 bg-[#2a2a2a] pt-20 ">
        <Header
        heading={"Selected Work"}
        // subHeading={"Solving Problems"}
        desc={
          "A handpicked showcase of apps that highlight clean design, intuitive functionality, and advanced animations, reflecting both technical and creative skills."
        }
        align="left"
        />
          <ActionButton className="hidden md:flex" label={"All Projects"} Icon={FaGithub} color="white"  onClick={() => window.open("https://github.com/thekarandeveloper", "_blank")}></ActionButton>
        </div>
       
           

<TopApps
  name="Sakhi"
  desc="A menstrual health and emergency assistance app designed to help women track their cycles, receive timely reminders, and access support when needed."
  imageSrc="/apps/Sakhi-ss.png"
  imagePosition="left"
  appStoreLink="https://apps.apple.com/us/app/sakhi-menstrual-companion/id6747256551"
  caseStudyLink="https://www.behance.net/gallery/229409515/Sakhi-Menstrual-Companion"
  metrics={[
    { title: "Downloads", value: "100+" },
    { title: "Active Users", value: "70%" },
    { title: "App Store Rating", value: "4.9" },
  ]}
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