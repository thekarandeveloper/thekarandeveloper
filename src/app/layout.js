"use client";

import "../../styles/globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ModalProvider } from "../../context/ModalContext";
import Modal from "../../components/Modal";
import MobileTabBar from "../../components/MobileTabBar";
import { Briefcase, User } from "lucide-react";
import Script from "next/script";
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
      <head>
        <title>Karan Kumar | iOS Developer Portfolio</title>
        <meta name="description" content="iOS Developer Portfolio showcasing live apps, SwiftUI projects, and animations." />
        <link rel="icon" href="/favicon.ico" />
        {/* Hotjar */}
        <Script
          id="hotjar"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:661bfff0e4fa6,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className="bg-black text-white">
        <ModalProvider>
          <Navbar />
          {children}
          <MobileTabBar tabs={tabs} />
          <Footer />
          <Modal />
        </ModalProvider>

        {/* Google Analytics Script (optional inline) */}
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}