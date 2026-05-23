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
      <section className="min-h
