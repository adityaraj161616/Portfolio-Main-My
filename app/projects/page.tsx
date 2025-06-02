"use client"

import { ArrowLeft, Github, Calendar, Code } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Hide default cursor on desktop only
  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    return () => {
      document.body.style.cursor = "auto"
    }
  }, [isMobile])

  const projects = [
    {
      title: "GaiaX – AI-Powered Virtual Assistant",
      description:
        "Built a voice-controlled virtual assistant using HTML, CSS, and JavaScript, integrating Weather API, News API, and Gemini AI API for real-time information retrieval and AI-driven responses. Implemented speech recognition, smart command handling, and local storage for history management.",
      longDescription:
        "GaiaX is an advanced AI-powered virtual assistant that combines voice recognition technology with multiple APIs to provide users with real-time information and intelligent responses. The project showcases modern web development techniques and API integration skills.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API", "Gemini AI", "Speech Recognition"],
      images: ["/projects/gaiax-1.png", "/projects/gaiax-2.png"],
      repoUrl: "https://github.com/adityaraj161616/GaiaX-VirtualAssistant",
      category: "AI & Machine Learning",
      date: "January 2025",
      status: "Completed",
      features: [
        "Voice-controlled interface with speech recognition",
        "Real-time weather updates via Weather API",
        "Latest news integration through News API",
        "AI-powered responses using Gemini AI",
        "Local storage for conversation history",
        "Smart command processing and routing",
      ],
    },
    {
      title: "Sydney Events Scraper – Web-Based Aggregation Tool",
      description:
        "Developed a Node.js-based scraper using Cheerio and Axios to fetch and store Sydney event data in MongoDB. Created a React.js frontend to display events with filters, enhancing user navigation and data visibility.",
      longDescription:
        "A comprehensive web scraping solution that aggregates event data from multiple sources in Sydney, providing users with a centralized platform to discover local events with advanced filtering capabilities.",
      tags: ["Node.js", "Cheerio", "Axios", "React.js", "MongoDB"],
      images: ["/projects/sydney-events-1.png", "/projects/sydney-events-2.png"],
      repoUrl: "https://github.com/adityaraj161616/SydneyEventSrapper",
      category: "Web Scraping",
      date: "May 2025",
      status: "Completed",
      features: [
        "Automated web scraping with Cheerio and Axios",
        "MongoDB database for efficient data storage",
        "React.js frontend with modern UI components",
        "Advanced filtering and search functionality",
        "Real-time data updates and synchronization",
        "Responsive design for all device types",
      ],
    },
    {
      title: "RailPoint – Smart Solutions for Modern Railways",
      description:
        "Built a full-stack railway platform using HTML, CSS, JS, Node.js, and MongoDB for real-time train tracking and ticketing. Integrated dynamic features like user authentication, train tracking, ticket management, coach crowd status, optimizing railway operations for efficiency and ease of use.",
      longDescription:
        "RailPoint is a comprehensive railway management system that modernizes train operations with real-time tracking, digital ticketing, and crowd management features, enhancing both operational efficiency and passenger experience.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/railpoint-1.png", "/projects/railpoint-2.png"],
      repoUrl: "https://github.com/adityaraj161616/Rail-system-full-stack",
      category: "Full-Stack Web Application",
      date: "January 2025 - Present",
      status: "In Progress",
      features: [
        "Real-time train tracking and location updates",
        "Digital ticketing system with QR codes",
        "User authentication and profile management",
        "Coach crowd status monitoring",
        "Admin dashboard for railway operations",
        "Mobile-responsive design for passengers",
      ],
    },
    {
      title: "Epeolodies – Full-Stack eCommerce Website",
      description:
        "Built a responsive eCommerce site with HTML, CSS, JS, Node.js, and MongoDB, supporting user auth, cart, and Payment Features. Implemented dynamic product filtering and modular backend routes for scalable and maintainable development.",
      longDescription:
        "Epeolodies is a modern eCommerce platform featuring a complete online shopping experience with secure payment processing, inventory management, and a user-friendly interface designed for optimal conversion rates.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/epeolodies-1.png", "/projects/epeolodies-2.png", "/projects/epeolodies-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Epeolodies-E-commerce",
      category: "E-Commerce",
      date: "May 2025",
      status: "Completed",
      features: [
        "Complete user authentication system",
        "Shopping cart with persistent storage",
        "Secure payment gateway integration",
        "Dynamic product filtering and search",
        "Admin panel for inventory management",
        "Order tracking and management system",
      ],
    },
    {
      title: "Lunox Studio – Modern Creative Agency Website",
      description:
        "Developed a premium dark-themed creative agency site using React 18, Tailwind CSS, Framer Motion, and TypeScript, inspired by Cuberto's interactive design language. Engineered a cinematic hero section with fullscreen video background, staggered text animations, and parallax effects.",
      longDescription:
        "Lunox Studio represents the pinnacle of modern web design, combining cutting-edge technologies with sophisticated animations to create an immersive digital experience. This premium creative agency website showcases advanced React development skills and performance optimization techniques.",
      tags: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Performance Optimization"],
      images: ["/projects/lunox-1.png", "/projects/lunox-2.png"],
      repoUrl: "https://github.com/adityaraj161616/Lunox-Motion-landing-page",
      category: "Creative Web Design",
      date: "June 2025",
      status: "Completed",
      features: [
        "Cinematic hero section with fullscreen video background",
        "Staggered text animations and parallax effects",
        "Custom cursor interactions and micro-animations",
        "Scroll-based transitions for immersive UX",
        "60fps performance optimization with lazy loading",
        "WCAG 2.1 AA compliance with accessibility features",
        "95+ Lighthouse scores across all metrics",
        "<1.5s First Contentful Paint and <2.5s LCP",
      ],
    },
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Web Scraping",
    "Full-Stack Web Application",
    "E-Commerce",
    "Creative Web Design",
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "about") {
      window.location.href = "/#"
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor */}
      {!isMobile && <CustomCursor />}

      {/* Navigation */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/70 transition-colors"
            data-cursor-hover
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-white" />
            <span className="font-bold text-lg text-white">Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">My Projects</h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              A showcase of my technical skills and creative solutions. Each project represents a unique challenge and
              demonstrates my growth as a full-stack developer.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/20"
                  data-cursor-hover
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  images={project.images}
                  repoUrl={project.repoUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Information */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Details</h2>
            <p className="text-white/60">Deep dive into each project</p>
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <div className="relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <Badge variant="outline" className="border-white/30 text-white bg-white/10" data-cursor-hover>
                          {project.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <Badge variant="secondary" className="bg-white/10 text-white border border-white/20">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-white/80 mb-6 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-white/10 text-white border border-white/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="space-y-4">
                        <Button
                          asChild
                          className="w-full bg-white text-black hover:bg-white/90 border-0"
                          data-cursor-hover
                        >
                          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </Link>
                        </Button>

                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h5 className="font-semibold mb-2 text-white">Project Stats</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/60">Technologies:</span>
                              <span className="text-white">{project.tags.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Category:</span>
                              <span className="text-white">{project.category}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Status:</span>
                              <span className={project.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-white/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Interested in Working Together?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's connect and see how we can
              create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-white text-black hover:bg-white/90 border-0"
                data-cursor-hover
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:text-black hover:bg-white hover:border-white"
                data-cursor-hover
                onClick={() => scrollToSection("resume")}
              >
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Quick Links */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">ADITYA RAJ</h3>
              <p className="text-white/60 leading-relaxed">
                Creative developer crafting digital experiences through innovative design and clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-white/60 hover:text-white transition-colors text-left"
                  data-cursor-hover
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-white/60 hover:text-white transition-colors text-left"
                  data-cursor-hover
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-white/60 hover:text-white transition-colors text-left"
                  data-cursor-hover
                >
                  Contact
                </button>
                <Link
                  href="/resume"
                  target="_blank"
                  className="block text-white/60 hover:text-white transition-colors"
                  data-cursor-hover
                >
                  Resume
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Services</h4>
              <div className="space-y-2">
                <p className="text-white/60">Web Development</p>
                <p className="text-white/60">UI/UX Design</p>
                <p className="text-white/60">Full-Stack Apps</p>
                <p className="text-white/60">Consulting</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-white/60">adityaraj1613@gmail.com</p>
                <p className="text-white/60">Ranchi, Jharkhand</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Aditya Raj. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white"
              data-cursor-hover
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
