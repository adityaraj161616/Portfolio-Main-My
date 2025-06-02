"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, Github, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly at adityaraj1613@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.02),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
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
              GET IN TOUCH
            </motion.p>

            <motion.h2
              className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's Create Something Amazing
            </motion.h2>

            <motion.p
              className="text-white/80 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
              together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors focus:ring-2 focus:ring-white/20"
                      placeholder="Your name"
                      data-cursor-hover
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors focus:ring-2 focus:ring-white/20"
                      placeholder="your@email.com"
                      data-cursor-hover
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors focus:ring-2 focus:ring-white/20"
                    placeholder="Project discussion"
                    data-cursor-hover
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-colors resize-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell me about your project..."
                    data-cursor-hover
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor-hover
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-white/80">adityaraj1613@gmail.com</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-white/80">Ranchi, Jharkhand, India</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-semibold">Response Time</h3>
                  <p className="text-white/80">Usually within 24 hours</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="mailto:adityaraj1613@gmail.com"
                    className="p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                    data-cursor-hover
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/adityaraj161616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                    data-cursor-hover
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/aditya-raj16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
                    data-cursor-hover
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
