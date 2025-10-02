// app/page.js
import HeroSection from "../../components/HeroSection"
import IphoneCarousel from "../../components/micro/carousel"
import TextMetrics from "../../components/metrics"
import BannerApps from "../../components/TopAppsBanner"
import ContactInfo from "../../components/ContactInfo"
import TabsHorizontalCards from "../../components/TabHorizontalCard"


export const metadata = {
  title: "Karan Kumar | Work Portfolio",
  description: "iOS Developer specializing in SwiftUI, animations, and backend systems.",
  manifest: "/manifest.json",
  themeColor: "#000000",
  icons: {
    icon: "/icons/karan.ico",         // Favicon
    shortcut: "/icons/karan.png", // Tab shortcut
    apple: "KaranFullProfile.png.png" // iOS home screen
  },
  openGraph: {
   title: "Karan Kumar | iOS Developer",
description: "Showcasing production-ready iOS applications with SwiftUI, seamless animations, and practical user-focused solutions.",
    url: "https://karankumar.work",
    siteName: "Karan's Portfolio",
    images: [
      {
        url: "https://karankumar.work/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Karan's Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@karandeveloper",
    creator: "@karandeveloper",
  }
};


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IphoneCarousel />
      <TextMetrics />
      <BannerApps />
      <TabsHorizontalCards className={"px-6 md:px-20"}/>
       
    </>
  )
}