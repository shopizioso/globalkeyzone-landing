"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function EnergyCore() {
  const sphereRef = useRef<THREE.Mesh>(null)

  // Subtle pulsing animation
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      sphereRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      sphereRef.current.scale.z = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* OUTER GLOW RING */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.5} />
      </mesh>
      
      <mesh rotation={[Math.PI / 2.5, 0.5, 0]}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.3} />
      </mesh>

      {/* DISTORTED ENERGY SPHERE */}
      <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#083344"
          emissive="#06b6d4"
          emissiveIntensity={2}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* INNER SOLID CORE */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#22d3ee"
          emissiveIntensity={4}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
        <directionalLight position={[-5, -5, -5]} intensity={2} color="#22d3ee" />

        <EnergyCore />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.0}
        />
      </Canvas>
    </div>
  )
}