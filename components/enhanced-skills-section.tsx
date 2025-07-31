"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

// GSAP will be loaded dynamically
declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

const skillsData = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 95, color: "from-white/30 to-white/50" },
      { name: "CSS3", level: 92, color: "from-white/25 to-white/45" },
      { name: "JavaScript", level: 90, color: "from-white/30 to-white/50" },
      { name: "React.js", level: 88, color: "from-white/25 to-white/45" },
      { name: "Next.js", level: 85, color: "from-white/30 to-white/50" },
      { name: "Tailwind", level: 90, color: "from-white/25 to-white/45" },
      { name: "TypeScript", level: 82, color: "from-white/30 to-white/50" },
      { name: "Bootstrap", level: 88, color: "from-white/25 to-white/45" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, color: "from-white/25 to-white/45" },
      { name: "Express.js", level: 88, color: "from-white/25 to-white/45" },
      { name: "REST API", level: 90, color: "from-white/25 to-white/45" },
      { name: "JWT", level: 82, color: "from-white/30 to-white/50" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85, color: "from-white/25 to-white/45" },
      { name: "Mongoose", level: 88, color: "from-white/25 to-white/45" },
      { name: "SQL", level: 80, color: "from-white/30 to-white/50" },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 92, color: "from-white/20 to-white/40" },
      { name: "GitHub", level: 90, color: "from-white/25 to-white/45" },
      { name: "Postman", level: 85, color: "from-white/25 to-white/45" },
      { name: "VS Code", level: 95, color: "from-white/20 to-white/40" },
      { name: "Figma", level: 78, color: "from-white/30 to-white/50" },
      { name: "GSAP", level: 75, color: "from-white/35 to-white/55" },
      { name: "Framer Motion", level: 82, color: "from-white/30 to-white/50" },
    ],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    skills: [
      { name: "Gemini API", level: 80, color: "from-white/30 to-white/50" },
      { name: "Replicate API", level: 75, color: "from-white/35 to-white/55" },
      { name: "Langchain", level: 70, color: "from-white/35 to-white/55" },
    ],
  },
]

export function EnhancedSkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const skillsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [gsapLoaded, setGsapLoaded] = useState(false)

  useEffect(() => {
    // Load GSAP dynamically
    const loadGSAP = async () => {
      if (typeof window !== "undefined" && !window.gsap) {
        try {
          // Load GSAP from CDN
          const gsapScript = document.createElement("script")
          gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          gsapScript.async = true

          const scrollTriggerScript = document.createElement("script")
          scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          scrollTriggerScript.async = true

          document.head.appendChild(gsapScript)
          document.head.appendChild(scrollTriggerScript)

          // Wait for both scripts to load
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

      if (!gsap || !skillsRef.current) return

      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      // Set initial states
      gsap.set(".skill-card", {
        y: 100,
        opacity: 0,
        rotationX: 45,
        transformOrigin: "center bottom",
      })

      gsap.set(".skill-item", {
        x: -50,
        opacity: 0,
      })

      gsap.set(".progress-bar", {
        scaleX: 0,
        transformOrigin: "left center",
      })

      gsap.set(".skill-percentage", {
        opacity: 0,
        scale: 0.8,
      })

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate cards in sequence with 3D effect
      tl.to(".skill-card", {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })
        .to(
          ".skill-item",
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
          ".progress-bar",
          {
            scaleX: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "-=0.8",
        )
        .to(
          ".skill-percentage",
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
          },
          "-=0.6",
        )

      // Enhanced hover animations for cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const hoverTl = gsap.timeline({ paused: true })
        const glowElement = card.querySelector(".card-glow")
        const skillItems = card.querySelectorAll(".skill-item")

        hoverTl
          .to(card, {
            y: -15,
            scale: 1.02,
            rotationY: 5,
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            glowElement,
            {
              opacity: 0.4,
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out",
            },
            0,
          )
          .to(
            skillItems,
            {
              x: 5,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out",
            },
            0.1,
          )

        card.addEventListener("mouseenter", () => hoverTl.play())
        card.addEventListener("mouseleave", () => hoverTl.reverse())
      })

      // Magnetic effect for skill items
      document.querySelectorAll(".skill-item").forEach((item) => {
        const element = item as HTMLElement

        element.addEventListener("mousemove", (e) => {
          const rect = element.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2

          gsap.to(element, {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.3)",
          })
        })
      })

      // Floating animation for category icons
      gsap.to(".category-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })

      // Shimmer effect on progress bars
      gsap.to(".progress-shimmer", {
        x: "200%",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 3,
        stagger: 0.2,
      })
    }

    if (isInView) {
      loadGSAP()
    }

    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [isInView])

  return (
    <section ref={ref} id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background with GSAP animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_20%_80%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_80%_20%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_20%_80%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Floating Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={skillsRef}>
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
              <span className="text-white/60 text-sm tracking-wider font-light">TECHNICAL EXPERTISE</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white mb-8"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Skills &{" "}
            <span className="relative">
              Technologies
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

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.category}
              ref={(el) => (cardsRef.current[categoryIndex] = el)}
              className="skill-card group relative"
            >
              {/* Enhanced Card Background with Glow Effect */}
              <div className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 group-hover:border-white/30 overflow-hidden">
                {/* Glow Effect */}
                <div className="card-glow absolute -inset-1 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur opacity-0 transition-all duration-500" />

                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.01)_51%,transparent_52%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <div className="relative z-10">
                  {/* Enhanced Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="category-icon text-2xl">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {category.category}
                      </h3>
                      <div className="w-12 h-0.5 bg-white/20 group-hover:bg-white/40 transition-colors mt-1" />
                    </div>
                  </div>

                  {/* Enhanced Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white/80 font-medium text-sm">{skill.name}</span>
                          <span className="skill-percentage text-white/60 text-xs font-mono bg-white/10 px-2 py-1 rounded-full">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Enhanced Progress Bar Container */}
                        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                          {/* Animated Background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/15"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: skillIndex * 0.2,
                            }}
                          />

                          {/* Progress Bar */}
                          <div
                            className={`progress-bar absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Shimmer Effect */}
                            <div className="progress-shimmer absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Category Stats */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40">{category.skills.length} Technologies</span>
                      <span className="text-white/40">
                        Avg:{" "}
                        {Math.round(
                          category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length,
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Overall Stats */}
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
                {skillsData.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Technologies</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                5
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Categories</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                3+
              </motion.div>
              <div className="text-xs text-white/60 mt-1">Years</div>
            </div>
          </div>
        </motion.div>

        {/* Skill Proficiency Legend */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <div className="inline-flex items-center gap-6 text-xs text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-white/60 rounded-full"></div>
              <span>Expert (90-100%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-white/40 rounded-full"></div>
              <span>Advanced (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 bg-white/20 rounded-full"></div>
              <span>Intermediate (70-79%)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
