'use client'

import { motion } from 'framer-motion'

const products = [
  {
    title: 'Microsoft 365',
    desc: 'Premium productivity ecosystem.',
  },
  {
    title: 'Windows License',
    desc: 'Original activation solutions.',
  },
  {
    title: 'Google Workspace',
    desc: 'Professional collaboration tools.',
  },
  {
    title: 'AI Tools',
    desc: 'Modern AI productivity platform.',
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            GlobalKeyZone
          </h1>

          <nav className="hidden md:flex gap-8 text-white/60">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>

          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold">
            Explore
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              Premium Digital Workspace Solutions
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              Modern
              <br />
              Software.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Instant Delivery.
              </span>
            </h1>

            <p className="mt-8 text-xl text-white/60 max-w-xl leading-relaxed">
              GlobalKeyZone provides premium software licenses,
              workspace solutions, and digital products with
              secure automated delivery.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                Explore Products
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            <div className="mt-14 flex gap-10 flex-wrap">
              <div>
                <p className="text-4xl font-black">10K+</p>
                <p className="text-white/50">Orders</p>
              </div>

              <div>
                <p className="text-4xl font-black">24/7</p>
                <p className="text-white/50">Support</p>
              </div>

              <div>
                <p className="text-4xl font-black">Instant</p>
                <p className="text-white/50">Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-[120px]" />

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-white/50 text-sm">
                    Workspace Ecosystem
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    Premium Platform
                  </h2>
                </div>

                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-500" />
              </div>

              <div className="space-y-5">
                {products.map((item, index) => (
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
