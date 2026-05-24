"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ReactNode, MouseEvent } from "react"

const BENTO_CARDS = [
  {
    title: "AI Automation System",
    description: "Implementasi teknologi masa depan dengan orkestrasi alur kerja tanpa batas untuk efisiensi maksimal.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-cyan-950/40 to-black",
    delay: 0.1,
    icon: "🤖",
  },
  {
    title: "Premium Workspace",
    description: "Ekosistem digital yang dirancang untuk produktivitas kelas enterprise.",
    className: "md:col-span-1 md:row-span-1 bg-black/40",
    delay: 0.2,
    icon: "💻",
  },
  {
    title: "Cloud Infrastructure",
    description: "Keamanan tingkat tinggi dan skalabilitas tak terbatas.",
    className: "md:col-span-1 md:row-span-1 bg-black/40",
    delay: 0.3,
    icon: "☁️",
  },
  {
    title: "Instant Delivery",
    description: "Sistem distribusi cerdas untuk aset digital secara real-time di seluruh ekosistem.",
    className: "md:col-span-3 md:row-span-1 bg-gradient-to-r from-black via-purple-900/20 to-black",
    delay: 0.4,
    icon: "⚡",
  },
]

function GlowCard({ card }: { card: typeof BENTO_CARDS[0] }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: card.delay }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 backdrop-blur-xl p-8 transition-all hover:border-cyan-500/30 ${card.className}`}
    >
      {/* GLOW TRACING SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="text-4xl filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          {card.icon}
        </div>
        
        <div>
          <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {card.title}
          </h3>
          <p className="text-zinc-400 font-medium leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function BentoGrid() {
  return (
    <section id="features" className="relative z-20 bg-black px-6 py-32">
      <div className="mx-auto max-w-6xl">
        
        {/* HEADER */}
        <div className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Ecosystem Core
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black md:text-6xl text-white"
          >
            Next Generation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Infrastructure</span>
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[250px]">
          {BENTO_CARDS.map((card, idx) => (
            <GlowCard key={idx} card={card} />
          ))}
        </div>

      </div>
    </section>
  )
}
