"use client"

import { useState, useEffect } from "react"
import { Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  images: string[]
  repoUrl: string
  demoUrl?: string
}

export function ProjectCard({ title, description, tags, images, repoUrl, demoUrl }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageHovered, setIsImageHovered] = useState(false)

  // Auto-scroll images when hovered
  useEffect(() => {
    if (images.length <= 1 || !isImageHovered) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 2000) // Change image every 2 seconds when hovered

    return () => clearInterval(interval)
  }, [images.length, isImageHovered])

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
      <div className="relative h-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/30">
        <div className="relative h-full flex flex-col">
          {/* Image Carousel - Clickable */}
          <a
            href={demoUrl || repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden h-48 bg-black cursor-pointer"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
            data-cursor-hover
          >
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
            {images.length > 1 && isImageHovered && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                  data-cursor-hover
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    nextImage()
                  }}
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
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
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
          </a>

          <div className="p-6 flex-grow">
            <a
              href={demoUrl || repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold mb-2 text-white hover:text-white/80 transition-colors cursor-pointer block"
              data-cursor-hover
            >
              {title}
            </a>
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

            <div className="flex gap-2 mt-auto pt-4 border-t border-white/10">
              {demoUrl && (
                <button
                  className="group/demo relative flex-1 px-4 py-2 bg-white text-black font-medium rounded-lg overflow-hidden border border-white"
                  onClick={() => window.open(demoUrl, "_blank")}
                  data-cursor-hover
                >
                  {/* Right to left fill animation */}
                  <div className="absolute inset-0 bg-black transform translate-x-full group-hover/demo:translate-x-0 transition-transform duration-300 ease-out"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2 text-black group-hover/demo:text-white transition-colors duration-300">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </div>
                </button>
              )}
              <button
                className={`group/code relative px-4 py-2 border border-white/30 text-white font-medium rounded-lg overflow-hidden ${
                  demoUrl ? "flex-1" : "w-full"
                }`}
                onClick={() => window.open(repoUrl, "_blank")}
                data-cursor-hover
              >
                {/* Right to left fill animation */}
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover/code:translate-x-0 transition-transform duration-300 ease-out"></div>
                <div className="relative z-10 flex items-center justify-center gap-2 text-white group-hover/code:text-black transition-colors duration-300">
                  <Github className="h-4 w-4" />
                  Code
                </div>
              </button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isImageHovered ? "bg-green-400" : "bg-white/30"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
