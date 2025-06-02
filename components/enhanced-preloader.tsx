"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface EnhancedPreloaderProps {
  onComplete: () => void
}

interface Particle {
  x: number
  y: number
  scale: number
  duration: number
  delay: number
  animateY: number
}

export function EnhancedPreloader({ onComplete }: EnhancedPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [stage, setStage] = useState(0)
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Only run on client
    const width = window.innerWidth
    const height = window.innerHeight
    setDimensions({ width, height })

    // Generate particles only once on mount
    setParticles(
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        scale: Math.random() * 2 + 1,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
        animateY: Math.random() * height,
      }))
    )

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      // Do NOT regenerate particles here to avoid hydration mismatch
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000)
    const timer2 = setTimeout(() => setStage(2), 2500)
    const timer3 = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Floating Particles */}
          {dimensions.width > 0 &&
            particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: p.x,
                  y: p.y,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: [null, p.animateY],
                  opacity: [0, 0.6, 0],
                  scale: [0, p.scale, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center">
            {/* Glow Effect */}
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-white blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: stage >= 1 ? [0, 0.1, 0.05, 0] : [0, 0.15, 0.1],
                scale: stage >= 1 ? [0, 2, 3, 0] : [0, 1.5, 2],
              }}
              transition={{
                duration: stage >= 1 ? 2 : 3,
                times: stage >= 1 ? [0, 0.3, 0.7, 1] : [0, 0.5, 1],
                ease: "easeInOut",
              }}
            />

            {/* A Letter */}
            <motion.div
              className="absolute text-9xl md:text-[12rem] font-black text-white select-none"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ x: 0, y: 0, rotateY: 0, scale: 0.5, opacity: 0 }}
              animate={{
                x: stage >= 1 ? [-50, -150] : [0, 0],
                y: stage >= 1 ? [0, -20] : [0, 0],
                rotateY: stage >= 1 ? [0, -45] : [0, 15, 0],
                scale: stage >= 1 ? [1, 1.2, 0.8] : [0.5, 1.2, 1],
                opacity: stage >= 2 ? [1, 0] : [0, 1, 1],
              }}
              transition={{
                duration: stage >= 1 ? 1.5 : 2,
                times: stage >= 1 ? [0, 0.6, 1] : [0, 0.4, 1],
                ease: "easeInOut",
              }}
            >
              A
            </motion.div>

            {/* R Letter */}
            <motion.div
              className="absolute text-9xl md:text-[12rem] font-black text-white select-none"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ x: 0, y: 0, rotateY: 0, scale: 0.5, opacity: 0 }}
              animate={{
                x: stage >= 1 ? [50, 150] : [0, 0],
                y: stage >= 1 ? [0, 20] : [0, 0],
                rotateY: stage >= 1 ? [0, 45] : [0, -15, 0],
                scale: stage >= 1 ? [1, 1.2, 0.8] : [0.5, 1.2, 1],
                opacity: stage >= 2 ? [1, 0] : [0, 1, 1],
              }}
              transition={{
                duration: stage >= 1 ? 1.5 : 2,
                times: stage >= 1 ? [0, 0.6, 1] : [0, 0.4, 1],
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              R
            </motion.div>

            {/* Center Connecting Line */}
            <motion.div
              className="absolute w-px h-24 bg-white"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage >= 1 ? [0, 1, 0] : [0],
                opacity: stage >= 1 ? [0, 0.8, 0] : [0],
              }}
              transition={{
                duration: 1,
                delay: stage >= 1 ? 0.5 : 0,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
            transition={{ duration: 3, times: [0, 0.3, 0.8, 1] }}
          >
            LOADING EXPERIENCE
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-px bg-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, times: [0, 0.2, 0.9, 1] }}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
