'use client'

import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

function CoreOrb() {
  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={3}
    >
      <Sphere args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0">

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
