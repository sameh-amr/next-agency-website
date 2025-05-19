"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="mt-4 sm:mt-0"
    >
      <Link
        href="#services"
        className="flex flex-col items-center text-white/70 hover:text-white transition-colors py-2"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="mb-1 sm:mb-2 text-xs sm:text-sm uppercase tracking-wider">LÆR MERE</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-white/70"
        >
          <ChevronDown size={20} />
        </motion.div>
      </Link>
    </motion.div>
  )
}
