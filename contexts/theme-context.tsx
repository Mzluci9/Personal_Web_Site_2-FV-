"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Remove existing theme classes
    document.documentElement.classList.remove("light", "dark")
    // Add current theme class
    document.documentElement.classList.add(theme)
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme)

    // Also update the body background immediately
    if (theme === "light") {
      document.body.style.backgroundColor = "#f8fafc"
      document.body.style.color = "#0f172a"
    } else {
      document.body.style.backgroundColor = "#111827"
      document.body.style.color = "#f9fafb"
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
