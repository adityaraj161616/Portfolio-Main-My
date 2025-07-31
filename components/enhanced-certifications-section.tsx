"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ExternalLink, Eye, X, Calendar, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// GSAP will be loaded dynamically
declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

const certificationsData = [
  {
    id: 1,
    title: "Meta Front-end Developer",
    provider: "Meta",
    date: "2024",
    credentialId: "META-FRONTEND-2024",
    verifyUrl: "https://coursera.org/verify/META-FRONTEND-2024",
    certificateImage: "/certificates/meta-frontend-cert.png",
    category: "Frontend Development",
    level: "Professional",
    skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
    color: "from-blue-500/20 to-blue-600/20",
    providerLogo: "🔵",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced React",
    provider: "Meta",
    date: "2024",
    credentialId: "META-REACT-ADV-2024",
    verifyUrl: "https://coursera.org/verify/META-REACT-ADV-2024",
    certificateImage: "/certificates/react-advanced-cert.png",
    category: "Frontend Development",
    level: "Advanced",
    skills: ["React", "Hooks", "Context", "Performance"],
    color: "from-blue-500/20 to-blue-600/20",
    providerLogo: "🔵",
    featured: true,
  },
  {
    id: 3,
    title: "Programming in Python",
    provider: "Meta",
    date: "2024",
    credentialId: "META-PYTHON-2024",
    verifyUrl: "https://coursera.org/verify/META-PYTHON-2024",
    certificateImage: "/certificates/python-cert.png",
    category: "Programming",
    level: "Intermediate",
    skills: ["Python", "OOP", "Data Structures", "Algorithms"],
    color: "from-blue-500/20 to-blue-600/20",
    providerLogo: "🔵",
    featured: false,
  },
  {
    id: 4,
    title: "Next.js from Scratch",
    provider: "Packt",
    date: "2024",
    credentialId: "PACKT-NEXTJS-2024",
    verifyUrl: "https://packt.com/verify/PACKT-NEXTJS-2024",
    certificateImage: "/certificates/nextjs-cert.png",
    category: "Full-Stack Development",
    level: "Intermediate",
    skills: ["Next.js", "React", "SSR", "API Routes"],
    color: "from-green-500/20 to-green-600/20",
    providerLogo: "📚",
    featured: false,
  },
  {
    id: 5,
    title: "Internet Of Things",
    provider: "FICE",
    date: "2024",
    credentialId: "FICE-IOT-2024",
    verifyUrl: "https://fice.edu/verify/FICE-IOT-2024",
    certificateImage: "/certificates/iot-cert.png",
    category: "IoT & Hardware",
    level: "Intermediate",
    skills: ["IoT", "Sensors", "Arduino", "Connectivity"],
    color: "from-purple-500/20 to-purple-600/20",
    providerLogo: "🏫",
    featured: false,
  },
  {
    id: 6,
    title: "Developing Backend Apps with Node.js and Express",
    provider: "IBM",
    date: "2024",
    credentialId: "IBM-NODE-EXPRESS-2024",
    verifyUrl: "https://coursera.org/verify/IBM-NODE-EXPRESS-2024",
    certificateImage: "/certificates/nodejs-cert.png",
    category: "Backend Development",
    level: "Professional",
    skills: ["Node.js", "Express", "APIs", "Databases"],
    color: "from-blue-600/20 to-blue-800/20",
    providerLogo: "🔷",
    featured: true,
  },
  {
    id: 7,
    title: "Principles of UI/UX design",
    provider: "Meta",
    date: "2024",
    credentialId: "META-UIUX-2024",
    verifyUrl: "https://coursera.org/verify/META-UIUX-2024",
    certificateImage: "/certificates/ux-ui-cert.png",
    category: "Design",
    level: "Professional",
    skills: ["UI Design", "UX Research", "Prototyping", "Figma"],
    color: "from-blue-500/20 to-blue-600/20",
    providerLogo: "🔵",
    featured: true,
  },
  {
    id: 8,
    title: "Figma",
    provider: "Google",
    date: "2024",
    credentialId: "GOOGLE-FIGMA-2024",
    verifyUrl: "https://coursera.org/verify/GOOGLE-FIGMA-2024",
    certificateImage: "/certificates/figma-cert.png",
    category: "Design",
    level: "Intermediate",
    skills: ["Figma", "Prototyping", "Design Systems", "Collaboration"],
    color: "from-red-500/20 to-yellow-500/20",
    providerLogo: "🔴",
    featured: false,
  },
  {
    id: 9,
    title: "Full Stack",
    provider: "Meta",
    date: "2024",
    credentialId: "META-FULLSTACK-2024",
    verifyUrl: "https://coursera.org/verify/META-FULLSTACK-2024",
    certificateImage: "/certificates/fullstack-cert.png",
    category: "Full-Stack Development",
    level: "Professional",
    skills: ["React", "Node.js", "Databases", "APIs"],
    color: "from-blue-500/20 to-blue-600/20",
    providerLogo: "🔵",
    featured: true,
  },
  {
    id: 10,
    title: "AWS Fundamentals",
    provider: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-FUNDAMENTALS-2024",
    verifyUrl: "https://aws.amazon.com/verify/AWS-FUNDAMENTALS-2024",
    certificateImage: "/certificates/aws-cert.png",
    category: "Cloud Computing",
    level: "Intermediate",
    skills: ["AWS", "Cloud", "EC2", "S3"],
    color: "from-orange-500/20 to-orange-600/20",
    providerLogo: "🟠",
    featured: false,
  },
  {
    id: 11,
    title: "Fundamentals of AI Agents Using RAG and Langchain",
    provider: "IBM",
    date: "2024",
    credentialId: "IBM-AI-RAG-2024",
    verifyUrl: "https://coursera.org/verify/IBM-AI-RAG-2024",
    certificateImage: "/certificates/ai-rag-cert.png",
    category: "AI & Machine Learning",
    level: "Advanced",
    skills: ["AI", "RAG", "Langchain", "LLMs"],
    color: "from-blue-600/20 to-blue-800/20",
    providerLogo: "🔷",
    featured: true,
  },
]

