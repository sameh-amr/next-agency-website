import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-2 sm:py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-0 sm:mb-8 lg:mb-12">
          <div>
            <div className="mb-4 bg-white/10 inline-block p-4 rounded-lg">
              <Image
                src="/molich-media-logo-new.png"
                alt="Molich Media"
                width={100}
                height={100}
                className="w-[80px] h-auto"
              />
            </div>
            <p className="text-slate-400 mb-4 text-sm">
              An international agency with experience across Europe, providing comprehensive digital solutions.
            </p>
            <div className="flex gap-4"></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Traffic Growth
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Website Building
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                <Link
                  href="mailto:contact@molichmedia.com"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  contact@molichmedia.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                <Link href="tel:+4500000000" className="text-slate-400 hover:text-white transition-colors text-sm">
                  +45 49 40 50 24
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-slate-400 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-slate-400 text-sm">Copenhagen, Denmark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-1 sm:pt-2 flex justify-center sm:justify-between items-center">
          <div className="hidden sm:block"></div>
          <div className="text-slate-400 text-[10px] sm:text-xs">© {new Date().getFullYear()} Molich Media</div>
        </div>
      </div>
    </footer>
  )
}
