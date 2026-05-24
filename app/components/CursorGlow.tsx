"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"

export default function CursorGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    
    // Physics spring for the glowing background (slow, laggy feel)
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
    
    // Physics spring for the cursor ring (fast, precise feel)
    const ringX = useSpring(mouseX, { stiffness: 400, damping: 25 })
    const ringY = useSpring(mouseY, { stiffness: 400, damping: 25 })

    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        // Hide default cursor globally
        document.body.style.cursor = "none"

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            
            // Detect if hovering over a clickable element
            const target = e.target as HTMLElement
            if (target.closest("button") || target.closest("a")) {
                setIsHovered(true)
            } else {
                setIsHovered(false)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.body.style.cursor = "auto"
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [mouseX, mouseY])

    const glowTransform = useMotionTemplate`translate(${springX}px, ${springY}px)`
    const ringTransform = useMotionTemplate`translate(${ringX}px, ${ringY}px)`
    // Use raw values for the inner dot so it has ZERO delay
    const rawTransform = useMotionTemplate`translate(${mouseX}px, ${mouseY}px)`

    return (
        <>
            {/* 1. BACKGROUND GLOW (Follows slowly) */}
            <motion.div
                style={{ transform: glowTransform }}
                className="fixed top-0 left-0 -ml-[400px] -mt-[400px] h-[800px] w-[800px] pointer-events-none z-[0]"
            >
                {/* Replaced heavy blur-[150px] with a high-performance radial gradient to fix GPU lag */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)] rounded-full" />
            </motion.div>

            {/* 2. OUTER RING CURSOR (Expands on hover) */}
            <motion.div
                style={{ transform: ringTransform }}
                animate={{ 
                    width: isHovered ? 60 : 30, 
                    height: isHovered ? 60 : 30,
                    marginLeft: isHovered ? -30 : -15,
                    marginTop: isHovered ? -30 : -15,
                    borderColor: isHovered ? "rgba(34,211,238,0.8)" : "rgba(255,255,255,0.3)",
                    backgroundColor: isHovered ? "rgba(34,211,238,0.1)" : "transparent"
                }}
                className="fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[99999] transition-colors duration-300"
            />

            {/* 3. INNER SHARP DOT (Pixel perfect center, ZERO DELAY) */}
            <motion.div
                style={{ transform: rawTransform }}
                className="fixed top-0 left-0 -ml-[3px] -mt-[3px] h-[6px] w-[6px] bg-white rounded-full pointer-events-none z-[99999]"
            />
        </>
    )
}
