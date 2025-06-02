"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-black text-white"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              whileHover={{ scale: 1.05 }}
            >
              ADITYA RAJ
            </motion.h3>
            <p className="text-white/60 leading-relaxed">
              Creative developer crafting digital experiences through innovative design and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Contact", "Resume"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-white transition-colors"
                  data-cursor-hover
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <div className="space-y-2">
              {["Web Development", "UI/UX Design", "Full-Stack Apps", "Consulting"].map((service) => (
                <p key={service} className="text-white/60">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-white/60">adityaraj1613@gmail.com</p>
              <p className="text-white/60">Ranchi, Jharkhand</p>
            </div>
            <div className="flex gap-3 pt-2">
              <motion.a
                href="mailto:adityaraj1613@gmail.com"
                className="p-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                data-cursor-hover
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://github.com/adityaraj161616"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                data-cursor-hover
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aditya-raj16/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                data-cursor-hover
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Aditya Raj. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            data-cursor-hover
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
