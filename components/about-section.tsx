"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Globe } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-[#2d4b5e] text-white relative z-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-16">
          <motion.div
            className="flex-1 w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-tl-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-br-2xl"></div>
              <div className="relative bg-white/10 shadow-lg rounded-lg p-4 sm:p-6 z-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/molich-media-logo-new.png"
                      alt="Molich Media"
                      width={120}
                      height={120}
                      className="w-full h-auto max-w-[80px] sm:max-w-[120px]"
                    />
                  </div>
                  <div className="aspect-square bg-white/20 rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/inhouse-partners-logo.png"
                      alt="Inhouse-Partners"
                      width={140}
                      height={30}
                      className="w-full h-auto max-w-[100px] sm:max-w-[140px]"
                    />
                  </div>
                  <div className="col-span-2 aspect-[2/1] bg-white/20 rounded-md flex items-center justify-center p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Globe className="text-white" size={24} />
                      <div className="text-base sm:text-xl font-semibold text-white">International Presence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            >
              About <span className="text-white/90">Molich Media</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-white/80 mb-4 sm:mb-6">
              Molich Media is an international agency with extensive experience across Europe. We operate under the
              brand Inhouse-Partners, positioning ourselves as your dedicated in-house partner for all digital needs.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white/80 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/80 text-sm sm:text-base text-slate-700">
                  Experienced team with international expertisef
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white/80 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/80 text-sm sm:text-base text-slate-700">
                  Comprehensive digital solutions under one roof
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white/80 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/80 text-sm sm:text-base text-slate-700">
                  Client-focused approach with personalized strategies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-white/80 mt-1 flex-shrink-0" size={18} />
                <p className="text-white/80 text-sm sm:text-base text-slate-700">
                  Proven track record of successful projects
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="inline-block bg-white/10 px-3 sm:px-4 py-2 rounded-md">
                <p className="text-sm sm:text-base text-white font-medium">
                  Your business deserves a partner, not just a service provider.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
