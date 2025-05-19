"use client"

import { useEffect } from "react"
import "../styles/cloud-animation.css"

export default function CloudBackground() {
  useEffect(() => {
    // This is just to ensure the component is mounted client-side
  }, [])

  return (
    <div id="clouds-container">
      <div id="clouds">
        <div className="cloud foreground"></div>
        <div className="cloud background"></div>
        <div className="cloud foreground"></div>
        <div className="cloud background"></div>
        <div className="cloud foreground"></div>
        <div className="cloud background"></div>
        <div className="cloud background"></div>
        <div className="cloud foreground"></div>
        <div className="cloud background"></div>
        <div className="cloud background"></div>
      </div>
    </div>
  )
}
