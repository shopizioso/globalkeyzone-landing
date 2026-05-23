'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[150px]"
        />

      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            GlobalKeyZone
          </h1>

          <nav className="hidden md:flex gap-8 text-white/60">
            <a href="#">Products</a>
            <a href="#">Features</a>
            <a href="#">Support</a>
          </nav>

          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold">
            Explore
          </button>

        </div>

      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white/60 mb-8"
            >
              Premium Digital Workspace Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-8xl font-black leading-none tracking-tight"
            >
              Modern
              <br />
              Software.
              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Instant Delivery.
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Premium software licenses and digital workspace ecosystem with cinematic modern experience.
            </motion.p>

            <div className="mt-10 flex gap-4 flex-wrap">

              <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
                Explore Products
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                Learn More
              </button>

            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-10 flex-wrap">

              <div>
                <p className="text-4xl font-black">
                  10K+
                </p>

                <p className="text-white/50 mt-2">
                  Orders
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">
                  24/7
                </p>

                <p className="text-white/50 mt-2">
                  Support
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">
                  Instant
                </p>

                <p className="text-white/50 mt-2">
                  Delivery
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative h-[600px] hidden lg:block">

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute top-0 left-0 w-[320px] h-[220px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500" />

              <h2 className="text-3xl font-bold mt-8">
                Microsoft 365
              </h2>

              <p className="text-white/50 mt-3">
                Premium productivity ecosystem.
              </p>

            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -2, 2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute top-[180px] left-[120px] w-[320px] h-[220px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500" />

              <h2 className="text-3xl font-bold mt-8">
                Windows License
              </h2>

              <p className="text-white/50 mt-3">
                Original activation solutions.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  )
}