export function EnhancedCertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const certificationsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const [showCertificate, setShowCertificate] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = [
    "All",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Design",
    "AI & Machine Learning",
    "Cloud Computing",
    "Programming",
    "IoT & Hardware",
  ]

  const filteredCertifications =
    filter === "All" ? certificationsData : certificationsData.filter((cert) => cert.category === filter)

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

      if (!gsap || !certificationsRef.current) return

      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Set initial states
      gsap.set(".cert-card", {
        y: 120,
        opacity: 0,
        rotationX: 45,
        scale: 0.8,
        transformOrigin: "center bottom",
      })

      gsap.set(".cert-badge", {
        scale: 0,
        rotation: -180,
      })

      gsap.set(".cert-skills", {
        x: -30,
        opacity: 0,
      })

      gsap.set(".cert-provider", {
        y: 20,
        opacity: 0,
      })

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: certificationsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate cards with 3D effect
      tl.to(".cert-card", {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      })
        .to(
          ".cert-badge",
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
          ".cert-provider",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .to(
          ".cert-skills",
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.5",
        )

      // Enhanced hover animations
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const hoverTl = gsap.timeline({ paused: true })
        const glowElement = card.querySelector(".cert-glow")
        const badgeElement = card.querySelector(".cert-badge")
        const skillsElements = card.querySelectorAll(".skill-tag")

        hoverTl
          .to(card, {
            y: -20,
            scale: 1.05,
            rotationY: 8,
            rotationX: -5,
            duration: 0.5,
            ease: "power2.out",
          })
          .to(
            glowElement,
            {
              opacity: 0.6,
              scale: 1.2,
              duration: 0.5,
              ease: "power2.out",
            },
            0,
          )
          .to(
            badgeElement,
            {
              rotation: 360,
              scale: 1.1,
              duration: 0.6,
              ease: "power2.out",
            },
            0.1,
          )
          .to(
            skillsElements,
            {
              y: -3,
              scale: 1.05,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out",
            },
            0.2,
          )

        card.addEventListener("mouseenter", () => hoverTl.play())
        card.addEventListener("mouseleave", () => hoverTl.reverse())
      })

      // Floating animation for featured certificates
      gsap.to(".featured-cert", {
        y: -8,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      })

      // Pulse animation for provider logos
      gsap.to(".provider-logo", {
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      // Shimmer effect on cards
      gsap.to(".cert-shimmer", {
        x: "300%",
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 4,
        stagger: 0.3,
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
  }, [isInView, filter])

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Professional":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      case "Advanced":
        return "text-purple-400 bg-purple-400/10 border-purple-400/20"
      case "Intermediate":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      default:
        return "text-white/60 bg-white/10 border-white/20"
    }
  }

  return (
    <section ref={ref} id="certifications" className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_50%_50%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_80%_20%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_20%_80%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_50%_50%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating Achievement Icons */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {["🏆", "🎖️", "⭐", "🥇"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={certificationsRef}>
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
              <span className="text-white/60 text-sm tracking-wider font-light">PROFESSIONAL CREDENTIALS</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Certifications &{" "}
            <span className="relative">
              Achievements
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
                  filter === category
                    ? "bg-white text-black border-white"
                    : "bg-white/5 text-white/70 border-white/20 hover:border-white/40"
                }`}
                onClick={() => setFilter(category)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

        {/* Enhanced Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`cert-card group relative ${cert.featured ? "featured-cert" : ""}`}
            >
              {/* Enhanced Card Background */}
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-white/30 overflow-hidden">
                {/* Glow Effect */}
                <div
                  className={`cert-glow absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl blur opacity-0 transition-all duration-500`}
                />

                {/* Shimmer Effect */}
                <div className="cert-shimmer absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full" />

                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="cert-badge bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with provider logo and level */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="provider-logo text-2xl">{cert.providerLogo}</div>
                      <div className="cert-provider">
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}
                        >
                          {cert.level}
                        </div>
                      </div>
                    </div>
                    <div className="cert-badge">
                      <Award className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Certification title */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors leading-tight text-white/90">
                    {cert.title}
                  </h3>

                  {/* Provider and date */}
                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Shield className="w-4 h-4" />
                      <span className="font-medium">{cert.provider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar className="w-4 h-4" />
                      <span>Completed: {cert.date}</span>
                    </div>
                    <div className="text-xs text-white/40">
                      <span className="font-medium">ID:</span>
                      <span className="font-mono ml-1">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="cert-skills mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="skill-tag px-2 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-auto pt-4 border-t border-white/10 space-y-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-white/70 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40"
                      onClick={() => setShowCertificate(cert.id)}
                      data-cursor-hover
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white transition-colors w-full py-2"
                      data-cursor-hover
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {certificationsData.length}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Certifications</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {new Set(certificationsData.map((cert) => cert.provider)).size}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Providers</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                {certificationsData.filter((cert) => cert.featured).length}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Featured</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Certificate Modal */}
      {showCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotationY: -15 }}
            animate={{ scale: 1, opacity: 1, rotationY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotationY: 15 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-900 rounded-2xl border border-white/20 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20"
                onClick={() => setShowCertificate(null)}
                data-cursor-hover
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="w-full h-auto bg-white/5 rounded-lg flex items-center justify-center min-h-[400px]">
                <div className="text-center text-white/60">
                  <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">Certificate Preview</p>
                  <p className="text-sm">{certificationsData.find((cert) => cert.id === showCertificate)?.title}</p>
                  <p className="text-xs mt-2 opacity-60">Certificate image will be displayed here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
