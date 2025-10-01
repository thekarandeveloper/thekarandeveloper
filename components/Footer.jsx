import { linkedin, github, x } from "lucide-react";

export default function Footer() {
  return (

    <section className="px-20">
<div className="w-full h-12 flex justify-between items-center py-20 border-t border-gray-200">
      {/* Left Side */}
      <div className="text-sm text-gray-600">
        © 2023 Karan Kumar. All rights reserved.
      </div>

      {/* Social */}
      <div className="flex space-x-4 text-gray-600">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <linkedin className="w-5 h-5 hover:text-amber-600 transition-colors" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <github className="w-5 h-5 hover:text-amber-600 transition-colors" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <x className="w-5 h-5 hover:text-amber-600 transition-colors" />
        </a>
      </div>
    </div>
    </section>
    
  );
}