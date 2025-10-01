"use client"

import Header from "./micro/Header"
import { Play } from "lucide-react"
import { useModal } from "../context/ModalContext"

export default function HeroSection() {
  const { openModal } = useModal()

  return (
    <div className="w-full h-[65vh] flex justify-center items-center">
      <Header
        heading={"Building Apps"}
        subHeading={"Solving Problems"}
        desc={
          "All-in-one platform to plan, collaborate and deliver faster and smarter, collaborate and deliver — faster and smarter."
        }
        ctaLabel={
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4" /> Know Karan
          </div>
        }
        onCtaClick={() =>
          openModal(
            <div className="text-center">
              <h2 className="text-2xl font-bold">Hello from Hero!</h2>
              <p>This is dynamic content in a global modal.</p>
            </div>
          )
        }
        ctaColor="white"
      />
    </div>
  )
}