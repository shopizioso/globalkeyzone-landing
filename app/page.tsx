'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Microsoft 365',
    desc: 'Premium productivity ecosystem',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Windows License',
    desc: 'Original activation solutions',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    title: 'AI Workspace',
    desc: 'Modern AI productivity tools',
    gradient: 'from-orange-400 to-red-500',
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <motion.div
          animate={{
            x: [0, 120, -60, 0],
            y: [0, -60, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [0, -120, 60, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[160px]"
        />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            GlobalKeyZone
          </motion.h1>

          <nav className="hidden md:flex gap-8 text-white/60">
            <a href="#">Products</a>
            <a href="#">Features</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </nav>

          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Explore
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
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
              initial={{ opacity: 0, y: 60 }}
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
              className="mt-8 text-xl text-white/60 leading-relaxed max-w-xl"
            >
              Premium software licenses, workspace ecosystem,
              and cinematic digital experiences for modern productivity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex gap-4 flex-wrap"
            >

              <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
                Explore Products
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                Learn More
              </button>

            </motion.div>

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

          {/* Right Side */}
          <div className="relative h-[700px] hidden lg:block">

            {cards.map((card, index) => (

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
                className="absolute w-[320px] h-[220px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl"
                style={{
                  top: `${index * 120}px`,
                  left: `${index * 60}px`,
                }}
              >

                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${card.gradient}`} />

                <h2 className="text-3xl font-bold mt-8">
                  {card.title}
                </h2>

                <p className="text-white/50 mt-3">
                  {card.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-white/5">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            'Secure Payment Gateway',
            'Trusted Digital Delivery',
            'Premium Customer Support',
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 mb-8" />

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="text-white/50 mt-4 leading-relaxed">
                Designed for modern digital customers with automation and security.
              </p>

            </motion.div>

          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-2xl p-16 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

          <div className="relative z-10 text-center">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              Start Today
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Upgrade Your
              <br />
              Digital Workspace.
            </h2>

            <p className="mt-8 text-white/60 text-xl max-w-2xl mx-auto">
              Premium software ecosystem designed for modern productivity.
            </p>

            <button className="mt-12 px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition">
              Visit GlobalKeyZone
            </button>

          </div>
        </div>
      </section>

    </main>
  )
}            Explore
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white/60 mb-8"
            >
              Premium Digital Workspace Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
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
              className="mt-8 text-xl text-white/60 leading-relaxed max-w-xl"
            >
              Premium software ecosystem with cinematic experience,
              secure automation, and modern workspace solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex gap-4 flex-wrap"
            >
              <button className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:scale-105 transition">
                Explore Products
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                Learn More
              </button>
            </motion.div>

            <div className="mt-16 flex gap-10 flex-wrap">

              {[
                ['10K+', 'Orders'],
                ['24/7', 'Support'],
                ['Instant', 'Delivery'],
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-4xl font-black">
                    {item[0]}
                  </p>

                  <p className="text-white/50 mt-2">
                    {item[1]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[700px] hidden lg:block">

            {floatingCards.map((card, index) => (
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
                className={`absolute rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 w-[320px] h-[220px] shadow-2xl`}
                style={{
                  top: `${index * 120}px`,
                  left: `${index * 60}px`,
                }}
              >

                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color}`} />

                <h2 className="text-3xl font-bold mt-8">
                  {card.title}
                </h2>

                <p className="text-white/50 mt-3">
                  Premium ecosystem solution.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 border-t border-white/5">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            'Secure Payment Gateway',
            'Trusted Digital Delivery',
            'Premium Customer Support',
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-purple-500/30 mb-8" />

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="text-white/50 mt-4 leading-relaxed">
                Designed for modern digital customers with automation and security.
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">

        <div className="max-w-6xl mx-auto rounded-[48px] border border-white/10 bg-white/5 backdrop-blur-2xl p-16 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

          <div className="relative z-10 text-center">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              Start Today
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Upgrade Your
              <br />
              Digital Workspace.
            </h2>

            <p className="mt-8 text-white/60 text-xl max-w-2xl mx-auto">
              Premium software ecosystem designed for modern productivity.
            </p>

            <button className="mt-12 px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition">
              Visit GlobalKeyZone
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}                {products.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:bg-white/10 transition"
                  >
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-white/50 mt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Features
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Built For
              <br />
              Modern Customers.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              'Instant Delivery',
              'Secure Payments',
              'Premium Support',
              'Trusted Platform',
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 mb-6" />

                <h3 className="text-2xl font-bold">
                  {feature}
                </h3>

                <p className="mt-4 text-white/50 leading-relaxed">
                  Premium digital ecosystem experience with modern automation.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[48px] border border-white/10 bg-white/5 p-16 text-center relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

          <div className="relative z-10">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-6">
              Start Today
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Upgrade Your
              <br />
              Digital Workspace.
            </h2>

            <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg">
              Premium software licenses and workspace ecosystem
              built for modern productivity.
            </p>

            <button className="mt-12 px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition">
              Visit GlobalKeyZone
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              GlobalKeyZone
            </h3>

            <p className="text-white/50 mt-4 max-w-md">
              Premium digital products and software ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-white/50">
            <div>
              <h4 className="text-white font-semibold mb-4">
                Products
              </h4>

              <ul className="space-y-2">
                <li>Microsoft 365</li>
                <li>Windows License</li>
                <li>AI Tools</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-2">
                <li>About</li>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
