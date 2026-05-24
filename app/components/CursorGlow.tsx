"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"

export default function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Use spring for smoother, lag-free cursor tracking
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Add passive listener for better performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Create a template string for the background style that updates without React re-renders
  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(34, 211, 238, 0.12), transparent 40%)`

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  )
}
