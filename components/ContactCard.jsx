"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

export default function ContactCard({ label = "Reach Me At", email = "karan@example.com" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // reset after 2s
  }

  return (
    <div className="flex justify-center py-10">
      <div className="w-full bg-[#1D1D1F] rounded-2xl p-10 text-center border border-white/10 shadow-soft">
        
        {/* Label */}
        <div className="text-gray-400 text-sm text-left uppercase tracking-widest mb-6 border-b-1 border-b-gray-600 pb-5">
          {label}
        </div>

        {/* Email + Copy Button */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-2xl md:text-3xl font-light text-white">
            {email}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#0071E3] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-3xl transition-all"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  )
}