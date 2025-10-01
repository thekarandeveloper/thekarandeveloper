"use client";

import "../../styles/globals.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { ModalProvider } from "../../context/ModalContext"
import Modal from "../../components/Modal"
import MobileTabBar from "../../components/MobileTabBar";
import { Briefcase, User, BookOpen } from "lucide-react";




export default function RootLayout({ children }) {
  const tabs = [
    { href: "/", label: "Work", Icon: Briefcase },
    { href: "/about", label: "About", Icon: User },
  ];
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ModalProvider>
          <Navbar />
          {children} {/* <- page specific content inject hoga */}
           <MobileTabBar tabs={tabs} />
          <Footer />
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
}