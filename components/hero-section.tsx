"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <Image
              src="/MK.PNG?height=128&width=128"
              alt="Profile"
              fill
              className="rounded-full border-4 border-red-500 object-cover"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-pink-500/50"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Michael Zewdu</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Creative 
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming data into insights, bridging technology and business strategy, while building the future of financial technology in Ethiopia.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-shadow"
          >
            View My Work
          </motion.button>

          <motion.a
            href="/Michael Zewdu Updated CV.pdf" // You'll need to add your actual resume PDF to the public folder
            download="Michael_Zewdu_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600 dark:border-gray-600 light:border-gray-400 text-gray-300 dark:text-gray-300 light:text-gray-600 font-semibold rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-400 light:text-gray-500 hover:text-red-500 transition-colors" />
      </motion.div>
    </section>
  )
}
