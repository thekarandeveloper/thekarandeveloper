"use client";

import React, { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { portfolioContent } from "../data/HighlistContent";
import Header from "./micro/Header";
import InfoCard from "./micro/InfoCard";
export default function TabsHorizontalCards({className}) {
  const tabs = ["All", "Research", "Presentations", "News"];
  const [activeTab, setActiveTab] = useState(tabs[0] || "");
  const [isOpen, setIsOpen] = useState(false);

 const filteredContent = [...portfolioContent]
  .filter((item) => 
    activeTab === "All" 
      ? true 
      : item.type.trim().toLowerCase() === activeTab.trim().toLowerCase()
  )
  .sort((a, b) => b.id - a.id);
  return (
    <section className={`py-24 bg-black text-white ${className}`}>
      {/* Section Header */}


       <Header
        heading={"Highlights"}
        desc={"Articles and features that showcase my work, research, and projects in the public spotlight"}
        align="left"
        />

      {/* Tabs */}
       <div className="w-full mb-8 mt-4">
      {/* Desktop: Horizontal tabs */}
      <div className="hidden md:flex justify-start gap-6 overflow-x-auto scrollbar-hide border-b border-white/20">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-light transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 text-white border-b-white shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile: Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-2 bg-[#141414] text-white rounded-lg border border-white/20"
        >
          {activeTab}
          <span className="ml-2 transform transition-transform duration-200">
            {isOpen ? "▲" : "▼"}
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-50 mt-2 w-full bg-[#141414] rounded-lg border border-white/20 flex flex-col">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 text-left text-white hover:bg-white/10 transition-colors ${
                  activeTab === tab ? "bg-white/10 font-semibold" : "font-light"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-scroll scrollbar-hide pb-4">
        {filteredContent.map((item) => (

            <InfoCard
                heading={item.heading}
                description={item.description}
                Icon={ArrowUpRightIcon}
                imageSrc={item.imageSrc}
                onIconClick={()=>{window.open(`${item.link}`, "_blank")}}
                link={item.link}
            >
            </InfoCard>

        ))}
      </div>
    </section>
  );
}