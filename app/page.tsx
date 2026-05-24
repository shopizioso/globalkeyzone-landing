"use client"

import AICore from "./components/AICore"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black">

        {/* AI CORE */}
        <AICore />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* CYBER LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10 z-10" />

        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-400/20 blur-[180px] rounded-full z-10" />

        {/* NAVBAR */}
        <header className="absolute top-0 left-0 w-full z-30 backdrop-blur-xl border-b border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse" />
              <div className="text-2xl font-bold tracking-tight">
                GlobalKeyZone
              </div>
            </div>

            {/* MENU */}
            <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">
              <a href="#">Products</a>
              <a href="#">Infrastructure</a>
              <a href="#">Automation</a>
              <a href="#">Support</a>
            </nav>

            {/* BUTTON */}
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
              Get Started
            </button>

          </div>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-cyan-200 text-sm tracking-[0.2em] uppercase"
          >
            AI Digital Core Infrastructure
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-tight"
          >

            <span className="block text-white">
              Future
            </span>

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Digital
            </span>

            <span className="block text-white">
              Ecosystem
            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-2xl text-zinc-300 text-lg md:text-xl leading-relaxed"
          >
            Premium software licenses, automation systems,
            AI workspace, digital infrastructure, and
            instant delivery technology.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-10 flex flex-col md:flex-row gap-4"
          >

            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
              Explore Products
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>

          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-3 gap-10 mt-24"
          >

            <div>
              <div className="text-4xl md:text-5xl font-black">
                10K+
              </div>
              <div className="text-zinc-400 mt-2 text-sm">
                Orders Completed
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black">
                24/7
              </div>
              <div className="text-zinc-400 mt-2 text-sm">
                Automation
              </div>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-black">
                Instant
              </div>
              <div className="text-zinc-400 mt-2 text-sm">
                Delivery
              </div>
            </div>

          </motion.div>

          {/* SCROLL */}
          <div className="absolute bottom-10 flex flex-col items-center gap-3">

            <div className="text-zinc-500 text-xs tracking-[0.3em] uppercase">
              Scroll
            </div>

            <div className="w-[32px] h-[58px] rounded-full border border-white/20 flex justify-center pt-2">

              <div className="w-2 h-2 rounded-full bg-white animate-bounce" />

            </div>

          </div>

        </div>

      </section>

      {/* SECOND SECTION */}
      <section className="relative py-40 px-6 border-t border-white/10 bg-black">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <div className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              AI Infrastructure
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Automation
              <br />
              Meets
              <br />
              Intelligence
            </h2>

          </div>

          {/* RIGHT */}
          <div className="text-zinc-400 text-lg leading-relaxed">

            Build your premium digital ecosystem with futuristic
            automation, AI workspace integrations, and secure
            infrastructure designed for modern digital businesses.

          </div>

        </div>

      </section>

    </main>
  )
}
