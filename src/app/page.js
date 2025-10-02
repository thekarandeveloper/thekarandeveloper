// app/page.js
import HeroSection from "../../components/HeroSection"
import IphoneCarousel from "../../components/micro/carousel"
import TextMetrics from "../../components/metrics"
import BannerApps from "../../components/TopAppsBanner"
import ContactInfo from "../../components/ContactInfo"
import TabsHorizontalCards from "../../components/TabHorizontalCard"
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IphoneCarousel />
      <TextMetrics />
      <BannerApps />
      <TabsHorizontalCards />
       
    </>
  )
}