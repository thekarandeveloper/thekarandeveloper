"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileTabBar({ tabs }) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden bg-[#1D1D1F]/95 border-t border-white/20 flex justify-around items-center h-16 z-50 backdrop-blur-sm">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        const Icon = tab.Icon;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center text-xs transition-colors ${
              isActive ? "text-white font-semibold" : "text-gray-400"
            }`}
          >
            {Icon && <Icon className="w-5 h-5 mb-1" />}
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}