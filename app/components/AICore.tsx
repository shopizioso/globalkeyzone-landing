"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  useGLTF,
  Environment,
  Float
} from "@react-three/drei"

import { Suspense, useRef } from "react"

function Robot() {
  const robot = useGLTF("/models/robot.glb")
  const ref = useRef<any>()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.3

      ref.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive
        ref={ref}
        object={robot.scene}
        scale={8}
        position={[0, -6, 0]}
      />
    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0 z-0 opacity-90">
      <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>

        <ambientLight intensity={4} />

        <directionalLight
          position={[10, 10, 10]}
          intensity={6}
          color="#60a5fa"
        />

        <pointLight
          position={[-10, -10, -10]}
          intensity={5}
          color="#9333ea"
        />

        <spotLight
          position={[0, 15, 10]}
          intensity={8}
          angle={0.5}
          penumbra={1}
        />

        <Environment preset="night" />

        <Suspense fallback={null}>
          <Robot />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          enablePan={false}
        />

      </Canvas>
    </div>
  )
}
