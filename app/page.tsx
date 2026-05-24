import GlowBackground from "./components/GlowBackground"
import Hero from "./components/Hero"
import SmoothScroll from "./components/SmoothScroll"
import Navbar from "./components/Navbar"
import CursorGlow from "./components/CursorGlow"

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <GlowBackground />
      
      {/* THE ENTIRE PRESENTATION IS DRIVEN BY THIS HERO COMPONENT */}
      <Hero />

    </main>
  )
}