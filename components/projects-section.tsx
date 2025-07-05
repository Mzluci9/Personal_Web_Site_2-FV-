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
    tags: ["Python","OpenAI","Jupyter Notebook","Github", "Pandas", "VS Code"],
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
    tags: ["Python Programming","Github","OpenAI", "Jupyter Notebook", "Pandas", "Scikit-learn",],
    longDescription:
      "This machine learning model uses alternative data to improve credit risk prediction and borrower assessment, focusing on regulatory compliance with Basel II’s emphasis on transparency and interpretability. It employs explainable models like Logistic Regression with Weight of Evidence encoding to build stakeholder trust.Since the dataset lacks a direct default label, the model creates a proxy variable based on customer behavior (e.g., RFM metrics), carefully managing risks if the proxy doesn’t perfectly reflect default. It balances simple, interpretable models and complex, high-performing algorithms like Gradient Boosting, using tools such as SHAP to maintain explainability.The feature engineering pipeline aggregates transaction data, extracts time features, encodes categorical variables, imputes missing values, and standardizes numerical features. Processed data is saved for streamlined training and evaluation, delivering a compliant and effective credit risk scoring solution.",
    features: ["Real-time Messaging", "AI Integration", "File Sharing", "Group Chats", "Message History"],
    liveUrl: "https://www.imdb.com/title/tt1307057/",
    githubUrl: "https://github.com/Mzluci9/Altdata-lending-risk-model",
  },
  {
    id: 3,
    title: "Amharic E-Commerce Scraper",
    description: "A data-driven analysis of user reviews from three Ethiopian banking apps to uncover satisfaction trends, pain points, and feature demands using web scraping, sentiment analysis, and NLP.",
    image: "/Amharic E-Commerce Scraper IMG.png?height=300&width=400",
    tags: ["Web Scraping","Jupyter Notebook", "Python", "Pandas", "VS Code","Modular Coding", "NLP","Github"],
    longDescription:
      "This project analyzes customer feedback from the Google Play Store for three major Ethiopian banks CBE, BOA and Dashen Bank to identify what users love and what frustrates them. Using web scraping and natural language processing (NLP). I collected and analyzed over 1,200 reviews to extract sentiment, detect recurring themes (like bugs or login issues) and uncover feature requests. The insights are visualized and stored in a structured database, offering actionable recommendations for banks to enhance mobile app performance, user satisfaction, and retention.",
    features: [
      "Web Scraping for App Review ",
      "Sentiment Analysis",
      "Visual Insights",
      "Postgresql Database Integration",
      "Actionable Recommendations",
    ],
    liveUrl: "https://www.imdb.com/title/tt1307057/",
    githubUrl: "https://github.com/Mzluci9/amharic-ecommerce-scraper",
  },
  {
    id: 4,
    title: "Solar Data Discovery",
    description: "Exploration of solar energy potential across Benin, Sierra Leone and Togo. Using Python, EDA, and Streamlit.The project delivers insights that support strategic solar farm investment decisions.",
    image: "/Solar Data Discovery.png?height=300&width=400",
    tags: ["Matplotlib", "Jupyter Notebook", "Python", "GitHub"],
    longDescription:
      "A cross-country solar data discovery project designed to identify high-potential regions for solar farm installations in West Africa. By analyzing real-world environmental data from Benin, Sierra Leone and Togo, the project applies Python Programing, Exploratory Data Analysis (EDA), and Streamlit dashboards to guide sustainable energy investment strategies for MoonLight Energy Solutions. This challenge served as a gateway to my AI mastery journey, covering key skills in Machine Learning, Financial Analytics, and Data Engineering.",

    features: [
      "Cross-Country Data Analysis",
      "Environmental Metrics Integration",
      "Python-Powered EDA",
      "Strategy Recommendation",
      "Cleaning & Maintenance Signal Analysis",
    ],
    liveUrl: "https://www.imdb.com/title/tt1307057/",
    githubUrl: "https://github.com/Mzluci9/Solar-Challenge-week0",
  },
  {
    id: 5,
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
    id: 6,
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
        <motion.div
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-center mt-12"
>
  <motion.a
    href="https://github.com/Mzluci9"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ 
      scale: 1.1, 
      rotate: 2, 
      boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)", 
      transition: { duration: 0.3, ease: "easeInOut" } 
    }}
    whileTap={{ scale: 0.95, rotate: -2 }}
    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg border border-red-500/50 hover:border-red-400 shadow-lg hover:shadow-red-500/30 transition-all duration-300"
  >
    <motion.span
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <Github className="w-5 h-5" />
    </motion.span>
    View My GitHub
  </motion.a>
</motion.div>
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

