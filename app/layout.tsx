import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Molich Media | Inhouse-Partners",
  description:
    "Your in-house partner for lead generation, traffic, branding, e-commerce, website building, and content creation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable} style={{ scrollBehavior: "smooth" }}>
      <head>
        <title>Inhouse Partners</title>
        <link rel="icon" href="/molich-media-transparent-removebg-preview.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#2d4b5e" />
        <style>{`
      .container {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      @media (min-width: 640px) {
        .container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
      @media (min-width: 1024px) {
        .container {
          padding-left: 4rem;
          padding-right: 4rem;
        }
      }
      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }
    `}</style>
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
