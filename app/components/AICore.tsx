'use client'

import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

function Orb() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={1.8}>
        <MeshDistortMaterial
          color="#00d9ff"
          distort={0.3}
          speed={1.8}
          roughness={0.4}
          metalness={0.8}
          opacity={0.35}
          transparent
        />
      </Sphere>
    </Float>
  );
}

export default function AICore() {
  return (
    <div className="absolute inset-0 opacity-40"

      <Canvas camera={{ position: [0, 0, 4] }}>

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 3, 3]}
          intensity={2}
        />

        <CoreOrb />

      </Canvas>

    </div>
  )
}
