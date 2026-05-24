"use client"

import { motion } from "framer-motion"

const TECHNOLOGIES = [
  "ARTIFICIAL INTELLIGENCE",
  "MACHINE LEARNING",
  "NEURAL NETWORKS",
  "AUTOMATION",
  "CLOUD COMPUTING",
  "CYBER SECURITY",
  "DATA ANALYTICS",
  "BLOCKCHAIN",
]

export default function LogoTicker() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center border-y border-white/5 bg-black py-10 overflow-hidden z-10">
      
      {/* GRADIENT MASKS FOR FADE EFFECT */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex w-[200%] md:w-[150%] lg:w-[120%] overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-none items-center gap-16 pr-16"
        >
          {/* WE RENDER THE LIST TWICE FOR SEAMLESS LOOPING */}
          {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-zinc-500 font-medium tracking-[0.2em] uppercase whitespace-nowrap"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-500/50" />
              <span className="hover:text-cyan-400 hover:text-shadow-[0_0_10px_#22d3ee] transition-all duration-300 cursor-default">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}
