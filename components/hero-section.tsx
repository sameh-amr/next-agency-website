"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedTechBackground from "./animated-tech-background"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation variants with reduced complexity for mobile
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  // Reduce the animation complexity in itemVariants
  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 5 : 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 80,
        damping: 10,
        duration: prefersReducedMotion ? 0.2 : undefined,
      },
    },
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: prefersReducedMotion
      ? { scale: 1, opacity: 0.5 }
      : {
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          },
        },
  }

  const slowPulseVariants = {
    initial: { scale: 1, opacity: 0.3 },
    animate: prefersReducedMotion
      ? { scale: 1, opacity: 0.3 }
      : {
          scale: [1, 1.03, 1],
          opacity: [0.3, 0.5, 0.3],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
            delay: 0.5,
          },
        },
  }

  // 3D rotation animation for the logo container
  const rotate3dVariants = {
    initial: {
      rotateX: 0,
      rotateY: 0,
      z: 0,
    },
    animate: prefersReducedMotion
      ? { rotateX: 0, rotateY: 0, z: 0 }
      : {
          rotateX: [0, 5, 0, -5, 0],
          rotateY: [0, -5, 0, 5, 0],
          z: [0, 10, 0, 10, 0],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          },
        },
  }

  return (
    <section
      className="relative py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden no-scrollbar bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medical-background-featuring-light-blue-gradient-transparent-medical-icons-subtle-medical-background-featuring-324154524-KBsQrBhF2X24BPoz9RBGJTmQv8noiV.webp)",
      }}
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d4b5e]/80 to-[#2d4b5e]/60 backdrop-blur-sm"></div>

      {/* Animated background overlay */}
      <AnimatedTechBackground />

      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 overflow-visible relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <motion.div
            className="flex-1 max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
            >
              Your <span className="text-white">In-house Partner</span> for Digital Success
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6">
              We combine strategic thinking with technical expertise to deliver exceptional digital solutions that drive
              growth for your business.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                whileTap={{ scale: prefersReducedMotion ? 0.98 : 0.97 }}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#2d4b5e] px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium transition-colors text-sm sm:text-base group w-full sm:w-auto"
                >
                  <span>Explore our services</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                whileTap={{ scale: prefersReducedMotion ? 0.98 : 0.97 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-[#2d4b5e] px-4 sm:px-5 py-2 sm:py-2.5 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto lg:max-w-none perspective-[1000px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* 3D container with perspective */}
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-square transform-style-3d"
              variants={rotate3dVariants}
              initial="initial"
              animate="animate"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                style={{ transform: "translateZ(0px)" }}
              ></motion.div>

              <motion.div
                className="absolute inset-4 bg-white/15 rounded-full"
                variants={slowPulseVariants}
                initial="initial"
                animate="animate"
                style={{ transform: "translateZ(5px)" }}
              ></motion.div>

              <motion.div
                className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center p-0 border-none"
                animate={isHovering && !prefersReducedMotion ? { y: -5 } : { y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transform: "translateZ(10px)" }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Single centered logo with entry animation and focus effect */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      delay: 0.2,
                      duration: 0.6,
                    }}
                    style={{ transform: "translateZ(20px)" }}
                    className="relative"
                  >
                    <Image
                      src="/molich-media-transparent-removebg-preview.png"
                      alt="Molich Media"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-full bg-white border-none shadow-none"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* 3D shadow effect */}
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-md"
                style={{
                  background: "radial-gradient(circle at center, rgba(45, 75, 94, 0.4) 0%, rgba(45, 75, 94, 0) 70%)",
                  transform: "translateZ(-10px) translateY(20px)",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
