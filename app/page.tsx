'use client'

import { motion } from 'framer-motion'
import AICore from './components/AICore'

const products = [
  'Microsoft 365',
  'Windows License',
  'Google Workspace',
  'Adobe Creative Cloud',
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[180px]"
        />

      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/20">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

            <h1 className="text-2xl font-black tracking-tight">
              GlobalKeyZone
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-white/60">

            <a href="#" className="hover:text-white transition">
              Products
            </a>

            <a href="#" className="hover:text-white transition">
              Features
            </a>

            <a href="#" className="hover:text-white transition">
              Ecosystem
            </a>

            <a href="#" className="hover:text-white transition">
              Support
            </a>

          </nav>

          <button className="px-6 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </header>

      {/* Hero */}
      
<section className="relative min-h-screen overflow-hidden">

  <AICore />

  <div className="relative z-10">
          {/* Left */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white/60 mb-8"
            >
              Premium Digital Workspace Ecosystem
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-8xl font-black leading-none tracking-tight"
            >

              Future
              <br />

              Digital
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Infrastructure
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              GlobalKeyZone delivers premium software licenses, digital tools,
              and workspace solutions with futuristic automation and instant delivery.
            </motion.p>

            <div className="mt-12 flex gap-5 flex-wrap">

              <button className="px-8 py-5 rounded-2xl bg-white text-black font-black text-lg hover:scale-105 transition">

                Explore Products

              </button>

              <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition text-lg">

                Learn More

              </button>

            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-10">

              <div>
                <h2 className="text-5xl font-black">
                  10K+
                </h2>

                <p className="mt-3 text-white/50">
                  Orders Completed
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black">
                  24/7
                </h2>

                <p className="mt-3 text-white/50">
                  Automation
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black">
                  Instant
                </h2>

                <p className="mt-3 text-white/50">
                  Delivery
                </p>
              </div>

            </div>

          </div>

          {/* Right Floating Cards */}
          <div className="relative hidden lg:block h-[700px]">

            {products.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                }}
                className={`absolute w-[320px] h-[220px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl
                ${index === 0 ? 'top-0 left-0' : ''}
                ${index === 1 ? 'top-[140px] right-0' : ''}
                ${index === 2 ? 'bottom-[140px] left-[60px]' : ''}
                ${index === 3 ? 'bottom-0 right-[40px]' : ''}
                `}
              >

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500" />

                <h2 className="text-3xl font-bold mt-8">
                  {item}
                </h2>

                <p className="text-white/50 mt-3">
                  Premium digital ecosystem.
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Bento Grid */}
      <section className="relative px-6 pb-40">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Premium
              <span className="text-white/40">
                {' '}Workspace
              </span>
            </h2>

            <p className="text-white/50 mt-6 text-xl">
              Everything you need for modern productivity.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 min-h-[320px] hover:scale-[1.02] transition">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500" />

              <h3 className="text-3xl font-black mt-8">
                Instant Delivery
              </h3>

              <p className="text-white/50 mt-5 leading-relaxed">
                Fully automated digital product delivery with premium experience.
              </p>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 min-h-[320px] hover:scale-[1.02] transition">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500" />

              <h3 className="text-3xl font-black mt-8">
                Secure Ecosystem
              </h3>

              <p className="text-white/50 mt-5 leading-relaxed">
                Enterprise-grade protection for licenses and accounts.
              </p>

            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 min-h-[320px] hover:scale-[1.02] transition">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500" />

              <h3 className="text-3xl font-black mt-8">
                Premium Support
              </h3>

              <p className="text-white/50 mt-5 leading-relaxed">
                Fast and responsive customer support with modern workflow.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
