"use client"

import { useEffect, useRef } from "react"

// Define colors
const colors = [
  "rgba(156, 91, 255, 0.6)", // Primary purple
  "rgba(156, 91, 255, 0.4)",
  "rgba(156, 91, 255, 0.2)",
  "rgba(255, 255, 255, 0.3)",
  "rgba(255, 255, 255, 0.2)",
]

// Digital element types
const ELEMENT_TYPES = {
  CIRCLE: "circle",
  SQUARE: "square",
  TRIANGLE: "triangle",
  CODE: "code",
}

// Code snippets
const codeSnippets = [
  "<div>",
  "</div>",
  "<span>",
  "function()",
  "const data",
  "return",
  "=>",
  "{}",
  "[]",
  ".map()",
  "async",
  "await",
]

// Define the DigitalElement class outside the useEffect
class DigitalElement {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  type: string
  rotation: number
  rotationSpeed: number
  opacity: number
  text?: string

  constructor() {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 20 + 5
    this.color = colors[Math.floor(Math.random() * colors.length)]

    // Randomly select element type
    const types = Object.values(ELEMENT_TYPES)
    this.type = types[Math.floor(Math.random() * types.length)]

    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.02
    this.opacity = Math.random() * 0.5 + 0.1

    // For code elements, assign a random code snippet
    if (this.type === ELEMENT_TYPES.CODE) {
      this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      this.size = 12 // Font size for code
    }
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.vx
    this.y += this.vy
    this.rotation += this.rotationSpeed

    // Bounce off edges with some padding
    const padding = 50
    if (this.x < -padding || this.x > window.innerWidth + padding) this.vx *= -1
    if (this.y < -padding || this.y > window.innerHeight + padding) this.vy *= -1

    // Randomly change direction occasionally
    if (Math.random() < 0.005) {
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)

    switch (this.type) {
      case ELEMENT_TYPES.CIRCLE:
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        break

      case ELEMENT_TYPES.SQUARE:
        ctx.fillStyle = this.color
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
        break

      case ELEMENT_TYPES.TRIANGLE:
        ctx.beginPath()
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.lineTo(this.size / 2, this.size / 2)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
        break

      case ELEMENT_TYPES.CODE:
        if (this.text) {
          ctx.font = `${this.size}px "Fira Code", monospace`
          ctx.fillStyle = this.color
          ctx.fillText(this.text, 0, 0)
        }
        break
    }

    ctx.restore()
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize digital elements array
    const digitalElements: DigitalElement[] = []

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      // Get the actual viewport dimensions
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Set canvas dimensions
      canvas.width = viewportWidth
      canvas.height = viewportHeight

      // Set the scale to handle high DPI displays
      const dpr = window.devicePixelRatio || 1
      canvas.width = viewportWidth * dpr
      canvas.height = viewportHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${viewportWidth}px`
      canvas.style.height = `${viewportHeight}px`

      // Adjust element count based on screen size
      const newElementCount = Math.min(
        Math.floor(viewportWidth / (viewportWidth < 768 ? 40 : 20)),
        viewportWidth < 768 ? 25 : 50,
      )

      // If we need to adjust the elements array
      if (digitalElements.length > newElementCount) {
        digitalElements.splice(newElementCount)
      } else if (digitalElements.length < newElementCount) {
        for (let i = digitalElements.length; i < newElementCount; i++) {
          digitalElements.push(new DigitalElement())
        }
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#1a1333")
      gradient.addColorStop(1, "#0f0a1e")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Update and draw digital elements
      digitalElements.forEach((element) => {
        element.update(ctx)
        element.draw(ctx)
      })

      // Draw connecting lines between nearby elements
      for (let i = 0; i < digitalElements.length; i++) {
        for (let j = i + 1; j < digitalElements.length; j++) {
          const dx = digitalElements[i].x - digitalElements[j].x
          const dy = digitalElements[i].y - digitalElements[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(digitalElements[i].x, digitalElements[i].y)
            ctx.lineTo(digitalElements[j].x, digitalElements[j].y)
            const opacity = 0.15 * (1 - distance / 150)
            ctx.strokeStyle = `rgba(156, 91, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
}
