"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import AICore from "./AICore"

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    // Total height increased to 600vh to give each slide plenty of reading time
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // --- PHASE 0: LOGO SPIN & FADE (0.00 - 0.10) ---
    // Instead of zoom in, the logo spins 720 degrees and shrinks into the core
    const logoRotate = useTransform(scrollYProgress, [0, 0.10], [0, 720])
    const logoScale = useTransform(scrollYProgress, [0, 0.10], [1, 0])
    const logoOpacity = useTransform(scrollYProgress, [0.05, 0.10], [1, 0])
    
    // Core Background (0.05 - 0.15)
    const coreOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1])

    // --- PHASE 1: SLIDE 1 (0.10 - 0.40) ---
    const s1Opacity = useTransform(scrollYProgress, [0.10, 0.15, 0.35, 0.40], [0, 1, 1, 0])
    const s1Scale = useTransform(scrollYProgress, [0.10, 0.40], [0.95, 1.05])

    // --- PHASE 2: SLIDE 2 (0.35 - 0.65) ---
    const s2Opacity = useTransform(scrollYProgress, [0.35, 0.40, 0.60, 0.65], [0, 1, 1, 0])
    const s2Scale = useTransform(scrollYProgress, [0.35, 0.65], [0.95, 1.05])

    // --- PHASE 3: SLIDE 3 (0.60 - 0.90) ---
    const s3Opacity = useTransform(scrollYProgress, [0.60, 0.65, 0.85, 0.90], [0, 1, 1, 0])
    const s3Scale = useTransform(scrollYProgress, [0.60, 0.90], [0.95, 1.05])

    // --- PHASE 4: FINAL CTA (0.90 - 1.00) ---
    const s4Opacity = useTransform(scrollYProgress, [0.90, 0.95], [0, 1])

    // Add pointer events logic to prevent unclickable buttons
    const pointerEventsS4 = useTransform(scrollYProgress, (p) => p > 0.95 ? "auto" : "none")

    return (
        <section ref={containerRef} className="relative h-[600vh] bg-black">
            {/* FIXED CONTAINER - Ensures it never scrolls away un-intentionally */}
            <div className="fixed top-0 left-0 h-screen w-full overflow-hidden">

                {/* --- FRONT LAYER: LOGO SPIN --- */}
                <motion.div
                    style={{ scale: logoScale, opacity: logoOpacity, rotate: logoRotate }}
                    className="absolute inset-0 z-[20] flex items-center justify-center pointer-events-none will-change-transform"
                >
                    <div className="relative h-48 w-48 md:h-64 md:w-64">
                        <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.3),transparent_70%)] animate-pulse rounded-full will-change-transform" />
                        <Image src="/GKZ.png" alt="GKZ Logo" fill className="object-contain" priority />
                    </div>
                </motion.div>

                {/* --- BACKGROUND LAYER --- */}
                <motion.div
                    style={{ opacity: coreOpacity }}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center will-change-opacity"
                >
                    <div className="absolute inset-0 z-[1]"><AICore /></div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] z-[2] opacity-80" />
                    <div className="absolute inset-0 opacity-[0.03] z-[3] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                </motion.div>

                {/* --- PRESENTATION SLIDES LAYER --- */}
                {/* SLIDE 1: WELCOME */}
                <motion.div 
                    style={{ opacity: s1Opacity, scale: s1Scale }}
                    className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-center pointer-events-none z-[10] px-6 will-change-transform"
                >
                    <div className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-black/40 px-6 py-2 backdrop-blur-xl text-xs font-bold tracking-[0.3em] text-cyan-200 uppercase">
                        Phase 01
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 tracking-tighter drop-shadow-2xl">
                        Welcome to <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GlobalKeyZone</span>
                    </h2>
                    <p className="max-w-2xl text-lg md:text-2xl text-zinc-300 drop-shadow-lg leading-relaxed">
                        Pusat ekosistem digital premium. Kami merancang infrastruktur kelas dunia untuk kebutuhan perangkat lunak dan bisnis modern Anda.
                    </p>
                </motion.div>

                {/* SLIDE 2: AI AUTOMATION */}
                <motion.div 
                    style={{ opacity: s2Opacity, scale: s2Scale }}
                    className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-center pointer-events-none z-[10] px-6 will-change-transform"
                >
                    <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-black/40 px-6 py-2 backdrop-blur-xl text-xs font-bold tracking-[0.3em] text-blue-200 uppercase">
                        Phase 02
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 tracking-tighter drop-shadow-2xl">
                        AI Automation & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Premium Workspace</span>
                    </h2>
                    <p className="max-w-2xl text-lg md:text-2xl text-zinc-300 drop-shadow-lg leading-relaxed">
                        Tingkatkan efisiensi dengan sistem otomatisasi masa depan. Lingkungan kerja digital tanpa hambatan dengan keamanan tingkat enterprise.
                    </p>
                </motion.div>

                {/* SLIDE 3: CLOUD DELIVERY */}
                <motion.div 
                    style={{ opacity: s3Opacity, scale: s3Scale }}
                    className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-center pointer-events-none z-[10] px-6 will-change-transform"
                >
                    <div className="mb-6 inline-flex rounded-full border border-purple-500/20 bg-black/40 px-6 py-2 backdrop-blur-xl text-xs font-bold tracking-[0.3em] text-purple-200 uppercase">
                        Phase 03
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 tracking-tighter drop-shadow-2xl">
                        Instant <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Cloud Delivery</span>
                    </h2>
                    <p className="max-w-2xl text-lg md:text-2xl text-zinc-300 drop-shadow-lg leading-relaxed">
                        Distribusi aset digital secara real-time. Skalabilitas tanpa batas untuk mendukung pertumbuhan ekosistem Anda.
                    </p>
                </motion.div>

                {/* SLIDE 4: FINAL CTA & FOOTER */}
                <motion.div 
                    style={{ opacity: s4Opacity, pointerEvents: pointerEventsS4 as any }}
                    className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-center z-[10] px-6 will-change-transform"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter drop-shadow-2xl">
                        Ready to Initiate?
                    </h2>
                    <button className="group relative overflow-hidden rounded-full bg-white px-12 py-5 font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        <span className="relative z-10">Access The Core</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-300" />
                        <span className="absolute inset-0 z-10 flex items-center justify-center text-transparent group-hover:text-white transition-colors duration-300 pointer-events-none">Access The Core</span>
                    </button>
                    
                    <div className="mt-32 pt-10 border-t border-white/10 w-full max-w-4xl text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} GlobalKeyZone. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
                        </div>
                    </div>
                </motion.div>

                {/* SCROLL INDICATOR */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="h-12 w-7 rounded-full border-2 border-white/20 p-1 flex justify-center backdrop-blur-md"
                    >
                        <div className="h-2 w-1.5 rounded-full bg-cyan-400 mt-1 shadow-[0_0_10px_#22d3ee]" />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}