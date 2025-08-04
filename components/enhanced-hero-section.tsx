"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { PopcornHover } from "./popcorn-hover"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile" // Import useMobile hook

export function EnhancedHeroSection() {
  const [isNameHovered, setIsNameHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMobile() // Use the hook to detect mobile

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if autoplay fails
        console.log("Autoplay prevented")
      })
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background Video/Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03),transparent_70%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_20%_50%, rgba(255,255,255,0.03), transparent 70%)",
              "radial-gradient(circle_at_80%_50%, rgba(255,255,255,0.03), transparent 70%)",
              "radial-gradient(circle_at_50%_20%, rgba(255,255,255,0.03), transparent 70%)",
              "radial-gradient(circle_at_50%_80%, rgba(255,255,255,0.03), transparent 70%)",
              "radial-gradient(circle_at_20%_50%, rgba(255,255,255,0.03), transparent 70%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="space-y-4">
              {/* Animated Role Badge */}
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="relative px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <span className="relative text-white/80 text-sm font-medium tracking-wider">
                    FULL STACK DEVELOPER
                  </span>
                </div>
              </motion.div>

              {/* Enhanced Name with Glitch Effect */}
              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none cursor-pointer select-none relative"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                data-cursor-hover
                onMouseEnter={() => setIsNameHovered(true)}
                onMouseLeave={() => setIsNameHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <span className="relative inline-block">
                  ADITYA
                  {/* Glitch Effect Layers */}
                  <motion.span
                    className="absolute inset-0 text-white/20"
                    animate={
                      isNameHovered
                        ? {
                            x: [0, -2, 2, 0],
                            y: [0, 1, -1, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ADITYA
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 text-white/10"
                    animate={
                      isNameHovered
                        ? {
                            x: [0, 1, -2, 0],
                            y: [0, -1, 1, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.15, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  >
                    ADITYA
                  </motion.span>
                </span>
              </motion.h1>

              {/* Enhanced Description */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <p className="text-white/80 text-xl max-w-md leading-relaxed">
                  Building powerful web applications with modern technologies and thoughtful design.
                </p>

                {/* Animated Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MongoDB", "TypeScript"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-white/60 border border-white/20 rounded-full bg-white/5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Enhanced Action Buttons with Right-to-Left Fill */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="#projects">
                <motion.button
                  className="group/work relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden border border-white"
                  data-cursor-hover
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Right to left fill animation */}
                  <div className="absolute inset-0 bg-black transform translate-x-full group-hover/work:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 text-black group-hover/work:text-white transition-colors duration-300">
                    View Work
                  </span>
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  className="group/contact relative px-8 py-3 border border-white/30 text-white font-semibold rounded-full overflow-hidden"
                  data-cursor-hover
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Right to left fill animation */}
                  <div className="absolute inset-0 bg-white transform translate-x-full group-hover/contact:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 text-white group-hover/contact:text-black transition-colors duration-300">
                    Contact
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Popcorn hover effect (conditionally rendered) */}
          {!isMobile && ( // Only render PopcornHover on non-mobile devices
            <div className="relative h-96 lg:h-[500px] pointer-events-auto">
              <PopcornHover isHovered={isNameHovered} />

              {/* Ambient Light Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 60%)",
                    "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.05), transparent 60%)",
                    "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05), transparent 60%)",
                    "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.05), transparent 60%)",
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 60%)",
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-white/40 text-xs tracking-wider font-light">SCROLL TO EXPLORE</p>
          <motion.div className="relative w-6 h-10 border border-white/20 rounded-full" whileHover={{ scale: 1.1 }}>
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/40 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
