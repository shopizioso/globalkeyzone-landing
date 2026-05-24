"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      {/* GLOWING BACKGROUND (GLASSMORPHISM) */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md border-b border-white/10 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] -z-10" />

      {/* LOGO */}
      <Link href="/" className="relative flex items-center gap-3 group">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-500/30 bg-black/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-shadow duration-500"
        >
          {/* If the image is square or transparent, this will look great rotating */}
          <Image
            src="/GKZ.png"
            alt="GKZ Logo"
            fill
            className="object-cover p-1"
          />
        </motion.div>
        
        <div className="hidden md:block">
            <span className="text-xl font-bold tracking-widest text-white">
            GLOBAL
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">KEY</span>
            ZONE
            </span>
        </div>
      </Link>

      {/* NAV LINKS */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        {["Features", "Ecosystem", "Pricing", "About"].map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* CTA BUTTON */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition">
          Sign In
        </button>
        <button className="relative overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 group">
          <span className="relative z-10">Get Started</span>
          {/* HOVER SWIPE EFFECT */}
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
          <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-300 -z-0"></div>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
        </button>
      </div>

    </motion.header>
  )
}
