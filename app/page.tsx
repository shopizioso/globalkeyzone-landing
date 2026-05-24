import GlowBackground from "./components/GlowBackground"
import Hero from "./components/Hero"
import SmoothScroll from "./components/SmoothScroll"
import Navbar from "./components/Navbar"
import CursorGlow from "./components/CursorGlow"
import Preloader from "./components/Preloader"
import LogoTicker from "./components/LogoTicker"
import BentoGrid from "./components/BentoGrid"
import Footer from "./components/Footer"
import AudioController from "./components/AudioController"

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      
      <Preloader />
      <SmoothScroll />
      <CursorGlow />
      <AudioController />
      <Navbar />
      <GlowBackground />
      
      {/* THE ENTIRE PRESENTATION IS DRIVEN BY THIS HERO COMPONENT */}
      <Hero />

      {/* ADDITIONAL CONTENT SECTIONS */}
      <div className="relative z-20 bg-black pb-20">
        <LogoTicker />
        <BentoGrid />
      </div>
      
      <Footer />

    </main>
  )
}