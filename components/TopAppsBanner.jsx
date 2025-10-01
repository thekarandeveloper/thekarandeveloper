import TopApps from "./micro/TopApps"
import Header from "./micro/Header"
export default function BannerApps(){

    return (
        <section className="w-full px-20">
        <div className="bg-[#141414] py-20 rounded-4xl">
        <Header
        heading={"Building Apps"}
        subHeading={"Solving Problems"}
        desc={
          "All-in-one platform to plan, collaborate and deliver faster and smarter, collaborate and deliver — faster and smarter."
        }
        />
           

  <TopApps
  name="Sakhi - Your Menstrual Companion"
  desc="Codevarsity helped me master mobile app development with expert guidance and hands-on projects, making learning seamless and practical."
  imageSrc="/apps/Sakhi-ss.png"
  imagePosition="left"
  appStoreLink="https://apps.apple.com/app/id123456"
  caseStudyLink="https://medium.com/@karankumar/sakhi-case-study"
/>
<TopApps
  name="Sakhi - Your Menstrual Companion"
  desc="Codevarsity helped me master mobile app development with expert guidance and hands-on projects, making learning seamless and practical."
  imageSrc="/apps/app2.png"
  imagePosition="right"
  appStoreLink="https://apps.apple.com/app/id123456"
  caseStudyLink="https://medium.com/@karankumar/sakhi-case-study"
/>

            </div>

          
        </section>
    )
}