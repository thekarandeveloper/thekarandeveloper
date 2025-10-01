import "../../styles/globals.css"
import Navbar from "../../components/Navbar"

export const metadata = {
  title: "Karan’s Portfolio",
  description: "iOS Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="px-6">{children}</main>
      </body>
    </html>
  )
}