"use client"

import { Phone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <motion.a
        href="tel:05322367539"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  )
}

export function FloatingWhatsappButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <motion.a
        href="https://wa.me/905322367539"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.a>
    </div>
  )
}
