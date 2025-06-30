"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main gradient background with proper theme support */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-900 dark:via-gray-800 dark:to-black light:from-blue-50 light:via-indigo-50 light:to-purple-50 transition-all duration-500" />

      {/* Animated stars with theme-aware colors */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white dark:bg-white light:bg-indigo-400 rounded-full opacity-30 dark:opacity-30 light:opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Geometric shapes with theme support */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-red-500/20 dark:border-red-500/20 light:border-red-500/40 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border border-pink-500/20 dark:border-pink-500/20 light:border-pink-500/40"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-500/15 dark:border-blue-500/15 light:border-blue-500/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
