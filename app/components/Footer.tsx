"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 pt-32 pb-10 border-t border-white/10 z-10">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-[100%] bg-cyan-900/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-20">
          
          {/* BRAND COL */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-cyan-500/30 bg-black/50">
                <Image src="/GKZ.png" alt="GKZ Logo" fill className="object-cover p-1" />
              </div>
              <span className="text-xl font-bold tracking-widest text-white">
                GLOBAL<span className="text-cyan-400">KEY</span>ZONE
              </span>
            </Link>
            <p className="max-w-md text-zinc-400 font-medium leading-relaxed">
              Premium software licenses, AI automation systems, futuristic digital infrastructure, and instant delivery technology.
            </p>
          </div>

          {/* LINKS COL 1 */}
          <div>
            <h4 className="mb-6 font-bold text-white tracking-wider uppercase text-sm">Platform</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Ecosystem</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          {/* LINKS COL 2 */}
          <div>
            <h4 className="mb-6 font-bold text-white tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} GlobalKeyZone. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
