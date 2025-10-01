"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { X } from "lucide-react"
const ModalContext = createContext()

export function ModalProvider({ children }) {
 const [modalData, setModalData] = useState(null);
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

 const openModal = ({ heading, component }) => {
    setModalData({ heading, component });
    setIsOpen(true);
  };

 
  const closeModal = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      setModalData(null)
    }, 300) // match transition duration
  }

  // Trigger the slide-up animation after mounting
  useEffect(() => {
    if (isOpen) {
      // small delay to allow initial render
      const timer = setTimeout(() => setIsAnimating(true), 20)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
          <div
            className={`bg-white text-black w-[80vw] h-[86vh] rounded-t-2xl shadow-xl p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto relative ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
          >

            {/* Modal Header */}
            <div className="flex justify-between p-5">
              <div className="text-[35px]">
                {modalData?.heading && (
              <h2 className="text-[35px] font-bold mb-4">{modalData.heading}</h2>
            )}
              </div>
               <button
              className="text-2xl font-bold p-4 rounded-full bg-gray-100 cursor-pointer"
              onClick={closeModal}
            >
              <X></X>
            </button>
            </div>
            {/* Modal content */}

            {modalData?.component}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)