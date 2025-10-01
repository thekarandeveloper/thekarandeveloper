import "../../styles/globals.css"
import Navbar from "../../components/Navbar"
import HeroSection from "../../components/HeroSection"
import IphoneCarousel from "../../components/micro/carousel"
import TextMetrics from "../../components/metrics"
export const metadata = {
  title: "Karan’s Portfolio",
  description: "iOS Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
      <HeroSection />
      <IphoneCarousel/>
      <TextMetrics></TextMetrics>
      </body>
    </html>
  )
}