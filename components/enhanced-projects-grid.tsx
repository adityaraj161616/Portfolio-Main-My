"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "FeedbackPro - AI-Powered Feedback Platform",
    description:
      "Advanced feedback platform with AI sentiment analysis, dynamic form builder, and real-time notifications",
    image: "/projects/feedback-1.png",
    video: "/projects/feedback-1.png",
    tags: ["Next.js 14", "AI", "MongoDB", "Socket.io", "GSAP"],
    github: "https://github.com/adityaraj161616/Feedback",
    demo: "https://feedback-ten-lac.vercel.app/",
    category: "AI & Machine Learning",
    year: "2025",
  },
  {
    id: 2,
    title: "EduVerse - Premium Online Learning Platform",
    description:
      "World-class learning platform with virtual classrooms, progress tracking, and Cuberto-inspired design",
    image: "/projects/eduverse-1.png",
    video: "/projects/eduverse-1.png",
    tags: ["Next.js 15", "MongoDB", "Razorpay", "TypeScript", "Framer Motion"],
    github: "https://github.com/adityaraj161616/eduverse",
    demo: "https://eduverse-q2na.vercel.app/",
    category: "Full-Stack",
    year: "2025",
  },
  {
    id: 3,
    title: "Saint-Urbain Echo - Interactive Blog Platform",
    description: "Modern blog platform with horizontal scroll animations, GSAP-powered UI/UX, and Supabase integration",
    image: "/projects/saint-1.png",
    video: "/projects/saint-1.png",
    tags: ["React", "TypeScript", "GSAP", "Supabase", "Vite"],
    github: "https://github.com/adityaraj161616/SaintUrbanBlogs",
    demo: "https://saint-urban-blogs.vercel.app/",
    category: "Creative Design",
    year: "2025",
  },
  {
    id: 4,
    title: "diYsnap - Full-Stack Photo Booth App",
    description: "Snapchat-inspired photo booth with filters, collages, Google Auth, and 24-hour auto-cleanup",
    image: "/projects/diysnap-1.png",
    video: "/projects/diysnap-1.png",
    tags: ["Next.js", "MongoDB", "Google Auth", "GSAP", "Camera API"],
    github: "https://github.com/adityaraj161616/DiYSnap",
    demo: "https://di-y-snap.vercel.app/",
    category: "Full-Stack",
    year: "2025",
  },
  {
    id: 5,
    title: "CourierPress - Premium Newsletter Platform",
    description: "Full-stack newsletter platform with Stripe subscriptions, admin dashboard, and content management",
    image: "/projects/newsletter-1.png",
    video: "/projects/newsletter-1.png",
    tags: ["Next.js 15", "MongoDB", "Stripe", "NextAuth", "TypeScript"],
    github: "https://github.com/adityaraj161616/Newsletter",
    demo: "https://newsletter-two-neon.vercel.app/",
    category: "Full-Stack",
    year: "2025",
  },
  {
    id: 6,
    title: "Niramaya - Wellness & Ayurvedic Booking",
    description: "Modern web application for booking wellness and Ayurvedic treatments with advanced GSAP animations",
    image: "/projects/niramaya-1.png",
    video: "/projects/niramaya-1.png",
    tags: ["React", "TypeScript", "GSAP", "Supabase", "Tailwind CSS"],
    github: "https://github.com/adityaraj161616/Nirmalaya",
    demo: "https://nirmalaya.vercel.app/",
    category: "Healthcare",
    year: "2025",
  },
]

export function EnhancedProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = [
    "All",
    "AI & Machine Learning",
    "Web Scraping",
    "Full-Stack",
    "E-Commerce",
    "Creative Design",
    "Business Website",
    "Healthcare",
    "Productivity",
    "Education",
  ]
  const filteredProjects =
    filter === "All" ? projects.slice(0, 6) : projects.filter((p) => p.category === filter).slice(0, 6)

  return (
    <section ref={ref} id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_70%_30%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_30%_70%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_70%_30%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-white/60 text-sm tracking-wider font-light">SELECTED WORKS</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured{" "}
            <span className="relative">
              Projects
              <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-white/10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h2>

          {/* Enhanced Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`group/filter relative px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 overflow-hidden ${
                  filter === category ? "bg-white text-black border-white" : "bg-white/5 text-white/70 border-white/20"
                }`}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ zIndex: 10 }}
                data-cursor-hover
              >
                {filter !== category && (
                  <div className="absolute inset-0 bg-white transform translate-x-full group-hover/filter:translate-x-0 transition-transform duration-300 ease-out"></div>
                )}
                <span
                  className={`relative z-10 ${filter !== category ? "group-hover/filter:text-black transition-colors duration-300" : ""}`}
                >
                  {category}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              layout
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                {/* Enhanced Project Image - Clickable */}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 cursor-pointer"
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  data-cursor-hover
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover contrast-110 brightness-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />

                  {/* Overlay Pattern */}
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[size:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ backgroundPosition: ["0px 0px", "30px 30px"] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.a>

                {/* Project Info Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  {/* Top Info */}
                  <div className="flex justify-between items-start">
                    <motion.div
                      className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        x: hoveredProject === project.id ? 0 : -20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white/80 text-xs font-medium">{project.year}</span>
                    </motion.div>

                    <motion.div
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        x: hoveredProject === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="text-white/80 text-xs font-medium">{project.category}</span>
                    </motion.div>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-white mb-2 block pointer-events-auto cursor-pointer hover:text-white/80 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      data-cursor-hover
                    >
                      {project.title}
                    </motion.a>

                    <motion.p
                      className="text-white/70 text-sm mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20,
                      }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Hover Actions */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                >
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github relative p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 overflow-hidden"
                      style={{ zIndex: 20 }}
                      data-cursor-hover
                    >
                      {/* Right to left fill animation */}
                      <div className="absolute inset-0 bg-white transform translate-x-full group-hover/github:translate-x-0 transition-transform duration-300 ease-out rounded-full"></div>
                      <Github className="w-6 h-6 text-white group-hover/github:text-black transition-colors duration-300 relative z-10" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/demo relative p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 overflow-hidden"
                      style={{ zIndex: 20 }}
                      data-cursor-hover
                    >
                      {/* Right to left fill animation */}
                      <div className="absolute inset-0 bg-black transform translate-x-full group-hover/demo:translate-x-0 transition-transform duration-300 ease-out rounded-full"></div>
                      <ExternalLink className="w-6 h-6 text-white transition-colors duration-300 relative z-10" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects">
            <button
              className="group/viewall relative px-8 py-3 border border-white/30 text-white font-medium rounded-full overflow-hidden"
              style={{ zIndex: 10 }}
              data-cursor-hover
            >
              {/* Right to left fill animation */}
              <div className="absolute inset-0 bg-white transform translate-x-full group-hover/viewall:translate-x-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 group-hover/viewall:text-black transition-colors duration-300">
                View All Projects
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
