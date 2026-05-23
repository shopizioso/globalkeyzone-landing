export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 text-sm text-white/70">
              Premium Digital Workspace Solutions
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Modern Software.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Instant Delivery.
              </span>
            </h1>

            <p className="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
              GlobalKeyZone provides premium digital products, software licenses,
              and workspace solutions with secure automated delivery.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold">
                Explore Products
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8">
              <h3 className="text-2xl font-bold mb-8">
                Premium Workspace Ecosystem
              </h3>

              <div className="space-y-4">
                {[
                  'Microsoft 365',
                  'Windows License',
                  'Google Workspace',
                  'AI Productivity Tools',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-black/30 border border-white/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
