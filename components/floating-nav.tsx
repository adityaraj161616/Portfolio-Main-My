"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    if (isMobile) {
      setIsOpen(false)
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-lg max-w-fit">
          <div className="absolute -inset-0.5 bg-white/10 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between min-w-[200px]">
              <Link href="/" className="font-bold text-lg">
                <span className="text-white font-black">ADITYA</span>
                <span className="text-white/60">RAJ</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <span className="text-white font-black">ADITYA</span>
                <span className="text-white/60">RAJ</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                asChild
                className="ml-2 bg-white text-black hover:bg-white/90 border-0 whitespace-nowrap"
              >
                <Link href="/resume" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-white/70 transition-colors"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-6 bg-white text-black hover:bg-white/90 border-0">
              <Link href="/resume" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
