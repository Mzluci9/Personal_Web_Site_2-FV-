"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Box, Torus, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"

// Floating geometric shape component with rotation animation
function FloatingShape({
  position,
  geometry,
  color,
}: { position: [number, number, number]; geometry: string; color: string }) {
  // Reference to the mesh for animation
  const meshRef = useRef<THREE.Mesh>(null)

  // Animation loop - rotates the shape continuously
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate on multiple axes for dynamic movement
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      // Add floating motion using sine wave
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  // Render different geometries based on type
  return (
    <mesh ref={meshRef} position={position}>
      {geometry === "sphere" && <Sphere args={[0.5, 16, 16]} />}
      {geometry === "box" && <Box args={[0.8, 0.8, 0.8]} />}
      {geometry === "torus" && <Torus args={[0.6, 0.2, 8, 16]} />}
      {/* Material with emissive glow effect */}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.6}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  )
}

// Animated particles system for background ambiance
function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  // Create particle positions
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  // Generate random positions for particles
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20 // x
    positions[i + 1] = (Math.random() - 0.5) * 20 // y
    positions[i + 2] = (Math.random() - 0.5) * 20 // z
  }

  // Animate particles with gentle movement
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      {/* Point material for particle rendering */}
      <pointsMaterial size={0.05} color="#ff3366" transparent opacity={0.6} />
    </points>
  )
}

// Main 3D scene component
function Scene() {
  return (
    <>
      {/* Ambient lighting for overall illumination */}
      <ambientLight intensity={0.3} />
      {/* Point light for dramatic lighting effects */}
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff3366" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3366ff" />

      {/* Environment for realistic reflections */}
      <Environment preset="night" />

      {/* Floating geometric shapes positioned around the scene */}
      <FloatingShape position={[-8, 2, -5]} geometry="sphere" color="#ff3366" />
      <FloatingShape position={[8, -2, -8]} geometry="box" color="#3366ff" />
      <FloatingShape position={[0, 4, -10]} geometry="torus" color="#ff6633" />
      <FloatingShape position={[-6, -4, -6]} geometry="sphere" color="#6633ff" />
      <FloatingShape position={[6, 3, -4]} geometry="box" color="#33ff66" />

      {/* Particle field for ambient effect */}
      <ParticleField />
    </>
  )
}

// Main component that renders the 3D canvas
export default function Futuristic3DBackground() {
  return (
    <motion.div
      // Initial animation when component mounts
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      // Fixed positioning to cover entire viewport
      className="fixed inset-0 z-0 pointer-events-none"
    >
      {/* React Three Fiber Canvas */}
      <Canvas
        // Camera configuration for optimal viewing
        camera={{ position: [0, 0, 10], fov: 60 }}
        // Performance optimizations
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        // Styling
        style={{ background: "transparent" }}
      >
        {/* Render the 3D scene */}
        <Scene />
      </Canvas>
    </motion.div>
  )
}
