"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "GaiaX AI Assistant",
    description: "Voice-controlled virtual assistant with AI integration",
    image: "/projects/gaiax-1.png",
    video: "/projects/gaiax-1.png", // Replace with actual video if available
    tags: ["JavaScript", "AI", "Voice Recognition"],
    github: "https://github.com/adityaraj161616/GaiaX-VirtualAssistant",
    demo: "#",
  },
  {
    id: 2,
    title: "Sydney Events Scraper",
    description: "Web scraping tool for event aggregation",
    image: "/projects/sydney-events-1.png",
    video: "/projects/sydney-events-1.png",
    tags: ["Node.js", "React", "MongoDB"],
    github: "https://github.com/adityaraj161616/SydneyEventSrapper",
    demo: "#",
  },
  {
    id: 3,
    title: "RailPoint System",
    description: "Smart railway management platform",
    image: "/projects/railpoint-1.png",
    video: "/projects/railpoint-1.png",
    tags: ["Full-Stack", "Real-time", "MongoDB"],
    github: "https://github.com/adityaraj161616/Rail-system-full-stack",
    demo: "#",
  },
  {
    id: 4,
    title: "Epeolodies Commerce",
    description: "Full-stack eCommerce platform",
    image: "/projects/epeolodies-1.png",
    video: "/projects/epeolodies-1.png",
    tags: ["E-commerce", "Payment", "Node.js"],
    github: "https://github.com/adityaraj161616/Epeolodies-E-commerce",
    demo: "#",
  },
  {
    id: 5,
    title: "Lunox Studio",
    description: "Modern creative agency website",
    image: "/projects/lunox-1.png",
    video: "/projects/lunox-1.png",
    tags: ["React", "Framer Motion", "TypeScript"],
    github: "https://github.com/adityaraj161616/Lunox-Motion-landing-page",
    demo: "https://lunox-motion-landing-page-n49gebmh3.vercel.app/",
  },
]

export function ProjectsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section ref={ref} id="projects" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-white/60 text-sm tracking-wider font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SELECTED WORKS
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                {/* Project image/video */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredProject === project.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={false}
                >
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                      data-cursor-hover
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                      data-cursor-hover
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              {/* Project info */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects">
            <motion.button
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              data-cursor-hover
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
