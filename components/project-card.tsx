"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  images: string[]
  repoUrl: string
}

export function ProjectCard({ title, description, tags, images, repoUrl }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-scroll images when hovered
  useEffect(() => {
    if (images.length <= 1 || !isHovered) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds when hovered

    return () => clearInterval(interval)
  }, [images.length, isHovered])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full flex flex-col">
          {/* Image Carousel */}
          <div className="relative overflow-hidden h-48 bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation arrows - only show on hover and if multiple images */}
            {images.length > 1 && isHovered && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                  data-cursor-hover
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                  data-cursor-hover
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    data-cursor-hover
                  />
                ))}
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-center mt-auto pt-4 border-t border-white/10">
              <Button className="bg-white text-black hover:bg-white/90 border-0 w-full" asChild data-cursor-hover>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code on GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-400" : "bg-white/30"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
