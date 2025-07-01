"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Actual intelligence",
    excerpt:
      "AI once meant Artificial Intelligence. Now it can stand for Actual Intelligence.",
    date: "2024-06-13",
    readTime: "5 min read",
    url: "https://medium.com/@michaelzewdu/actual-intelligence-890de2383811",
    tags: ["Artificial Intelligence", "Trends"],
  },
  {
    id: 2,
    title: "Working with Oracles",
    excerpt:
      "The Joy of Constant Evolution.I had the opportunity of working in both Technology team and Business team in our company and both environments in there own way have thought me valuable lessons .....",
    date: "2025-06-10",
    readTime: "8 min read",
    url: "https://medium.com/@michaelzewdu/working-with-oracles-10288169d7cc",
    tags: ["Always Learning", "Adapting", "Evolving"],
  },
  {
    id: 3,
    title: "The Smartest One in the Room Is No Longer Human",
    excerpt: "Aglobal education shift is happening, and at the center of it is artificial intelligence. We’re not just talking about smart boards and chatbots. AI is now teaching....",
    date: "2024-01-01",
    readTime: "6 min read",
    url: "https://michaelzewdu.medium.com/the-smartest-one-in-the-room-is-no-longer-human-7bc13722149b",
    tags: ["Teachers vs Tech"],
  },
  {
    id: 3,
    title: "The Odyssey Plan",
    excerpt: "Ever feel stuck in life ver feel stuck in life’s autopilot mode..Like you’re cruising down a familiar highway with no exits in sight? If that sounds familiar, let me introduce you to a simple but Powerful life hack......",
    date: "2024-01-01",
    readTime: "6 min read",
    url: "https://medium.com/@example/clean-code",
    tags: ["Your Life’s GPS for Plot Twists"],
  },
]
export default function WritingSection() {
  return (
    <section id="writing" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">WRITING</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights,Ideas and whatever sparked my curiosity I wrote about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded-full border border-red-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
              >
                Read More
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://michaelzewdu.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
          >
            View All Articles
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
