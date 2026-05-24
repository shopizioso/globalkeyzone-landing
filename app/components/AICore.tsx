"use client"

import { Canvas } from "@react-three/fiber"
import {
  Float,
  OrbitControls,
  Environment,
  Sparkles,
  Html,
} from "@react-three/drei"

function CoreSphere() {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >

      {/* MAIN CORE */}
      <mesh>
        <sphereGeometry args={[1.4, 128, 128]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#06b6d4"
          emissiveIntensity={4}
          roughness={0.05}
          metalness={1}
        />
      </mesh>

      {/* OUTER RING */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[2.2, 0.03, 32, 200]} />

        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={4}
        />
      </mesh>

      {/* SECOND RING */}
      <mesh rotation={[1.2, 0.3, 1]}>
        <torusGeometry args={[2.8, 0.02, 32, 200]} />

        <meshStandardMaterial
          color="#a855f7"
          emissive="#9333ea"
          emissiveIntensity={5}
        />
      </mesh>

      {/* INNER GLOW */}
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={8}
        />
      </mesh>

    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">

      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>

        {/* LIGHTS */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#67e8f9"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={4}
          color="#9333ea"
        />

        {/* ENVIRONMENT */}
        <Environment preset="city" />

        {/* PARTICLES */}
        <Sparkles
          count={300}
          scale={15}
          size={3}
          speed={0.4}
        />

        {/* CORE */}
        <CoreSphere />

        {/* FLOATING TEXT */}
        <Html position={[0, -3.5, 0]} center>
          <div className="text-cyan-300 text-sm tracking-[0.4em] uppercase opacity-70">
            AI DIGITAL CORE
          </div>
        </Html>

        {/* CAMERA ROTATION */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />

      </Canvas>

      {/* EXTRA SCREEN GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />

    </div>
  )
}
