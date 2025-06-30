"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-full bg-gray-800/80 dark:bg-gray-800/80 light:bg-white/90 backdrop-blur-sm border border-gray-700 dark:border-gray-700 light:border-gray-300 hover:border-red-500/50 transition-all duration-300 shadow-lg"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.div>

        <motion.div
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>

      {/* Visual indicator ring */}
      <motion.div
        animate={{
          scale: theme === "light" ? 1.2 : 1,
          opacity: theme === "light" ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-yellow-400"
      />

      <motion.div
        animate={{
          scale: theme === "dark" ? 1.2 : 1,
          opacity: theme === "dark" ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full bg-blue-400"
      />
    </motion.button>
  )
}
