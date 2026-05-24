"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />

      </div>

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-10"
        >

          {/* AI CORE */}
          <div className="relative mx-auto mb-10 h-48 w-48">

            <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400 blur-3xl opacity-40" />

            <div className="absolute inset-6 rounded-full border border-cyan-300/30" />

            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin" />

            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_80px_#38bdf8]" />

          </div>

        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-4xl text-6xl font-black leading-none md:text-8xl"
        >
          Future
          <br />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Digital
          </span>

          <br />
          Ecosystem
        </motion.h1>

        {/* DESC */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-2xl text-zinc-400 text-lg leading-relaxed"
        >
          Premium software licenses, AI automation systems,
          futuristic digital infrastructure, and instant delivery
          technology.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4"
        >

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Explore
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10">
            Learn More
          </button>

        </motion.div>

      </section>

      {/* SECOND SECTION */}
      <section className="relative z-10 px-6 py-40">

        <div className="mx-auto max-w-6xl">

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="grid gap-10 md:grid-cols-3"
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold">
                AI Automation
              </h3>

              <p className="text-zinc-400">
                Intelligent systems with futuristic workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Digital Products
              </h3>

              <p className="text-zinc-400">
                Premium workspace ecosystem and cloud tools.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-2xl font-bold">
                Instant Delivery
              </h3>

              <p className="text-zinc-400">
                Real-time automation and scalable infrastructure.
              </p>
            </div>

          </motion.div>

        </div>

      </section>

    </main>
  )
}
