"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
}

export default function AnimatedText({ text, className = "", once = false }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  const words = text.split(" ")

  // Update the animation timing to be faster
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.02 * i }, // Reduced from 0.12 and 0.04
    }),
  }

  // Make the spring animation lighter and faster
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 8, // Reduced from 12
        stiffness: 120, // Increased from 100
      },
    },
    hidden: {
      opacity: 0,
      y: 10, // Reduced from 20
      transition: {
        type: "spring",
        damping: 8, // Reduced from 12
        stiffness: 120, // Increased from 100
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
