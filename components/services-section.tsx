"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { ShoppingCart, Globe, Palette, FileText } from "lucide-react"

// Define services data
const services = [
  {
    title: "Branding",
    icon: Palette,
    description: [
      "We provide comprehensive branding solutions that establish a strong, memorable identity for your business. Our branding experts work closely with you to understand your vision, values, and goals, translating them into a cohesive visual and verbal identity.",
      "From logo design to brand voice development, we create all the elements needed to build a distinctive brand that resonates with your target audience and stands out in a crowded marketplace. Our strategic approach ensures your brand communicates effectively across all touchpoints.",
    ],
    features: [
      "Complete brand identity development",
      "Brand strategy and positioning",
      "Brand guidelines and asset creation",
    ],
    image: "https://cocosolution.com/cms/uploads/o_1e854e4rmgkn1igc6k5s77p9ra.jpg",
  },
  {
    title: "Content Creation",
    icon: FileText,
    description: [
      "At Molich Media, we produce interactive and engaging content that drives results. In a competitive market that's constantly evolving, we ensure a creative approach to every project. An effective content marketing strategy plays to multiple strengths.",
      "Our content creation services are designed to tell your brand story in a compelling way that resonates with your audience and drives engagement. We create content that not only attracts attention but also converts visitors into customers and builds lasting relationships.",
    ],
    features: [
      "Social media content creation and management",
      "Blog articles and long-form content",
      "Video and interactive content production",
    ],
    image:
      "https://www.adobe.com/express/learn/blog/media_1133fb79adfb961be8d74e0144d5f58428c87aa36.png?width=1200&format=pjpg&optimize=medium",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: [
      "We deliver end-to-end e-commerce solutions that drive conversions and enhance customer experience. Our e-commerce experts understand what it takes to create online stores that not only look great but also convert visitors into customers.",
      "From platform selection and setup to optimization and growth strategies, we provide comprehensive e-commerce services that help you maximize sales and build customer loyalty in the competitive online marketplace. We focus on creating seamless shopping experiences that keep customers coming back.",
    ],
    features: [
      "E-commerce platform development and optimization",
      "Shopping cart and checkout optimization",
      "Product catalog management and merchandising",
    ],
    image: "https://banks.com.gr/wp-content/uploads/2019/03/e-commerce-600px-600px.jpg",
  },
  {
    title: "Website Building",
    icon: Globe,
    description: [
      "We create custom, responsive websites designed to engage visitors and achieve your business goals. Our web development team combines technical expertise with creative design to build websites that not only look stunning but also perform exceptionally well.",
      "From simple landing pages to complex web applications, we develop digital experiences that represent your brand effectively and provide seamless user experiences across all devices and platforms. Our websites are built with scalability, security, and performance in mind.",
    ],
    features: [
      "Custom website design and development",
      "Responsive and mobile-friendly implementation",
      "CMS integration and website maintenance",
    ],
    image: "/website-tablet.png",
  },
]

export default function ServicesSection() {
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

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white text-slate-800 relative z-10">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">Our Services</h2>
          <p className="text-base sm:text-lg text-slate-600">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16 sm:space-y-20 md:space-y-24"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                {/* Content Section - Order changes based on index */}
                <div className={`w-full md:w-1/2 ${!isEven ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#2d4b5e]/10 p-2 rounded-md">
                      <Icon className="text-[#2d4b5e] w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">{service.title}</h3>
                  </div>

                  <div className="min-h-[180px] sm:min-h-[160px] md:min-h-[140px]">
                    {service.description.map((paragraph, i) => (
                      <p key={i} className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#2d4b5e]/10 p-1 rounded-full mt-1 mr-3">
                          <div className="w-1.5 h-1.5 bg-[#2d4b5e] rounded-full"></div>
                        </div>
                        <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Section - Order changes based on index */}
                <div className={`w-full md:w-1/2 ${!isEven ? "md:order-1" : ""} flex justify-center`}>
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-[4/3]">
                    <div className="absolute inset-0 bg-[#f5f7fa] rounded-xl overflow-hidden shadow-lg border border-slate-200">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
