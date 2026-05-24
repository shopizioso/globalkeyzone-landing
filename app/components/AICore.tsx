"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { MotionValue } from "framer-motion"

function Particles({ count = 1500 }) {
  const mesh = useRef<THREE.Points>(null)

  // Generate random positions in a spherical shell
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6 // Radius between 4 and 10
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos((Math.random() * 2) - 1)
      
      temp[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      temp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      temp[i * 3 + 2] = r * Math.cos(phi)
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    
    // Combine auto-rotation with mouse parallax
    const targetX = state.pointer.y * 0.3 + state.clock.elapsedTime * 0.03
    const targetY = state.pointer.x * 0.3 + state.clock.elapsedTime * 0.05
    
    mesh.current.rotation.x += (targetX - mesh.current.rotation.x) * 0.05
    mesh.current.rotation.y += (targetY - mesh.current.rotation.y) * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#22d3ee"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CyberGyroscope() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)
  const ring4 = useRef<THREE.Mesh>(null)
  const core = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (ring1.current) {
      ring1.current.rotation.x = time * 0.5
      ring1.current.rotation.y = time * 0.2
    }
    if (ring2.current) {
      ring2.current.rotation.y = time * 0.4
      ring2.current.rotation.z = time * 0.1
    }
    if (ring3.current) {
      ring3.current.rotation.x = time * 0.2
      ring3.current.rotation.z = time * 0.5
    }
    if (ring4.current) {
      ring4.current.rotation.x = time * -0.3
      ring4.current.rotation.y = time * -0.4
    }
    if (core.current) {
      // Pulse the inner core
      const scale = 1 + Math.sin(time * 3) * 0.1
      core.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* RING 1 - Outer */}
      <mesh ref={ring1}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      
      {/* RING 2 - Middle-Outer */}
      <mesh ref={ring2}>
        <torusGeometry args={[2.4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>

      {/* RING 3 - Middle-Inner */}
      <mesh ref={ring3}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>
      
      {/* RING 4 - Inner */}
      <mesh ref={ring4}>
        <torusGeometry args={[1.5, 0.01, 16, 100]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* INNER GLOWING EYE (CORE) */}
      <Sphere ref={core} args={[0.4, 32, 32]}>
        <meshBasicMaterial
          color="#ffffff"
        />
      </Sphere>
      
      {/* CORE GLOW HALO */}
      <Sphere args={[0.6, 32, 32]}>
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </Float>
  )
}

function ForegroundGlass() {
  const glass1 = useRef<THREE.Mesh>(null)
  const glass2 = useRef<THREE.Mesh>(null)
  const glass3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    const scrollY = window.scrollY || 0
    
    // Extremely fast movement based on mouse + scroll for parallax
    const targetX = state.pointer.x * 2
    const targetY = state.pointer.y * 2
    
    // Animate rotation
    if (glass1.current) {
      glass1.current.rotation.x = time * 0.2
      glass1.current.rotation.y = time * 0.3
      glass1.current.position.y = Math.sin(time) * 0.5 - (scrollY * 0.01)
      glass1.current.position.x += (targetX - glass1.current.position.x) * 0.05
    }
    
    if (glass2.current) {
      glass2.current.rotation.y = time * 0.1
      glass2.current.rotation.z = time * -0.2
      glass2.current.position.y = Math.cos(time) * 0.8 + 2 - (scrollY * 0.015)
      glass2.current.position.x += (-targetX * 1.5 - glass2.current.position.x) * 0.05
    }
    
    if (glass3.current) {
      glass3.current.rotation.x = time * -0.4
      glass3.current.rotation.z = time * 0.1
      glass3.current.position.y = Math.sin(time * 0.5) * 1.5 - 2 - (scrollY * 0.02)
      glass3.current.position.x += (targetX * 0.8 - glass3.current.position.x) * 0.05
    }
  })

  // Replaced heavy physical glass with ultra-performant holographic material
  const holoMaterial = new THREE.MeshBasicMaterial({
    color: "#22d3ee",
    transparent: true,
    opacity: 0.15,
    wireframe: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  })

  return (
    <>
      {/* Placed extremely close to camera (Z = 4 to 6, camera is at 8) */}
      <mesh ref={glass1} position={[3, 0, 5]} material={holoMaterial}>
        <icosahedronGeometry args={[1.5, 0]} />
      </mesh>
      
      <mesh ref={glass2} position={[-4, 2, 6]} material={holoMaterial}>
        <tetrahedronGeometry args={[2, 0]} />
      </mesh>

      <mesh ref={glass3} position={[2, -3, 5.5]} material={holoMaterial}>
        <octahedronGeometry args={[1.2, 0]} />
      </mesh>
    </>
  )
}

function CameraController({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  useFrame((state) => {
    if (!scrollProgress) return
    const progress = scrollProgress.get()
    
    // Phase 1: Z=8 (Calm)
    // Phase 2: Z=-1 (Penetrate Deep into the core)
    // Phase 3: Z=20 (Explode/Zoom out massively)
    let targetZ = 8
    
    // Also rotate the entire scene based on scroll to make it extremely alive
    let targetRotY = progress * Math.PI * 2 
    
    if (progress > 0.30 && progress <= 0.60) {
      targetZ = THREE.MathUtils.lerp(8, -1, (progress - 0.30) / 0.30)
    } else if (progress > 0.60) {
      targetZ = THREE.MathUtils.lerp(-1, 20, Math.min(1, (progress - 0.60) / 0.30))
    }
    
    // Extremely smooth camera glide
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.08
    state.camera.position.y += (Math.sin(state.clock.elapsedTime * 0.5) * 0.5 - state.camera.position.y) * 0.05
  })
  return null
}

function SceneLighting({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  const light1 = useRef<THREE.DirectionalLight>(null)
  const light2 = useRef<THREE.DirectionalLight>(null)
  
  const color1Blue = useMemo(() => new THREE.Color("#a855f7"), [])
  const color1Red = useMemo(() => new THREE.Color("#ef4444"), [])
  const color1Dark = useMemo(() => new THREE.Color("#4c1d95"), [])
  const color1Black = useMemo(() => new THREE.Color("#000000"), [])
  
  const color2Blue = useMemo(() => new THREE.Color("#22d3ee"), [])
  const color2Orange = useMemo(() => new THREE.Color("#f97316"), [])
  const color2Dark = useMemo(() => new THREE.Color("#1e3a8a"), [])
  const color2Black = useMemo(() => new THREE.Color("#000000"), [])

  useFrame(() => {
    if (!scrollProgress || !light1.current || !light2.current) return
    const progress = scrollProgress.get()
    
    let targetColor1 = color1Blue
    let targetColor2 = color2Blue
    
    if (progress > 0.30 && progress <= 0.60) {
        targetColor1 = color1Red
        targetColor2 = color2Orange
    } else if (progress > 0.60 && progress <= 0.90) {
        targetColor1 = color1Dark
        targetColor2 = color2Dark
    } else if (progress > 0.90) {
        targetColor1 = color1Black
        targetColor2 = color2Black
    }
    
    light1.current.color.lerp(targetColor1, 0.05)
    light2.current.color.lerp(targetColor2, 0.05)
  })

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight ref={light1} position={[5, 5, 5]} intensity={2} color="#a855f7" />
      <directionalLight ref={light2} position={[-5, -5, -5]} intensity={2} color="#22d3ee" />
    </>
  )
}

export default function AICore({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <SceneLighting scrollProgress={scrollProgress} />
        <CameraController scrollProgress={scrollProgress} />

        <CyberGyroscope />
        <Particles />
        <ForegroundGlass />

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