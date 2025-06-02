"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadResume = () => {
    // Force download with proper headers
    const link = document.createElement("a")
    link.href = "/resume/Aditya_Raj_Resume.pdf"
    link.download = "Aditya_Raj_Resume.pdf"
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Also try opening in new tab as fallback
    setTimeout(() => {
      window.open("/resume/Aditya_Raj_Resume.pdf", "_blank")
    }, 100)
  }

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 border border-white/20 rounded-2xl"
                initial={{ rotate: 0 }}
                animate={isInView ? { rotate: 3 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5"
                initial={{ rotate: 0 }}
                animate={isInView ? { rotate: -3 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src="/images/profile-photo.jpg" alt="Aditya Raj" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-white/60 text-sm tracking-wider font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ABOUT ME
              </motion.p>

              <motion.h2
                className="text-4xl md:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Passionate about creating digital experiences
              </motion.h2>
            </div>

            <motion.div
              className="space-y-6 text-white/80 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>
                I'm a Computer Science student at O.P. Jindal University, passionate about full-stack development and
                UI/UX design. I focus on creating user-friendly and scalable web applications.
              </p>
              <p>
                With expertise in modern technologies like React, Node.js, and MongoDB, I bring ideas to life through
                clean code and thoughtful design.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="space-y-2">
                <p className="text-white/40 text-sm">LOCATION</p>
                <p className="text-white font-semibold">Ranchi, Jharkhand</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/40 text-sm">STATUS</p>
                <p className="text-green-400 font-semibold">Available for work</p>
              </div>
            </motion.div>

            <motion.button
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2"
              data-cursor-hover
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
