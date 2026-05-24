"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Lock body scroll while loading
        document.body.style.overflow = "hidden"
        
        let currentProgress = 0
        const interval = setInterval(() => {
            // Random increment between 2 and 15
            currentProgress += Math.floor(Math.random() * 15) + 2
            
            if (currentProgress >= 100) {
                currentProgress = 100
                clearInterval(interval)
                
                // Add a small delay at 100% before revealing
                setTimeout(() => {
                    setIsLoading(false)
                    // Unlock body scroll
                    document.body.style.overflow = ""
                }, 600)
            }
            
            setProgress(currentProgress)
        }, 80) // update every 80ms

        return () => {
            clearInterval(interval)
            document.body.style.overflow = ""
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black pointer-events-auto"
                >
                    {/* TOP HALF DOOR (Optional split effect) */}
                    <motion.div 
                        initial={{ y: 0 }}
                        exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-zinc-950 border-b border-white/5"
                    />
                    
                    {/* BOTTOM HALF DOOR */}
                    <motion.div 
                        initial={{ y: 0 }}
                        exit={{ y: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                        className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-950 border-t border-white/5"
                    />

                    {/* CONTENT */}
                    <motion.div 
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
                        className="relative z-10 flex flex-col items-center gap-6"
                    >
                        <div className="text-cyan-400 font-mono text-sm tracking-[0.4em] animate-pulse">
                            [ SYSTEM INITIATION ]
                        </div>
                        
                        <div className="text-6xl md:text-8xl font-black text-white tracking-tighter tabular-nums">
                            {progress}%
                        </div>

                        {/* LOADING BAR */}
                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                            <motion.div 
                                className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>
                    </motion.div>

                    {/* BACKGROUND GLOW */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

                </motion.div>
            )}
        </AnimatePresence>
    )
}
