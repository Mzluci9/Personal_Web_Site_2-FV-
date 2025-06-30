"use client"

import { motion } from "framer-motion"
import { ExternalLink, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.",
    date: "2024-01-15",
    readTime: "5 min read",
    url: "https://medium.com/@example/future-web-dev",
    tags: ["Web Development", "AI", "Trends"],
  },
  {
    id: 2,
    title: "Building Scalable Applications with Next.js and TypeScript",
    excerpt:
      "A comprehensive guide to creating robust, type-safe applications using Next.js and TypeScript best practices.",
    date: "2024-01-08",
    readTime: "8 min read",
    url: "https://medium.com/@example/nextjs-typescript",
    tags: ["Next.js", "TypeScript", "Tutorial"],
  },
  {
    id: 3,
    title: "The Art of Clean Code: Principles Every Developer Should Know",
    excerpt: "Essential principles and practices for writing maintainable, readable code that stands the test of time.",
    date: "2024-01-01",
    readTime: "6 min read",
    url: "https://medium.com/@example/clean-code",
    tags: ["Clean Code", "Best Practices", "Development"],
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
            Thoughts, tutorials, and insights from my development journey
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
            href="https://medium.com/@example"
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
