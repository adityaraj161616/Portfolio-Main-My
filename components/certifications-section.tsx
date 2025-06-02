"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CertificationCard } from "./certification-card"

const certifications = [
  {
    title: "HTML & CSS",
    provider: "Meta",
    date: "2024",
    credentialId: "META-HTML-CSS-2024",
    verifyUrl: "https://coursera.org/verify/META-HTML-CSS-2024",
    certificateImage: "/certificates/html-css-cert.png",
  },
  {
    title: "React JS",
    provider: "Meta",
    date: "2024",
    credentialId: "META-REACT-2024",
    verifyUrl: "https://coursera.org/verify/META-REACT-2024",
    certificateImage: "/certificates/react-cert.png",
  },
  {
    title: "Principles of UI/UX Design",
    provider: "Meta",
    date: "2024",
    credentialId: "META-UIUX-2024",
    verifyUrl: "https://coursera.org/verify/META-UIUX-2024",
    certificateImage: "/certificates/ux-ui-cert.png",
  },
  {
    title: "Figma",
    provider: "Google",
    date: "2024",
    credentialId: "GOOGLE-FIGMA-2024",
    verifyUrl: "https://coursera.org/verify/GOOGLE-FIGMA-2024",
    certificateImage: "/certificates/figma-cert.png",
  },
  {
    title: "Developing Backend Apps with Node.js and Express",
    provider: "IBM",
    date: "2024",
    credentialId: "IBM-NODE-2024",
    verifyUrl: "https://coursera.org/verify/IBM-NODE-2024",
    certificateImage: "/certificates/nodejs-cert.png",
  },
  {
    title: "Programming in Python",
    provider: "Meta",
    date: "2024",
    credentialId: "META-PYTHON-2024",
    verifyUrl: "https://coursera.org/verify/META-PYTHON-2024",
    certificateImage: "/certificates/python-cert.png",
  },
  {
    title: "Full Stack",
    provider: "Meta",
    date: "2024",
    credentialId: "META-FULLSTACK-2024",
    verifyUrl: "https://coursera.org/verify/META-FULLSTACK-2024",
    certificateImage: "/certificates/fullstack-cert.png",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="certifications" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />

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
            PROFESSIONAL CREDENTIALS
          </motion.p>

          <motion.h2
            className="text-4xl md:text-6xl font-black text-white"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Certifications
          </motion.h2>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CertificationCard
                title={cert.title}
                provider={cert.provider}
                date={cert.date}
                credentialId={cert.credentialId}
                verifyUrl={cert.verifyUrl}
                certificateImage={cert.certificateImage}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
