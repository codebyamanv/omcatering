'use client'

import { MessageCircle } from 'lucide-react'
import { companyInfo } from '@/lib/data'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${companyInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />

      {/* Pulse ring animation */}
      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.a>
  )
}
