"use client"
import { createContext, useContext, useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const modalRef = useRef(null)
  const startY = useRef(0)
  const currentY = useRef(0)

  const openModal = ({ heading, component }) => {
    setModalData({ heading, component })
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsOpen(false)
      setModalData(null)
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimating(true), 20)
      return () => clearTimeout(timer)
    } else {
      setIsAnimating(false)
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  // Mobile swipe-to-dismiss
  const handleTouchStart = (e) => { startY.current = e.touches[0].clientY }
  const handleTouchMove = (e) => {
    if (!modalRef.current) return
    currentY.current = e.touches[0].clientY - startY.current
    if (currentY.current > 0) {
      modalRef.current.style.transform = `translateY(${currentY.current}px)`
    }
  }
  const handleTouchEnd = () => {
    if (!modalRef.current) return
    if (currentY.current > 100) closeModal()
    else modalRef.current.style.transform = `translateY(0)`
    currentY.current = 0
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
          <div
            ref={modalRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`bg-white text-black rounded-t-3xl w-full md:w-[80vw] max-h-[90vh] transform transition-transform duration-300 ease-in-out overflow-hidden
              ${isAnimating ? "translate-y-0" : "translate-y-full"}`}
          >
            {/* Grab handle */}
            {/* <div className="w-12 h-1.5 bg-white rounded-full mx-auto my-3" /> */}

            {/* Header (Sticky) */}
            <div className="flex justify-between items-center px-8 py-8 border-gray-200 sticky top-0 bg-white z-10">
              {modalData?.heading && (
                <h2 className="text-2xl md:text-[35px] font-bold">{modalData.heading}</h2>
              )}
              <button
                className="text-2xl p-3 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                onClick={closeModal}
              >
                <X />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 pt-0 overflow-y-auto" style={{ maxHeight: "calc(90vh - 70px)" }}>
              {modalData?.component}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)