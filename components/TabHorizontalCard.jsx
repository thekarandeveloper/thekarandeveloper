"use client";

import React, { useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { portfolioContent } from "../data/HighlistContent";
import Header from "./micro/Header";
import InfoCard from "./micro/InfoCard";
export default function TabsHorizontalCards() {
  const tabs = ["All", "Research Work", "Presentations", "News", "Interviews"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredContent =
    activeTab === "All"
      ? portfolioContent
      : portfolioContent.filter((item) => item.type === activeTab);

  return (
    <section className="px-6 md:px-20 py-24 bg-black text-white">
      {/* Section Header */}


       <Header
        heading={"Highlights"}
        desc={"Articles and features that showcase my work, research, and projects in the public spotlight"}
        align="left"
        />

      {/* Tabs */}
      <div className="flex justify-start gap-6 mb-8 overflow-x-auto scrollbar-hide border-b-1 border-b-white/20 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-light transition-colors whitespace-nowrap ${
              activeTab === tab
                ? "border-b-1  text-white border-b-white shadow-md"
                : " text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex gap-6 overflow-x-scroll scrollbar-hide py-4">
        {filteredContent.map((item) => (

            <InfoCard
                heading={item.heading}
                description={item.description}
                Icon={ArrowUpRightIcon}
                onIconClick={()=>{window.open(`${item.link}`, "_blank")}}
            >
            </InfoCard>

        ))}
      </div>
    </section>
  );
}