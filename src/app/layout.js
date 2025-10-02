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

// GA4 helper functions
export const initGA = () => {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
    page_path: window.location.pathname,
  });
};

export const logPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
};

// Hotjar helper
const initHotjar = () => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_HOTJAR_ID) {
    (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: parseInt(process.env.NEXT_PUBLIC_HOTJAR_ID), hjsv: 7 };
      console.log(process.env.NEXT_PUBLIC_HOTJAR_ID);
      
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }
};

export default function RootLayout({ children }) {
  const tabs = [
    { href: "/", label: "Work", Icon: Briefcase },
    { href: "/about", label: "About", Icon: User },
  ];

  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA
    initGA();
    // Initialize Hotjar
    initHotjar();
  }, []);

  useEffect(() => {
    // Log pageview on route change
    logPageView(pathname);
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