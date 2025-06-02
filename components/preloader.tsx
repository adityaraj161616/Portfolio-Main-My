"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 3500) // Slightly longer to allow for the enhanced animation

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background pulse effect */}
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-white/5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 2, 3, 1],
                opacity: [0, 0.2, 0.1, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.6, 1],
                ease: "easeInOut",
              }}
            />

            {/* A Letter */}
            <motion.div
              className="absolute text-9xl md:text-[12rem] font-black text-white"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ x: 0, y: 0, rotateY: 0, scale: 1, opacity: 0 }}
              animate={{
                x: [-50, -120],
                y: [0, 0],
                rotateY: [0, -60],
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.8, 1],
                ease: "easeInOut",
              }}
            >
              A
            </motion.div>

            {/* R Letter */}
            <motion.div
              className="absolute text-9xl md:text-[12rem] font-black text-white"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ x: 0, y: 0, rotateY: 0, scale: 1, opacity: 0 }}
              animate={{
                x: [50, 120],
                y: [0, 0],
                rotateY: [0, 60],
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.8, 1],
                ease: "easeInOut",
              }}
            >
              R
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-white blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.2, 0.1, 0],
                scale: [0, 1, 1.5, 0],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.7, 1],
                ease: "easeInOut",
              }}
            />

            {/* Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200,
                  scale: [0, Math.random() * 2 + 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  delay: 1 + Math.random() * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
