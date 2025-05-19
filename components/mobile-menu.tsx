"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

// Define menu items
const menuItems = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
]

export default function MobileMenu() {
  // State to track menu open/closed
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Handle menu item click
  const handleMenuItemClick = (href: string) => {
    // Close the menu
    setMenuOpen(false)

    // Scroll to the section
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 0 // Remove any offset
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  // Control body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className="md:hidden">
      {/* Burger Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2d4b5e]"
        aria-expanded={menuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <Menu className="block h-6 w-6" aria-hidden="true" />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center justify-between p-4 border-b">
            <div>
              <Image
                src="/molich-media-logo-new.png"
                alt="Molich Media"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2d4b5e]"
            >
              <span className="sr-only">Close menu</span>
              <X className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="px-4 pt-6 pb-8 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                className="block w-full text-left px-3 py-3 rounded-md text-lg font-medium text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2d4b5e]"
                onClick={() => handleMenuItemClick(item.href)}
              >
                {item.label}
              </button>
            ))}

            {/* CTA Button */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              <button
                className="w-full bg-[#2d4b5e] hover:bg-[#1d3a4d] text-white py-3 px-4 rounded-md font-medium transition-colors"
                onClick={() => handleMenuItemClick("#contact")}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
