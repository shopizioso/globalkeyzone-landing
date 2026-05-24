"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Float } from "@react-three/drei"
import { useRef } from "react"

function RobotModel() {
  const robot = useGLTF("/models/robot.glb")
  const ref = useRef<any>()

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3

      ref.current.position.y =
        Math.sin(state.clock.elapsedTime) * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive
        ref={ref}
        object={robot.scene}
        scale={1.8}
        position={[0, -1, 0]}
      />
    </Float>
  )
}

export default function AICore() {
  return (
    <div className="absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          color="#7dd3fc"
        />

        <pointLight
          position={[-5, -5, -5]}
          intensity={2}
          color="#9333ea"
        />

        <RobotModel />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
