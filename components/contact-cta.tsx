"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-slate-50/80 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#2d4b5e] to-[#3a5d72] rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            Let's collaborate to bring your vision to life. As your in-house partner, we're committed to your success.
          </p>
          <Link
            href="mailto:contact@molichmedia.com"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#2d4b5e] px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base"
          >
            <span>Contact us today</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
