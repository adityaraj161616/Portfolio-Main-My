"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Calendar, MapPin, Code, Users, Trophy, Briefcase, Clock, Star } from "lucide-react"

// GSAP will be loaded dynamically
declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

const internshipData = [
  {
    id: 1,
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    duration: "June 2025 – July 2025",
    type: "Full-Time Internship",
    status: "Completed",
    description:
      "Built and deployed advanced full-stack applications such as DreamFrame AI (an AI image generator), TaskFlow Pro, and Blog Platform using the MERN stack and external APIs like Replicate and Google Books. Focused on backend integration, database design, JWT authentication, and dynamic UI/UX workflows. Demonstrated initiative and precision in delivering real-world software features under tight deadlines.",
    achievements: [
      "Developed DreamFrame AI with Replicate API integration",
      "Built TaskFlow Pro with advanced task management features",
      "Created Blog Platform with full CRUD operations",
      "Implemented JWT authentication and authorization",
      "Designed scalable database schemas with MongoDB",
      "Delivered projects under tight deadlines with 100% accuracy",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Replicate API", "Google Books API"],
    projects: ["DreamFrame AI", "TaskFlow Pro", "Blog Platform"],
    companyLogo: "🚀",
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
    rating: 5,
  },
  {
    id: 2,
    title: "Full Stack Development Intern",
    company: "Proxenix",
    location: "Remote",
    duration: "June 2025 – August 2025",
    type: "Full-Time Internship",
    status: "Completed",
    description:
      "Developed production-level full-stack applications, including Edureka (a Coursera-style LMS) and FeedbackPro (an AI-powered feedback platform), using Next.js, MongoDB, Express.js, and Node.js. Integrated real-time features, GSAP animations, role-based authentication, and Gemini API-based sentiment analysis into client-facing platforms. Collaborated remotely with the team on scalable, responsive solutions aligned with modern web design principles.",
    achievements: [
      "Built Edureka LMS with course management system",
      "Developed FeedbackPro with AI-powered sentiment analysis",
      "Integrated real-time features using WebSocket technology",
      "Implemented role-based authentication system",
      "Created responsive designs with GSAP animations",
      "Collaborated effectively in remote team environment",
    ],
    technologies: ["Next.js", "MongoDB", "Express.js", "Node.js", "GSAP", "Gemini API", "WebSocket"],
    projects: ["Edureka LMS", "FeedbackPro", "Real-time Chat System"],
    companyLogo: "⚡",
    color: "from-purple-500/20 to-pink-500/20",
    featured: true,
    rating: 5,
  },
  {
    id: 3,
    title: "Front-End Web Development Intern",
    company: "CodSoft",
    location: "Remote",
    duration: "June 2024 – July 2024",
    type: "Part-Time Internship",
    status: "Completed",
    description:
      "Developed a calculator, landing page, and portfolio website using HTML, CSS, and JavaScript, ensuring responsiveness and cross-browser compatibility. Focused on UI/UX best practices, optimizing design and functionality for seamless user experience.",
    achievements: [
      "Created responsive calculator with advanced functionality",
      "Built modern landing page with smooth animations",
      "Developed portfolio website with interactive elements",
      "Ensured cross-browser compatibility across all projects",
      "Implemented UI/UX best practices and accessibility standards",
      "Optimized performance for fast loading times",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    projects: ["Interactive Calculator", "Business Landing Page", "Portfolio Website"],
    companyLogo: "💻",
    color: "from-green-500/20 to-emerald-500/20",
    featured: false,
    rating: 4,
  },
  {
    id: 4,
    title: "Front-End Web Development Intern",
    company: "TechnoHacks",
    location: "Remote",
    duration: "June 2024 – July 2024",
    type: "Part-Time Internship",
    status: "Completed",
    description:
      "Developed a countdown timer, login page, and registration form using HTML, CSS, and JavaScript, ensuring responsive and user-friendly design. Implemented best practices in front-end development, enhancing functionality, accessibility, and cross-browser compatibility.",
    achievements: [
      "Built dynamic countdown timer with multiple formats",
      "Created secure login and registration forms",
      "Implemented form validation and error handling",
      "Enhanced accessibility with ARIA labels and semantic HTML",
      "Optimized for mobile-first responsive design",
      "Applied modern CSS techniques and animations",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Accessibility"],
    projects: ["Countdown Timer", "Authentication System", "Form Components"],
    companyLogo: "🔧",
    color: "from-orange-500/20 to-red-500/20",
    featured: false,
    rating: 4,
  },
]

export function EnhancedInternshipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const internshipsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const [activeInternship, setActiveInternship] = useState<number | null>(null)

  useEffect(() => {
    // Load GSAP dynamically
    const loadGSAP = async () => {
      if (typeof window !== "undefined" && !window.gsap) {
        try {
          const gsapScript = document.createElement("script")
          gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          gsapScript.async = true

          const scrollTriggerScript = document.createElement("script")
          scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          scrollTriggerScript.async = true

          document.head.appendChild(gsapScript)
          document.head.appendChild(scrollTriggerScript)

          await Promise.all([
            new Promise((resolve) => {
              gsapScript.onload = resolve
            }),
            new Promise((resolve) => {
              scrollTriggerScript.onload = resolve
            }),
          ])

          window.gsap.registerPlugin(window.ScrollTrigger)
          setGsapLoaded(true)
          initAnimations()
        } catch (error) {
          console.log("GSAP loading failed, falling back to CSS animations")
          setGsapLoaded(false)
        }
      } else if (window.gsap) {
        setGsapLoaded(true)
        initAnimations()
      }
    }

    const initAnimations = () => {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      if (!gsap || !internshipsRef.current) return

      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Set initial states
      gsap.set(".internship-card", {
        y: 150,
        opacity: 0,
        rotationX: 45,
        scale: 0.8,
        transformOrigin: "center bottom",
      })

      gsap.set(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
      })

      gsap.set(".timeline-dot", {
        scale: 0,
        rotation: -180,
      })

      gsap.set(".company-logo", {
        scale: 0,
        rotation: 360,
      })

      gsap.set(".achievement-item", {
        x: -50,
        opacity: 0,
      })

      gsap.set(".tech-tag", {
        scale: 0,
        rotation: 180,
      })

      gsap.set(".project-badge", {
        y: 20,
        opacity: 0,
      })

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: internshipsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate timeline first
      tl.to(".timeline-line", {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
      })
        .to(
          ".timeline-dot",
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1",
        )
        .to(
          ".internship-card",
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .to(
          ".company-logo",
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        )
        .to(
          ".achievement-item",
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          ".tech-tag",
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )
        .to(
          ".project-badge",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.6",
        )

      // Enhanced hover animations
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const hoverTl = gsap.timeline({ paused: true })
        const glowElement = card.querySelector(".internship-glow")
        const logoElement = card.querySelector(".company-logo")
        const achievementItems = card.querySelectorAll(".achievement-item")
        const techTags = card.querySelectorAll(".tech-tag")

        hoverTl
          .to(card, {
            y: -25,
            scale: 1.03,
            rotationY: 5,
            rotationX: -3,
            duration: 0.6,
            ease: "power2.out",
          })
          .to(
            glowElement,
            {
              opacity: 0.8,
              scale: 1.1,
              duration: 0.6,
              ease: "power2.out",
            },
            0,
          )
          .to(
            logoElement,
            {
              rotation: 360,
              scale: 1.2,
              duration: 0.8,
              ease: "power2.out",
            },
            0.1,
          )
          .to(
            achievementItems,
            {
              x: 8,
              duration: 0.4,
              stagger: 0.05,
              ease: "power2.out",
            },
            0.2,
          )
          .to(
            techTags,
            {
              scale: 1.1,
              y: -2,
              duration: 0.3,
              stagger: 0.03,
              ease: "power2.out",
            },
            0.3,
          )

        card.addEventListener("mouseenter", () => {
          hoverTl.play()
          setActiveInternship(index)
        })
        card.addEventListener("mouseleave", () => {
          hoverTl.reverse()
          setActiveInternship(null)
        })
      })

      // Floating animation for featured internships
      gsap.to(".featured-internship", {
        y: -12,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.8,
      })

      // Pulse animation for company logos
      gsap.to(".company-logo", {
        scale: 1.1,
        duration: 2.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      })

      // Shimmer effect on cards
      gsap.to(".internship-shimmer", {
        x: "400%",
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 5,
        stagger: 0.5,
      })

      // Rating stars animation
      gsap.to(".rating-star", {
        rotation: 360,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        stagger: 0.2,
      })
    }

    if (isInView) {
      loadGSAP()
    }

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [isInView])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "In Progress":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      default:
        return "text-white/60 bg-white/10 border-white/20"
    }
  }

  const renderRatingStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`rating-star w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}`}
      />
    ))
  }

  return (
    <section ref={ref} id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_80%_20%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_20%_80%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_80%_80%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_80%_20%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Floating Work Icons */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          >
            {["💼", "🚀", "⚡", "💻", "🔧"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={internshipsRef}>
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
              <span className="text-white/60 text-sm tracking-wider font-light">PROFESSIONAL JOURNEY</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Work{" "}
            <span className="relative">
              Experience
              <motion.div
                className="absolute bottom-0 left-0 w-full h-2 bg-white/10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* Enhanced Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="timeline-line absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20 transform md:-translate-x-1/2"
          />

          {/* Internship Cards */}
          <div className="space-y-16">
            {internshipData.map((internship, index) => (
              <div
                key={internship.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`internship-card group relative ${internship.featured ? "featured-internship" : ""} ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex-row items-center gap-8`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-white/30 to-white/50 rounded-full border-4 border-black transform md:-translate-x-1/2 z-20">
                  <div className="absolute inset-1 bg-white/20 rounded-full animate-pulse" />
                </div>

                {/* Card Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  } ml-16 md:ml-0`}
                >
                  <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-white/30 overflow-hidden">
                    {/* Glow Effect */}
                    <div
                      className={`internship-glow absolute -inset-1 bg-gradient-to-r ${internship.color} rounded-2xl blur opacity-0 transition-all duration-500`}
                    />

                    {/* Shimmer Effect */}
                    <div className="internship-shimmer absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full" />

                    {/* Featured Badge */}
                    {internship.featured && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Trophy className="w-3 h-3" />
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="company-logo text-4xl">{internship.companyLogo}</div>
                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                            {internship.title}
                          </h3>
                          <div className="flex items-center gap-2 mb-2 text-white/70">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{internship.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {internship.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {internship.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(internship.status)}`}
                            >
                              {internship.status}
                            </div>
                            <div className="flex items-center gap-1">{renderRatingStars(internship.rating)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 mb-6 leading-relaxed">{internship.description}</p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="achievement-item flex items-start gap-2 text-white/80"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-white/80 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="tech-tag px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 text-white/80 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Key Projects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.projects.map((project, projectIndex) => (
                            <span
                              key={projectIndex}
                              className="project-badge px-3 py-1 text-xs font-medium text-white bg-white/15 rounded-full border border-white/30"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Clock className="w-3 h-3" />
                          {internship.type}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Users className="w-3 h-3" />
                          Team Collaboration
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4 py-4 sm:px-8 sm:py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl mx-auto max-w-fit">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {internshipData.length}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Internships</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {new Set(internshipData.map((internship) => internship.company)).size}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Companies</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                {internshipData.reduce((acc, internship) => acc + internship.projects.length, 0)}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Projects</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                {Math.round(
                  (internshipData.reduce((acc, internship) => acc + internship.rating, 0) / internshipData.length) * 10,
                ) / 10}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Avg Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Skills Developed Through Experience</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {Array.from(new Set(internshipData.flatMap((internship) => internship.technologies))).map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-white/80 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 2.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  data-cursor-hover
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
