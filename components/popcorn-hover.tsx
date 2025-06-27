"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Extended project list with all projects including new ones
const projects = [
  {
    id: 1,
    title: "GaiaX AI Assistant",
    image: "/projects/gaiax-1.png",
    zone: "top",
  },
  {
    id: 2,
    title: "GaiaX Features",
    image: "/projects/gaiax-2.png",
    zone: "top",
  },
  {
    id: 3,
    title: "Sydney Events Scraper",
    image: "/projects/sydney-events-1.png",
    zone: "middle",
  },
  {
    id: 4,
    title: "Sydney Events Dashboard",
    image: "/projects/sydney-events-2.png",
    zone: "middle",
  },
  {
    id: 5,
    title: "RailPoint System",
    image: "/projects/railpoint-1.png",
    zone: "bottom",
  },
  {
    id: 6,
    title: "RailPoint Interface",
    image: "/projects/railpoint-2.png",
    zone: "bottom",
  },
  {
    id: 7,
    title: "Epeolodies Commerce",
    image: "/projects/epeolodies-1.png",
    zone: "top-right",
  },
  {
    id: 8,
    title: "Epeolodies Products",
    image: "/projects/epeolodies-2.png",
    zone: "top-right",
  },
  {
    id: 9,
    title: "Epeolodies Checkout",
    image: "/projects/epeolodies-3.png",
    zone: "middle-right",
  },
  {
    id: 10,
    title: "Lunox Studio",
    image: "/projects/lunox-1.png",
    zone: "middle-right",
  },
  {
    id: 11,
    title: "Lunox Design",
    image: "/projects/lunox-2.png",
    zone: "bottom-right",
  },
  {
    id: 12,
    title: "Desai Builders",
    image: "/projects/desai-1.png",
    zone: "top",
  },
  {
    id: 13,
    title: "Desai Portfolio",
    image: "/projects/desai-2.png",
    zone: "middle",
  },
  {
    id: 14,
    title: "Desai Services",
    image: "/projects/desai-3.png",
    zone: "bottom",
  },
  {
    id: 15,
    title: "AyurSoothe",
    image: "/projects/ayur-1.png",
    zone: "top-right",
  },
  {
    id: 16,
    title: "AyurSoothe Therapies",
    image: "/projects/ayur-2.png",
    zone: "middle-right",
  },
  {
    id: 17,
    title: "AyurSoothe Booking",
    image: "/projects/ayur-3.png",
    zone: "bottom-right",
  },
  {
    id: 18,
    title: "DreamFrame AI",
    image: "/projects/dream-1.png",
    zone: "top",
  },
  {
    id: 19,
    title: "DreamFrame Gallery",
    image: "/projects/dream-2.png",
    zone: "middle",
  },
  {
    id: 20,
    title: "DreamFrame Styles",
    image: "/projects/dream-3.png",
    zone: "bottom",
  },
  {
    id: 21,
    title: "BookTracker",
    image: "/projects/book-1.png",
    zone: "top-right",
  },
  {
    id: 22,
    title: "BookTracker Library",
    image: "/projects/book-2.png",
    zone: "middle-right",
  },
  {
    id: 23,
    title: "BookTracker Progress",
    image: "/projects/book-3.png",
    zone: "bottom-right",
  },
  {
    id: 24,
    title: "TaskFlow Pro",
    image: "/projects/task-1.png",
    zone: "top",
  },
  {
    id: 25,
    title: "TaskFlow Dashboard",
    image: "/projects/task-2.png",
    zone: "middle",
  },
  {
    id: 26,
    title: "TaskFlow Analytics",
    image: "/projects/task-3.png",
    zone: "bottom",
  },
]

interface PopcornHoverProps {
  isHovered: boolean
}

export function PopcornHover({ isHovered }: PopcornHoverProps) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [positions, setPositions] = useState<
    Array<{ x: number; y: number; rotate: number; scale: number; delay: number }>
  >([])
  const [activeZone, setActiveZone] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle mouse movement to determine active zone
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate relative position (0-1)
    const relX = x / rect.width
    const relY = y / rect.height

    // Determine zone based on position
    if (relY < 0.33) {
      setActiveZone(relX < 0.5 ? "top" : "top-right")
    } else if (relY < 0.66) {
      setActiveZone(relX < 0.5 ? "middle" : "middle-right")
    } else {
      setActiveZone(relX < 0.5 ? "bottom" : "bottom-right")
    }
  }

  const handleMouseLeave = () => {
    setActiveZone(null)
  }

  // Generate dynamic positions when active zone changes
  useEffect(() => {
    if (isHovered || activeZone) {
      // Filter projects by active zone
      const zoneProjects = activeZone ? projects.filter((project) => project.zone === activeZone) : projects

      const newPositions = projects.map((project, index) => {
        // Check if this project belongs to the active zone
        const isActiveZoneProject = activeZone ? project.zone === activeZone : true

        // Create more varied and dynamic positions in a circular pattern
        const totalProjects = zoneProjects.length
        const angle = (index / totalProjects) * 2 * Math.PI
        const baseDistance = 150 + Math.random() * 80
        const distance = baseDistance + (index % 3) * 30

        // Position based on zone
        let baseX = 0,
          baseY = 0

        if (activeZone === "top") {
          baseY = -100
        } else if (activeZone === "bottom") {
          baseY = 100
        } else if (activeZone === "top-right") {
          baseX = 100
          baseY = -100
        } else if (activeZone === "bottom-right") {
          baseX = 100
          baseY = 100
        } else if (activeZone === "middle-right") {
          baseX = 100
        } else if (activeZone === "middle") {
          // Center is default
        }

        return {
          x: Math.cos(angle) * distance + baseX + (Math.random() * 40 - 20),
          y: Math.sin(angle) * distance + baseY + (Math.random() * 40 - 20),
          rotate: Math.random() * 20 - 10,
          scale: isActiveZoneProject ? 0.9 + Math.random() * 0.3 : 0,
          delay: index * 0.05, // Staggered animation
        }
      })

      setPositions(newPositions)
    }
  }, [isHovered, activeZone])

  return (
    <div ref={containerRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
      {/* Invisible overlay to detect hover on right side */}
      <div
        className="absolute inset-0 pointer-events-auto"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      <AnimatePresence>
        {(isHovered || activeZone) &&
          projects.map((project, index) => {
            const position = positions[index] || { x: 0, y: 0, rotate: 0, scale: 1, delay: 0 }
            const isActiveZoneProject = activeZone ? project.zone === activeZone : true

            if (!isActiveZoneProject && !isHovered) return null

            return (
              <motion.div
                key={project.id}
                className="absolute w-40 h-40 md:w-48 md:h-48 pointer-events-auto cursor-pointer"
                style={{
                  top: "50%",
                  left: "50%",
                  originX: 0.5,
                  originY: 0.5,
                  zIndex: hoveredProject === project.id ? 10 : 1,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: position.scale,
                  rotate: position.rotate,
                }}
                exit={{
                  scale: 0,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 150,
                  mass: 0.8,
                  delay: position.delay,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{
                  scale: position.scale * 1.2,
                  rotate: 0,
                  zIndex: 10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-white/30 shadow-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "high-quality" }}
                  />

                  {/* Project title overlay - only shows on hover */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 bg-black/70 flex items-center justify-center p-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="text-center">
                          <p className="text-white text-base font-bold mb-1">{project.title}</p>
                          <div className="bg-white/20 text-white/90 text-xs py-1 px-2 rounded-full inline-block">
                            View Project
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
      </AnimatePresence>
    </div>
  )
}
