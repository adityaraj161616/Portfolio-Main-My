"use client"

import { ArrowLeft, ExternalLink, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LinkNotAvailablePage() {
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

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* Custom Cursor */}
      {!isMobile && <CustomCursor />}

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <AlertCircle className="w-12 h-12 text-white/60" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Live Demo Not Available
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-white/60 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            This project's live demo is currently not available. The application is either in development, requires
            specific setup, or is temporarily offline. Please check back later or view the source code on GitHub.
          </motion.p>

          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-sm font-medium">Coming Soon</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button asChild className="bg-white text-black hover:bg-white/90 border-0 relative z-10" data-cursor-hover>
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-black relative z-10"
              data-cursor-hover
            >
              <Link href="/#contact">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-white">Why isn't the demo available?</h3>
            <div className="text-white/60 text-sm space-y-2">
              <p>• The project may require specific environment variables or API keys</p>
              <p>• It could be a backend-only application without a web interface</p>
              <p>• The demo might be temporarily offline for maintenance</p>
              <p>• Some projects are designed to run locally rather than on the web</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
