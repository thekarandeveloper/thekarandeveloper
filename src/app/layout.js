import "../../styles/globals.css"
import Navbar from "../../components/Navbar"
import HeroSection from "../../components/HeroSection"
import IphoneCarousel from "../../components/micro/carousel"
import TextMetrics from "../../components/metrics"
import BannerApps from "../../components/TopAppsBanner"
import ContactInfo from "../../components/ContactInfo"
import Footer from "../../components/Footer"
import { ModalProvider } from "../../context/ModalContext"
import Modal from "../../components/Modal"

export const metadata = {
  title: "Karan’s Portfolio",
  description: "iOS Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ModalProvider>
          <Navbar />
          <HeroSection />
          <IphoneCarousel />
          <TextMetrics />
          <BannerApps />
          <ContactInfo />
          <Footer />
          <Modal /> {/* Global modal component */}
        </ModalProvider>
      </body>
    </html>
  )
}