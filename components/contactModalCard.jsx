"use client";

import { Mail, Github, Linkedin, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactModalContent() {
  const [copied, setCopied] = useState(false);
  const email = "contact.karankumar23@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-gray-50 rounded-2xl flex flex-col md:flex-row justify-between items-stretch w-full gap-6 h-[60vh]">

      {/* Email section */}
      <div className="flex flex-col justify-start w-full md:w-1/2 space-y-4 border border-gray-200 rounded-2xl  p-6 text-gray-800">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-sm text-gray-500 mt-1">
            Feel free to reach out to me via email. I’ll get back to you soon.
          </p>
        </div>

        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 w-full">
          <Mail className="w-5 h-5 text-gray-700" />
          <span className="text-sm font-medium break-all">{email}</span>
          <button
            onClick={handleCopy}
            className="ml-auto text-sm cursor-pointer text-blue-600 hover:text-blue-700"
          >
            {copied ? "Copied!" : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Social section */}
      <div className="flex flex-col justify-start w-full md:w-1/2 space-y-4 border border-gray-200 rounded-2xl p-6 text-gray-800">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Connect Socially</h3>
          <p className="text-sm text-gray-500 mt-1">
            You can also connect with me on my social profiles.
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            href="https://github.com/thekarandeveloper/"
            target="_blank"
            className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/karandeveloper/"
            target="_blank"
            className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
}