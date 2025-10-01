"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowDownToLineIcon, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track hash for active links
  useEffect(() => {
    setCurrentHash(window.location.hash)
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20) // adjust threshold
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "", label: "Work" },
    { href: "#about", label: "About" },
  ]

  return (
    <nav
      className={`sticky top-0 left-0 w-full h-26 z-50 flex justify-between items-center px-6 transition-all duration-300 backdrop-blur-sm ${
        scrolled ? "bg-accent/80 py-2" : "bg-accent py-4"
      }`}
    >
      {/* Logo */}
      <div>
        <a href="#" className={`text-2xl font-semibold transition-all duration-300 ${scrolled ? "text-lg" : "text-2xl"}`}>
          Karan Kumar
        </a>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex bg-[#1D1D1F]/70 rounded-md p-1 gap-1">
        {links.map((link) => (
          <li key={link.href} className="flex-1">
            <Link
              href={link.href}
              className={`w-45 h-10 flex items-center justify-center text-center py-2 px-4 rounded-md transition-colors duration-200 ${
                pathname === link.href || currentHash === link.href
                  ? "bg-[#636366] text-white font-regular"
                  : "text-gray-300 hover:bg-[#303030] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Resume Button */}
      <div className="hidden md:flex items-center justify-center p-4 bg-[#0071E3] text-white w-28 h-8 rounded-3xl cursor-pointer hover:bg-blue-700">
        <ArrowDownToLineIcon className="w-4 h-4 mr-2" />
        Resume
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1D1D1F]/90 flex flex-col items-center p-4 gap-2 md:hidden z-50 rounded-b-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full text-center py-2 px-4 rounded-md transition-colors duration-200 ${
                pathname === link.href || currentHash === link.href
                  ? "bg-[#636366] text-white font-regular"
                  : "text-gray-300 hover:bg-[#303030] hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-center p-2 bg-[#0071E3] text-white w-full rounded-3xl cursor-pointer hover:bg-blue-700">
            <ArrowDownToLineIcon className="w-4 h-4 mr-2" />
            Resume
          </div>
        </div>
      )}
    </nav>
  )
}