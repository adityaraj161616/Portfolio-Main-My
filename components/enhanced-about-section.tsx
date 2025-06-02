"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, MapPin, Calendar, Award } from "lucide-react"

export function EnhancedAboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadResume = () => {
    try {
      // Create a proper download link
      const link = document.createElement("a")
      link.href = "/resume/Aditya_Raj_Resume.pdf"
      link.download = "Aditya_Raj_Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      // Add to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Success feedback
      console.log("Resume download initiated")
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open("/resume/Aditya_Raj_Resume.pdf", "_blank")
    }
  }

  const stats = [
    { label: "Projects Completed", value: "5+", icon: Award },
    { label: "Technologies Mastered", value: "12+", icon: Calendar },
    { label: "Years of Learning", value: "3+", icon: MapPin },
  ]

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_30%_50%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_70%_50%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_30%_50%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-white/10"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Border Frames */}
              <motion.div
                className="absolute inset-0 border border-white/20 rounded-2xl"
                initial={{ rotate: 0, scale: 1 }}
                animate={isInView ? { rotate: 3, scale: 1.02 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div
                className="absolute inset-2 border border-white/10 rounded-2xl"
                initial={{ rotate: 0, scale: 1 }}
                animate={isInView ? { rotate: -2, scale: 0.98 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
                initial={{ rotate: 0, scale: 0.9 }}
                animate={isInView ? { rotate: -3, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img
                  src="/images/profile-photo.jpg"
                  alt="Aditya Raj"
                  className="w-full h-full object-cover contrast-110 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Overlay Pattern */}
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_52%)] bg-[size:20px_20px]"
                  animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-white">3+</div>
                  <div className="text-xs text-white/60">Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                  <span className="text-white/60 text-sm tracking-wider font-light">ABOUT ME</span>
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Passionate about creating{" "}
                <span className="relative">
                  digital experiences
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-white/20"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ originX: 0 }}
                  />
                </span>
              </motion.h2>
            </div>

            {/* Enhanced Description */}
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

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                >
                  <stat.icon className="w-5 h-5 text-white/60 mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Location & Status */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <p className="text-white/40 text-sm">LOCATION</p>
                </div>
                <p className="text-white font-semibold">Ranchi, Jharkhand</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white/40 text-sm">STATUS</p>
                </div>
                <p className="text-green-400 font-semibold">Available for work</p>
              </div>
            </motion.div>

            {/* Enhanced Download Button */}
            <motion.button
              className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:bg-white/90 transition-colors"
              data-cursor-hover
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 transition-colors" />
              <span className="transition-colors">Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
