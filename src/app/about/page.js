// "use client"
import Header from "../../../components/micro/Header"
import ContactCard from "../../../components/ContactCard"
import TabsHorizontalCards from "../../../components/TabHorizontalCard"


export const metadata = {
  title: "Karan Kumar | About",
  description: "About Karan - iOS Developer Portfolio",
  openGraph: {
    title: "Karan Kumar | About",
    description: "iOS developer portfolio and journey",
    url: "https://karankumar.work/about",
  },
  twitter: {
    card: "summary_large_image",
    site: "@karandeveloper",
    creator: "@karandeveloper",
  }
};


export default function AboutPage() {
  return (
    <div className="bg-black text-white w-full">

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-15 md:py-24 border-b border-white/10">
       <Header
  heading="About Me"
  subHeading="iOS Developer"
  desc="I build iOS apps with a focus on smooth animations, clean architecture, and intuitive user experiences. My goal is to craft applications that are both functional and visually polished, blending design and code seamlessly."
  align="left"
  className="px-0"
/>
      </section>

      {/* Journey Section */}
     <section className="px-6 md:px-20">
  <div className="max-w-4xl mx-auto py-24 border-b border-white/10">
    <h2 className="text-3xl md:text-4xl font-light mb-10">My Journey</h2>
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold">2025 — Continuous Growth</h3>
        <p className="text-gray-400 mt-2">
          Deepening expertise in iOS, backend integration, and animations. Focused on building apps that balance usability, performance, and a polished Apple-like design experience.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">2024 — Advanced Development & Finance Apps</h3>
        <p className="text-gray-400 mt-2">
          Expanded into SwiftData, Charts API, and modern iOS frameworks. Built MoneyMate and Bazzar apps with cloud sync, payment integration, and robust architecture for real-world usage.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">2023 — Sakhi & Real-World iOS Projects</h3>
        <p className="text-gray-400 mt-2">
          Co-founded Sakhi, a menstrual health app, and developed production-ready iOS apps. Implemented SwiftUI architecture, Core Data, Firebase integration, and push notifications for real users.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">2022 — Freelance & Technical Writing</h3>
        <p className="text-gray-400 mt-2">
          Worked as a freelance technical writer creating structured tutorials and example projects. Started blending design with development to build intuitive experiences.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">2021 — Learning the Basics</h3>
        <p className="text-gray-400 mt-2">
          Began exploring programming and development. Experimented with small apps and websites, building foundational skills in coding and problem-solving.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
     <section className="px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-left  py-24 border-b border-white/10">
        <h2 className="text-4xl font-light mb-6">My Core Specialty</h2>
        <h3 className="text-3xl font-semibold mb-4">iOS Development & Mobile UX</h3>
        <p className="text-gray-400 text-lg">
          Building smooth, reliable, and user-focused iOS apps that solve real problems. Combining Swift development with design-first thinking to create experiences people love.
        </p>
      </div>
    </section>
    <section className=" max-w-4xl mx-auto px-4">
 <TabsHorizontalCards className={"px-0 md:px-0"} />
      
    </section>
      {/* Contact Section */}
      <section className="px-6 md:px-20 pb-10 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <ContactCard label="Let’s Connect" email="contact.karankumar23@email.com" />
        </div>
      </section>
    </div>
  )
}