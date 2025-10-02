"use client"

import Header from "./micro/Header"
import { Play } from "lucide-react"
import { useModal } from "../context/ModalContext"
import { modalContent } from "../data/ModalContent";
export default function HeroSection() {
  const { openModal } = useModal()

  return (
    <div className="w-full h-[65vh] flex justify-center items-center">
      <Header
        heading={"Building Apps"}
        subHeading={"Solving Problems"}
        desc={
          "Skilled in building iOS apps that combine smooth, natural animations with reliable backend systems for a complete experience."
}
        ctaLabel={
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4" /> Know Karan
          </div>
        }
        onCtaClick={() =>
          openModal(
           modalContent.hero
          )
        }
        ctaColor="white"
      />
    </div>
  )
}