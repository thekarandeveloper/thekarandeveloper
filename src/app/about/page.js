// app/about/page.js
import Header from "../../../components/micro/Header"

export default function AboutPage() {
  return (
    <div className="px-10 py-20">
      <Header
        heading="About Me"
        subHeading="Who I Am"
        desc="I'm Karan, an iOS and web developer passionate about building apps..."
        align="left"
       
      />
    </div>
  )
}