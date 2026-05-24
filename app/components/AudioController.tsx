"use client"

import { useEffect, useRef, useState } from "react"

export default function AudioController() {
    const audioCtxRef = useRef<AudioContext | null>(null)
    const [hasInteracted, setHasInteracted] = useState(false)

    useEffect(() => {
        const initAudio = () => {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
            }
            if (audioCtxRef.current.state === "suspended") {
                audioCtxRef.current.resume()
            }
            setHasInteracted(true)
        }

        const playHoverSound = () => {
            if (!audioCtxRef.current || !hasInteracted) return
            const ctx = audioCtxRef.current
            
            // Create a short, high-tech 'blip' sound using Web Audio API
            const osc = ctx.createOscillator()
            const gainNode = ctx.createGain()
            
            osc.type = "sine"
            osc.frequency.setValueAtTime(800, ctx.currentTime) // Start high
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1) // Drop fast
            
            gainNode.gain.setValueAtTime(0.05, ctx.currentTime) // Very quiet
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
            
            osc.connect(gainNode)
            gainNode.connect(ctx.destination)
            
            osc.start()
            osc.stop(ctx.currentTime + 0.1)
        }

        // Add event listeners to all buttons and links for the hover sound
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest("button") || target.closest("a") || target.closest(".group")) {
                playHoverSound()
            }
        }

        window.addEventListener("click", initAudio, { once: true })
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("click", initAudio)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [hasInteracted])

    return null // Invisible global audio controller
}
