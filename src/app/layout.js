"use client";

import "../../styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ModalProvider } from "../../context/ModalContext";
import Modal from "../../components/Modal";
import MobileTabBar from "../../components/MobileTabBar";
import { Briefcase, User } from "lucide-react";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initGA, logPageView } from "../../lib/ga"; // import GA helper

export default function RootLayout({ children }) {
  const tabs = [
    { href: "/", label: "Work", Icon: Briefcase },
    { href: "/about", label: "About", Icon: User },
  ];

  const pathname = usePathname();

  useEffect(() => {
    initGA(); // Initialize GA once
  }, []);

  useEffect(() => {
    logPageView(pathname); // Log each pageview
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ModalProvider>
          <Navbar />
          {children}
          <MobileTabBar tabs={tabs} />
          <Footer />
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}