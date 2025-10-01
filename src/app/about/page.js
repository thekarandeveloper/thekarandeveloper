"use client"
import Header from "../../../components/micro/Header"
import ContactCard from "../../../components/ContactCard"
export default function AboutPage() {
  return (
    <div className="bg-black text-white w-full">
      {/* Intro Section */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <Header
          heading="About Me"
          subHeading="Who I Am"
          desc="I'm Karan, an iOS and web developer passionate about building apps that make life easier and smarter. With a design-first mindset and a love for clean, functional code, I focus on creating experiences that feel effortless and inspiring."
          align="left"
        />
      </section>

      {/* Journey Section */}
      <section className="px-6 md:px-20 py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
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
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12">What I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg font-light">
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Swift / iOS
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Next.js
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Astro
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Tailwind
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Figma
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Firebase
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Framer
            </div>
            <div className="bg-[#1D1D1F] rounded-xl p-6 hover:bg-[#2C2C2E] transition">
              Git & GitHub
            </div>
          </div>
        </div>
      </section>


      <ContactCard></ContactCard>
    </div>
  )
}