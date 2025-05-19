"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import OverviewSection from "@/components/overview-section"
import ContactSection from "@/components/contact-section"
import ContactCTA from "@/components/contact-cta"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")

      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll as EventListener)
      })
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Logo Section - Left Aligned */}
          <Link href="/" className="flex items-center shrink-0"> {/* shrink-0 prevents logo from shrinking */}
            <Image
              src="/inhouse-partners-logo.png"
              alt="Inhouse-Partners"
              width={70} // reduced from 100
              height={18} // reduced from 26
              className="h-auto w-auto max-h-4 sm:max-h-5 md:max-h-6" // reduced max heights
              priority
            />
          </Link>

          {/* Navigation Section - Centered */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-grow justify-center"> {/* flex-grow allows it to take available space, justify-center keeps links centered */}
            <Link
              href="#overview"
              className="text-slate-700 hover:text-[#2d4b5e] text-sm font-medium transition-colors"
            >
              Overview
            </Link>
            <Link
              href="#services"
              className="text-slate-700 hover:text-[#2d4b5e] text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link href="#about" className="text-slate-700 hover:text-[#2d4b5e] text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="#work" className="text-slate-700 hover:text-[#2d4b5e] text-sm font-medium transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-slate-700 hover:text-[#2d4b5e] text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Button Section - Right Aligned */}
          <div className="flex items-center shrink-0"> {/* shrink-0 prevents button from shrinking */}
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#2d4b5e] hover:bg-[#1d3a4d] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Overview Section */}
      <OverviewSection />

      {/* Services Section */}
      {/* Add your ServicesSection component here */}

      {/* About Section */}
      {/* Add your AboutSection component here */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}