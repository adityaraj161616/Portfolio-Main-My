"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SkillBadge } from "./skill-badge"

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 78 },
  { name: "Express.js", level: 85 },
  { name: "Git & GitHub", level: 90 },
  { name: "Figma", level: 75 },
  { name: "UI/UX Design", level: 80 },
  { name: "Bootstrap", level: 85 },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="skills" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-white/60 text-sm tracking-wider font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            TECHNICAL EXPERTISE
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Skills & Technologies
          </motion.h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillBadge name={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
