"use client"
import { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modalContent, setModalContent] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (content) => {
    setModalContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setModalContent(null)
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalContent, isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)