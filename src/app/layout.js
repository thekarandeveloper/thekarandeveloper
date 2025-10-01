// app/layout.js
import "../../styles/globals.css"
import Navbar from "../../components/Navbar"
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
          {children} {/* <- page specific content inject hoga */}
          <Footer />
          <Modal />
        </ModalProvider>
      </body>
    </html>
  )
}