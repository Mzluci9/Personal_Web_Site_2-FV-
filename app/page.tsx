"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/contexts/theme-context"
import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import WritingSection from "@/components/writing-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import AnimatedBackground from "@/components/animated-background"
import ScrollProgress from "@/components/scroll-progress"
import BackToTop from "@/components/back-to-top"

function PortfolioContent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen transition-all duration-500 bg-gray-900 dark:bg-gray-900 light:bg-gray-50 text-white dark:text-white light:text-gray-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <AnimatedBackground />
            <ScrollProgress />
            <Navigation />
            <main>
              <HeroSection />
              <ProjectsSection />
              <WritingSection />
              <ResumeSection />
              <ContactSection />
            </main>
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
