"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PopcornHover } from "./popcorn-hover"
import Link from "next/link"

export function HeroSection() {
  const [isNameHovered, setIsNameHovered] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and intro */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-white/60 text-lg font-light tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                FULL STACK DEVELOPER
              </motion.p>

              <motion.h1
                className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none cursor-pointer select-none"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                data-cursor-hover
                onMouseEnter={() => setIsNameHovered(true)}
                onMouseLeave={() => setIsNameHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", damping: 20 }}
              >
                ADITYA
              </motion.h1>

              <motion.p
                className="text-white/80 text-xl max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Building powerful web applications with modern technologies and thoughtful design.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Link href="#projects">
                <motion.button
                  className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  data-cursor-hover
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Work
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-white/60 transition-colors"
                  data-cursor-hover
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Popcorn hover effect */}
          <div className="relative h-96 lg:h-[500px] pointer-events-auto">
            <PopcornHover isHovered={isNameHovered} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/40 text-sm tracking-wider">SCROLL</p>
          <motion.div
            className="w-px h-12 bg-white/20"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
