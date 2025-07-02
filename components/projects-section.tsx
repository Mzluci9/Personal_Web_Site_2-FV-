"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Insurance Risk Analytics & Predictive Modeling",
    description: "ML model to predict insurance premiums and claims using cleaned data and feature engineering.",
    image: "/predictive modeling IMG.png?height=300&width=400",
    tags: ["Python", "Jupyter Notebook", "Pandas", "VS Code"],
    longDescription:
      "Focuses on analyzing insurance data to identify key risk factors and predict future outcomes using machine learning models. The primary objective is to support data-driven decision-making in underwriting, premium pricing, and claim management.",
    features: ["Exploratory Data Analysis", "Feature engineering", "Data cleaning and preprocessing", "Visualizations"],
    liveUrl: "https://www.imdb.com/title/tt1307057/",
    githubUrl: "https://github.com/Mzluci9/-Insurance_Risk-_Analytics_-_Predictive_Modeling",
  },
  {
    id: 2,
    title: "Credit Risk Probability Model for Alternative Data",
    description: "A machine learning model predicting credit risk using alternative data. It ensures regulatory compliance with explainable methods aligned to Basel II, creates proxy variables for missing defaults, and uses feature engineering to improve borrower assessment.",
    image: "/Credit Risk Probability Model for Alternative Data.png?height=300&width=400",
    tags: ["Python", "Node.js", "OpenAI", "Socket.io"],
    longDescription:
      "This machine learning model uses alternative data to improve credit risk prediction and borrower assessment, focusing on regulatory compliance with Basel II’s emphasis on transparency and interpretability. It employs explainable models like Logistic Regression with Weight of Evidence encoding to build stakeholder trust.Since the dataset lacks a direct default label, the model creates a proxy variable based on customer behavior (e.g., RFM metrics), carefully managing risks if the proxy doesn’t perfectly reflect default. It balances simple, interpretable models and complex, high-performing algorithms like Gradient Boosting, using tools such as SHAP to maintain explainability.The feature engineering pipeline aggregates transaction data, extracts time features, encodes categorical variables, imputes missing values, and standardizes numerical features. Processed data is saved for streamlined training and evaluation, delivering a compliant and effective credit risk scoring solution.",
    features: ["Real-time Messaging", "AI Integration", "File Sharing", "Group Chats", "Message History"],
    liveUrl: "https://www.imdb.com/title/tt1307057/",
    githubUrl: "https://github.com/Mzluci9/Altdata-lending-risk-model",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    longDescription:
      "A comprehensive analytics dashboard for portfolio management with real-time data visualization, performance tracking, and automated reporting features.",
    features: [
      "Real-time Analytics",
      "Data Visualization",
      "Performance Tracking",
      "Automated Reports",
      "Custom Alerts",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Analytics dashboard for tracking portfolio performance",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    longDescription:
      "A comprehensive analytics dashboard for portfolio management with real-time data visualization, performance tracking, and automated reporting features.",
    features: [
      "Real-time Analytics",
      "Data Visualization",
      "Performance Tracking",
      "Automated Reports",
      "Custom Alerts",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Explore my latest work and creative solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-red-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/25 transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
