"use client"

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

const socials = [
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/karankumarux/" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/thekarandeveloper" },
]

export default function Footer() {
  return (
    <footer className="hidden md:block px-8 md:px-20 py-6 border-t border-gray-700 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <div className="text-sm">
          © {new Date().getFullYear()} Karan Kumar. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            )
          })}
        </div>

      </div>
    </footer>
  )
}