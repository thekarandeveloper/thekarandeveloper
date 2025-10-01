"use client"
import Header from "../../../components/micro/Header"
import ContactCard from "../../../components/ContactCard"

export default function AboutPage() {
  return (
    <div className="bg-black text-white w-full">

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto py-15 md:py-24 border-b border-white/10">
        <Header
          heading="About Me"
          subHeading="Who I Am"
          desc="I'm Karan, an iOS and web developer passionate about building apps that make life easier and smarter. With a design-first mindset and a love for clean, functional code, I focus on creating experiences that feel effortless and inspiring."
          align="left"
          className= "px-0"
        />
      </section>

      {/* Journey Section */}
      <section className="px-6 md:px-20 ">
        <div className="max-w-4xl mx-auto py-24 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-light mb-10">My Journey</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold">2021 — Getting Started</h3>
              <p className="text-gray-400 mt-2">
                Began my coding journey by experimenting with small apps and websites. Learned the basics of programming and fell in love with building things.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2022 — Exploring Design & Development</h3>
              <p className="text-gray-400 mt-2">
                Started combining design with development, focusing on creating intuitive user experiences. Built early prototypes and personal projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2023 — Sakhi & Real-World Projects</h3>
              <p className="text-gray-400 mt-2">
                Co-founded Sakhi, a menstrual health and emergency assistance app, and worked on multiple freelance projects. Focused on scaling skills to production-level apps.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2024 — Going Deeper</h3>
              <p className="text-gray-400 mt-2">
                Expanded into Next.js, Astro, and modern frameworks. Blending iOS and web development with a vision to build impactful products.
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
      {/* Contact Section */}
      <section className="px-6 md:px-20 py-10 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <ContactCard label="Let’s Connect" email="karan.kumar@email.com" />
        </div>
      </section>
    </div>
  )
}