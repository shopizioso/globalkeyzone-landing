"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Orb() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <Sphere args={[1.5, 64, 64]} scale={2.4}>
        <MeshDistortMaterial
          color="#6ee7ff"
          distort={0.45}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <h1 className="text-2xl font-black">GlobalKeyZone</h1>
          </div>

          <nav className="hidden md:flex gap-10 text-white/70">
            <a href="#">Products</a>
            <a href="#">Infrastructure</a>
            <a href="#">Automation</a>
            <a href="#">Support</a>
          </nav>

          <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-black to-purple-600/20" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* 3D ORB */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="absolute inset-0"
        >
          <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[3, 3, 3]} />
            <Orb />
          </Canvas>
        </motion.div>

        {/* HERO CONTENT */}
        <motion.div
          style={{
            opacity: heroOpacity,
          }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex mb-8 px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl text-white/70">
              AI Digital Core Infrastructure
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Future
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Digital
              </span>
              <br />
              Ecosystem
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-xl text-white/60 leading-relaxed">
              Premium software licenses, automation systems, AI workspace,
              digital infrastructure, and instant delivery technology.
            </p>

            <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition">
                Explore Products
              </button>

              <button className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl font-semibold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-8 h-14 rounded-full border border-white/20 flex justify-center">
            <div className="w-2 h-2 mt-3 rounded-full bg-white" />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            ["10K+", "Orders Completed"],
            ["24/7", "Automation"],
            ["Instant", "Digital Delivery"],
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <h2 className="text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {item[0]}
              </h2>

              <p className="mt-4 text-white/60 text-xl">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-cyan-400 mb-4">INFRASTRUCTURE</div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Advanced
              <span className="text-white/40"> AI Workspace </span>
              Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              "Microsoft 365",
              "Google Workspace",
              "Windows License",
              "AI Automation",
              "Digital Delivery",
              "Cloud Infrastructure",
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -15,
                  rotateX: 6,
                }}
                className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 min-h-[300px]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500" />

                <div className="text-6xl font-black text-white/10 mb-10">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold">{feature}</h3>

                <p className="mt-6 text-white/60 leading-relaxed">
                  Futuristic digital ecosystem with automation, scalability,
                  instant deployment and premium infrastructure.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="relative overflow-hidden rounded-[50px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-16 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.3),transparent_60%)]" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Build Your
              <br />
              Digital Empire
            </h2>

            <p className="mt-8 text-white/60 text-xl max-w-2xl mx-auto">
              Experience next-generation software ecosystem with futuristic AI
              infrastructure and automated delivery systems.
            </p>

            <button className="mt-12 px-12 py-5 rounded-full bg-white text-black font-black text-lg hover:scale-105 transition">
              Launch Now
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
