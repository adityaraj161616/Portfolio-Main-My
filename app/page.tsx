"use client"

import { useState, useEffect } from "react"
import { EnhancedPreloader } from "@/components/enhanced-preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { EnhancedProjectsGrid } from "@/components/enhanced-projects-grid"
import { ExperienceSection } from "@/components/experience-section"
import { EnhancedContactSection } from "@/components/enhanced-contact-section"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  // Check if mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Hide default cursor on desktop only
  useEffect(() => {
    if (!isMobile) {
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    return () => {
      document.body.style.cursor = "auto"
    }
  }, [isMobile])

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {isLoading && <EnhancedPreloader onComplete={handlePreloaderComplete} />}

      {!isLoading && (
        <>
          {!isMobile && <CustomCursor />}
          <ScrollProgress />
          <FloatingNav />
          <EnhancedHeroSection />
          <EnhancedAboutSection />
          <SkillsSection />
          <CertificationsSection />
          <EnhancedProjectsGrid />
          <ExperienceSection />
          <EnhancedContactSection />
          <Footer />
        </>
      )}
    </main>
  )
}
