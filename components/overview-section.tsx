"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ArrowRight, Award, Target, Zap, BarChart3, Globe, LineChart } from "lucide-react"

export default function OverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.05 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 10 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 50,
        damping: 10,
        duration: prefersReducedMotion ? 0.3 : undefined,
      },
    },
  }

  const statVariants = {
    hidden: { scale: prefersReducedMotion ? 0.95 : 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: prefersReducedMotion ? "tween" : "spring",
        stiffness: 50,
        damping: 10,
        duration: prefersReducedMotion ? 0.3 : undefined,
      },
    },
  }

  return (
    <section
      id="overview"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#2d4b5e] text-white overflow-hidden no-scrollbar"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 10 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          >
            Who are we?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 10 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6"
          >
            Molich Media is a Danish digital agency with international experience. Operating under the Inhouse-Partners
            brand, we act as your dedicated in-house partner. We specialize in lead generation, software development,
            data-driven analysis, and traffic growth. Through close collaboration and strategic execution, we drive
            measurable results and integrate seamlessly with your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 10 : 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8"
          >
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full">
              <Award size={14} className="mr-2 text-white/80" />
              <span className="text-xs sm:text-sm font-medium">Award-winning agency</span>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full">
              <Target size={14} className="mr-2 text-white/80" />
              <span className="text-xs sm:text-sm font-medium">Results-driven approach</span>
            </div>
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-full">
              <Zap size={14} className="mr-2 text-white/80" />
              <span className="text-xs sm:text-sm font-medium">Fast turnaround times</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10"
        >
          {/* Lead Generation */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/3] mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg transform rotate-1"></div>
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-5 bg-[#162c3b] rounded-t-lg flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 pt-5 p-3 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1a3344] rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/lead-generation-analytics-mobile.png"
                      alt="Lead Generation"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded-sm"
                      style={{ maxHeight: "120px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide flex items-center whitespace-nowrap">
                <LineChart className="mr-2" size={18} />
                Lead Generation
              </h3>
            </div>
            <p className="mx-auto text-center text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 h-24 sm:h-20">
              We attract quality leads for your business through targeted, data-driven campaigns.
            </p>


          </motion.div>

          {/* Software Projects */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/3] mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg"></div>
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-5 bg-[#162c3b] rounded-t-lg flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 pt-5 p-3 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1a3344] rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="https://www.simplilearn.com/ice9/free_resources_article_thumb/IT_Engineer_Salary.jpg"
                      alt="Software Projects"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded-sm"
                      style={{ maxHeight: "120px", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[60px] h-[10px] bg-[#162c3b] rounded-b-lg"></div>
              </div>
            </div>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide flex items-center whitespace-nowrap">
                <Globe className="mr-2" size={18} />
                Software Projects
              </h3>
            </div>
            <p className="mx-auto text-center text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 h-24 sm:h-20">
              We develop custom software to streamline your operations and drive business growth.
            </p>
          </motion.div>

          {/* Data & Analysis */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/3] mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg transform -rotate-1"></div>
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-5 bg-[#162c3b] rounded-t-lg flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 pt-5 p-3 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1a3344] rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="/data-analysis.png"
                      alt="Data & Analysis"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded-sm"
                      style={{ maxHeight: "120px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide flex items-center whitespace-nowrap">
                <BarChart3 className="mr-2" size={18} />
                Data & Analysis
              </h3>
            </div>
            <p className="mx-auto text-center text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 h-24 sm:h-20">
              We turn your data into insights that help you understand customers and improve results.
            </p>


          </motion.div>

          {/* Traffic Growth */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[240px] aspect-[4/3] mb-4 sm:mb-6">
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg transform rotate-1"></div>
              <div className="absolute inset-0 bg-[#1d3a4d] rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-5 bg-[#162c3b] rounded-t-lg flex items-center px-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="absolute inset-0 pt-5 p-3 flex items-center justify-center">
                  <div className="w-full h-full bg-[#1a3344] rounded-md flex items-center justify-center p-3 sm:p-4">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tlZg32Kb2RQ0rmjF_x1yUZg7tpVAxoTKFpNuykK5tN4RMgTymhSU0_MnZElS5VOaaiI&usqp=CAU"
                      alt="Traffic Growth"
                      width={200}
                      height={150}
                      className="w-full h-full object-cover rounded-sm"
                      style={{ maxHeight: "120px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-16 sm:h-20 flex items-center justify-center">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide flex items-center whitespace-nowrap">
                <LineChart className="mr-2" size={18} />
                Traffic Growth
              </h3>
            </div>
            <p className="mx-auto text-center text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 h-24 sm:h-20">
              We grow your digital presence by increasing targeted traffic and boosting conversions.
            </p>

          </motion.div>
        </motion.div>

        {/* Why Choose Us - Simplified for mobile */}
      
      </div>
    </section>
  )
}
