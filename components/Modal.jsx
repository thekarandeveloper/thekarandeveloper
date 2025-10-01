"use client"

import { useModal } from "../context/ModalContext"
import { X } from "lucide-react"

export default function Modal() {
  const { isOpen, content, closeModal } = useModal()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X />
        </button>

        {/* Dynamic Content */}
        <div>{content}</div>
      </div>
    </div>
  )
}