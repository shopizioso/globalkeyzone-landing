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
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5

      ref.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive
        ref={ref}
        object={robot.scene}
        scale={2.5}
        position={[0, -2, 0]}
      />
    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0 z-0">

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>

        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#7dd3fc"
        />

        <Environment preset="city" />

        <Suspense fallback={null}>
          <Robot />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
        />

      </Canvas>

    </div>
  )
}
