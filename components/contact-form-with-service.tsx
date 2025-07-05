"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactFormWithService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  // Using Formspree (free service) - replace YOUR_FORM_ID with your actual Formspree form ID
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000) // Reset after 5 seconds
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={status === "loading"}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors disabled:opacity-50"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          disabled={status === "loading"}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none disabled:opacity-50"
          placeholder="Talk to me Yall😃...."
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={status !== "loading" ? { scale: 1.05 } : {}}
        whileTap={status !== "loading" ? { scale: 0.95 } : {}}
        className={`w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-lg transition-all ${
          status === "success"
            ? "bg-green-600 hover:bg-green-700"
            : status === "error"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gradient-to-r from-red-500 to-pink-500 hover:shadow-lg hover:shadow-red-500/25"
        } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {status === "loading" && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {status === "success" && <CheckCircle className="w-4 h-4" />}
        {status === "error" && <AlertCircle className="w-4 h-4" />}
        {status === "idle" && <Send className="w-4 h-4" />}

        {status === "loading" && "Sending..."}
        {status === "success" && "Message Sent!"}
        {status === "error" && "Failed to Send"}
        {status === "idle" && "Send Message"}
      </motion.button>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-green-400 text-sm text-center"
        >
          Thank you! Your message has been sent successfully. I'll get back to you soon!
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-sm text-center"
        >
          Sorry, there was an error sending your message. Please try again or contact me directly.
        </motion.div>
      )}
    </form>
  )
}
