"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, Github, Linkedin, MapPin, Clock, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function EnhancedContactSection() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "adityaraj1613@gmail.com",
      href: "mailto:adityaraj1613@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9931617960",
      href: "tel:+919931617960",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ranchi, Jharkhand, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Usually within 24 hours",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:adityaraj1613@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/adityaraj161616",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aditya-raj16/",
      label: "LinkedIn",
    },
  ]

  return (
    <section ref={ref} id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.02),transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_70%_30%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_30%_70%, rgba(255,255,255,0.02), transparent 50%)",
              "radial-gradient(circle_at_70%_30%, rgba(255,255,255,0.02), transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Animated Connection Lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-white/10"
            style={{
              left: `${20 + i * 20}%`,
              top: "20%",
              height: "60%",
            }}
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                <span className="text-white/60 text-sm tracking-wider font-light">GET IN TOUCH</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's Create Something{" "}
              <span className="relative">
                Amazing
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-2 bg-white/10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>
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
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                {/* Form Background Pattern */}
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.01)_51%,transparent_52%)] bg-[size:20px_20px] rounded-2xl"
                  animate={{ backgroundPosition: ["0px 0px", "20px 20px"] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="text-white/60 text-sm font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all focus:ring-2 focus:ring-white/10 backdrop-blur-sm"
                        placeholder="Your name"
                        data-cursor-hover
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="text-white/60 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all focus:ring-2 focus:ring-white/10 backdrop-blur-sm"
                        placeholder="your@email.com"
                        data-cursor-hover
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="text-white/60 text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all focus:ring-2 focus:ring-white/10 backdrop-blur-sm"
                      placeholder="Project discussion"
                      data-cursor-hover
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="text-white/60 text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-white/40 focus:outline-none transition-all resize-none focus:ring-2 focus:ring-white/10 backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                      data-cursor-hover
                    />
                  </motion.div>

                  {/* Send Message Button with left-to-right fill effect */}
                  <motion.button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-white text-black font-medium rounded-lg overflow-hidden flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    data-cursor-hover
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    {/* Animated black background */}
                    <span
                      className="absolute inset-0 bg-black z-0 transition-transform duration-300 ease-out group-hover:translate-x-0 translate-x-[-100%]"
                      aria-hidden="true"
                      style={{ transitionProperty: "transform" }}
                    />
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full relative z-10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          Send Message
                        </span>
                        <Send className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-white" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                        <method.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{method.label}</h3>
                        <p className="text-white/70 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <motion.div
                className="pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-white font-semibold mb-6 text-center">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                      data-cursor-hover
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                className="p-6 border border-green-500/20 rounded-xl bg-green-500/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h3 className="text-white font-semibold">Available for Projects</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  I'm currently accepting new projects and collaborations. Let's discuss how we can work together to
                  bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
