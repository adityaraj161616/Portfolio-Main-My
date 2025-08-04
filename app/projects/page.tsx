"use client"

import { ArrowLeft, Github, Calendar, Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { CustomCursor } from "@/components/custom-cursor"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false)

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

  const projects = [
    {
      title: "FeedbackPro – Advanced AI-Powered Feedback Platform",
      description:
        "A comprehensive feedback collection platform with AI sentiment analysis, dynamic form builder, real-time notifications, and advanced analytics. Features Google Gemini AI integration for emotion detection and keyword extraction.",
      longDescription:
        "FeedbackPro is an advanced feedback platform that revolutionizes how businesses collect and analyze user feedback. With AI-powered sentiment analysis, dynamic form creation, and real-time insights, it provides everything needed to understand customer sentiment and improve products.",
      tags: ["Next.js 14", "AI", "MongoDB", "Socket.io", "GSAP", "NextAuth", "Gemini AI"],
      images: ["/projects/feedback-1.png", "/projects/feedback-2.png", "/projects/feedback-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Feedback",
      demoUrl: "https://feedback-ten-lac.vercel.app/",
      category: "AI & Machine Learning",
      date: "2025",
      status: "Completed",
      features: [
        "Dynamic Form Builder: Drag-and-drop interface with various field types",
        "Live Form Preview: Instant preview on desktop and mobile devices",
        "AI Sentiment Analysis: Google Gemini AI for automatic sentiment detection",
        "Emotion Detection: Identifies key emotions expressed in feedback",
        "Keyword Extraction: Highlights important keywords influencing sentiment",
        "Real-time Notifications: Instant alerts for new feedback submissions",
        "Socket.io Integration: Backend setup for real-time communication",
        "Admin Dashboard: Comprehensive overview with global statistics",
        "Sentiment Trend Charts: Visualizations of sentiment distribution over time",
        "Data Export: Export all feedback data to CSV format",
        "GSAP Animations: Smooth animations with video mask reveals and typewriter effects",
        "Role-Based Access Control: User and admin roles with protected routes",
      ],
    },
    {
      title: "EduVerse – Premium Online Learning Platform",
      description:
        "A world-class online learning platform with virtual classrooms, advanced progress tracking, Razorpay payment integration, and premium UI/UX design inspired by Cuberto.com. Features live video conferencing and comprehensive analytics.",
      longDescription:
        "EduVerse is a comprehensive online learning platform that combines cutting-edge technology with premium design to deliver an exceptional educational experience. With virtual classrooms, advanced analytics, and seamless payment integration, it's built for modern education.",
      tags: ["Next.js 15", "MongoDB", "Razorpay", "TypeScript", "Framer Motion", "NextAuth", "WebRTC"],
      images: ["/projects/eduverse-1.png", "/projects/eduverse-2.png", "/projects/eduverse-3.png"],
      repoUrl: "https://github.com/adityaraj161616/eduverse",
      demoUrl: "https://eduverse-q2na.vercel.app/",
      category: "Education",
      date: "2025",
      status: "Completed",
      features: [
        "Live Interactive Sessions: Video conferencing with real-time chat",
        "Screen Sharing: Presentation tools and collaborative features",
        "Recording & Playback: Session recording for later review",
        "Breakout Rooms: Group activities and collaborative learning",
        "Attendance Tracking: Engagement metrics and participation monitoring",
        "Comprehensive Analytics Dashboard: Learning progress visualizations",
        "Learning Path Progression: Milestone tracking and skill development",
        "Achievement System: Badges, rewards, and gamification elements",
        "Multi-Provider OAuth: Google, GitHub, LinkedIn, Facebook authentication",
        "Two-Factor Authentication: Enhanced security with 2FA support",
        "Razorpay Integration: Secure payment processing with multiple methods",
        "Payment Link Generation: Easy sharing and automated enrollment",
        "Cuberto-inspired Design: Premium UI with glassmorphism effects",
        "Mobile-Responsive: Optimized for all devices and screen sizes",
        "Course Management: Detailed curriculum and content organization",
        "Newsletter Subscription: Automated email marketing system",
      ],
    },
    {
      title: "Saint-Urbain Echo – Interactive Blog Platform",
      description:
        "A modern, interactive blog platform built with React, Vite, TypeScript, Tailwind CSS, and advanced GSAP-powered UI/UX animations. Features horizontal scroll, animated cards, and seamless Supabase integration for dynamic content delivery.",
      longDescription:
        "Saint-Urbain Echo is a cutting-edge blog platform that redefines the reading experience through innovative scroll animations and interactive design. Built with modern web technologies, it showcases beautiful articles with unique horizontal scroll mechanics and GSAP-powered animations.",
      tags: ["React", "TypeScript", "GSAP", "Supabase", "Vite", "Tailwind CSS", "ScrollTrigger"],
      images: ["/projects/saint-1.png", "/projects/saint-2.png", "/projects/saint-3.png"],
      repoUrl: "https://github.com/adityaraj161616/SaintUrbanBlogs",
      demoUrl: "https://saint-urban-blogs.vercel.app/",
      category: "Creative Design",
      date: "2025",
      status: "Completed",
      features: [
        "Dynamic Blog Feed: Fetches articles in real time from Supabase",
        "Horizontal Scroll Animation: Articles slide horizontally as you scroll vertically",
        "Bi-directional Scroll: Alternate sections scroll left or right for unique experience",
        "Animated Cards: Magnetic, ripple, and hover effects on each article card",
        "Auto-Seed Database: Automatically seeds demo articles if database is empty",
        "Responsive Design: Fully responsive and mobile-friendly interface",
        "Modern Stack: Built with Vite, React, TypeScript, Tailwind CSS, shadcn-ui",
        "Instant Preview: Fast development with Vite's hot reload dev server",
      ],
    },
    {
      title: "diYsnap – Full-Stack Photo Booth App",
      description:
        "A modern, full-stack photo booth application inspired by Snapchat, built with Next.js, MongoDB, and Google Authentication. Create stunning photo collages with 10+ filters, save to private gallery, and enjoy automatic cleanup after 24 hours.",
      longDescription:
        "diYsnap is a comprehensive photo booth application that brings the fun of Snapchat-style photography to the web. With real-time camera access, advanced filters, and automatic collage creation, it provides a complete photo experience with secure user management and automatic cleanup.",
      tags: ["Next.js", "MongoDB", "Google Auth", "GSAP", "Camera API", "JWT", "NextAuth"],
      images: ["/projects/diysnap-1.png", "/projects/diysnap-2.png", "/projects/diysnap-3.png"],
      repoUrl: "https://github.com/adityaraj161616/DiYSnap",
      demoUrl: "https://di-y-snap.vercel.app/",
      category: "Full-Stack",
      date: "2025",
      status: "Completed",
      features: [
        "Live Camera Feed: Real-time camera access with preview functionality",
        "10+ Photo Filters: 90s, Noir, Rainbow, Glitch, Vintage, and more creative filters",
        "3-Photo Collage: Automatic collage creation in iPhone wallpaper format",
        "GSAP Animations: Smooth transitions and interactive UI elements",
        "Google OAuth Login: Secure authentication via Google accounts",
        "Protected Routes: Camera and gallery access only for authenticated users",
        "MongoDB Integration: Cloud-based photo storage with user associations",
        "Auto-Delete System: Photos automatically deleted after 24 hours",
        "Private Galleries: User-specific photo collections and metadata tracking",
        "Mobile-First Design: Responsive across all devices with touch support",
      ],
    },
    {
      title: "CourierPress – Premium Newsletter Platform",
      description:
        "A modern, full-stack newsletter platform built with Next.js 15, featuring expert insights, tools, and resources for content creators. Includes Stripe subscriptions, admin dashboard, and comprehensive content management system.",
      longDescription:
        "CourierPress is a comprehensive newsletter platform designed for content creators and businesses. With Apple-inspired design, advanced subscription management, and powerful content tools, it provides everything needed to run a successful newsletter business.",
      tags: ["Next.js 15", "MongoDB", "Stripe", "NextAuth", "TypeScript", "GSAP", "Tailwind CSS"],
      images: ["/projects/newsletter-1.png", "/projects/newsletter-2.png", "/projects/newsletter-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Newsletter",
      demoUrl: "https://newsletter-two-neon.vercel.app/",
      category: "Full-Stack",
      date: "2025",
      status: "Completed",
      features: [
        "Apple-inspired minimalist design with fully responsive layout",
        "GSAP animations with ScrollTrigger and smooth parallax effects",
        "Email/Password authentication with Google OAuth integration",
        "Role-based access control (User, Admin, Editor) with protected routes",
        "Rich text editor for articles with image upload management",
        "Categories and tags system with draft/published workflow",
        "Premium subscriptions with Stripe integration and automated billing",
        "Content ROI Calculator and Engagement Rate Analyzer tools",
        "Newsletter Growth Tracker and Content Calendar Generator",
        "Admin Dashboard with content, user, and subscription management",
        "Analytics and reporting with revenue tracking capabilities",
        "SEO optimization tools and usage tracking analytics",
      ],
    },
    {
      title: "Niramaya – Wellness & Ayurvedic Booking Platform",
      description:
        "A modern web application for booking wellness and Ayurvedic treatments, featuring advanced GSAP animations, appointment booking, booking slip generation, and automated email confirmations for both clients and doctors.",
      longDescription:
        "Niramaya is a comprehensive wellness and Ayurvedic treatment booking platform that combines modern web technologies with traditional healing practices. Built with React, TypeScript, and Supabase, it features advanced GSAP animations for a smooth user experience and complete booking management system.",
      tags: ["React", "TypeScript", "GSAP", "Supabase", "Tailwind CSS", "shadcn-ui", "Vite"],
      images: ["/projects/niramaya-1.png", "/projects/niramaya-2.png", "/projects/niramaya-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Nirmalaya",
      demoUrl: "https://nirmalaya.vercel.app/",
      category: "Healthcare",
      date: "2025",
      status: "Completed",
      features: [
        "Appointment Booking: Simple and intuitive interface for booking wellness treatments",
        "Booking Slip Generation: Detailed booking slips with all appointment information",
        "Email Confirmations: Automated booking confirmation emails for clients and doctors",
        "Advanced GSAP Animations: Smooth and engaging user interface animations",
        "Supabase Backend: Secure authentication and database management",
        "Modern UI: Built with shadcn-ui and Tailwind CSS for responsive design",
        "TypeScript: Type-safe development for better code quality",
        "Fast Performance: Optimized with Vite for lightning-fast development and builds",
      ],
    },
    {
      title: "FileSafe – Secure File Sharing Platform",
      description:
        "A modern, secure file sharing platform built with Next.js and Node.js that allows users to upload, share, and manage files with advanced security features including password protection, automatic expiration, and download limits.",
      longDescription:
        "FileSafe is a comprehensive secure file sharing platform that prioritizes security and user experience. Built with Next.js 15 and Node.js, it features advanced security measures, real-time file management, and a powerful admin panel for complete platform oversight.",
      tags: ["Next.js 15", "Node.js", "MongoDB", "JWT", "TypeScript", "Multer", "bcryptjs"],
      images: ["/projects/filesafe-1.png", "/projects/filesafe-2.png", "/projects/filesafe-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Filesafe",
      demoUrl: "https://link-not-available.vercel.app/",
      category: "Full-Stack",
      date: "2025",
      status: "Completed",
      features: [
        "Password Protection: Secure files with custom passwords",
        "Automatic Expiration: Set custom expiry dates for shared links",
        "Download Limits: Control how many times a file can be downloaded",
        "Multi-file Upload: Upload up to 5 files simultaneously (100MB each)",
        "File Preview: Preview images, videos, audio, PDFs, and text files",
        "QR Code Generation: Generate QR codes for easy mobile sharing",
        "User Authentication: Secure login/register with JWT",
        "Admin Panel: Complete user and file management system",
        "Storage Analytics: Track platform usage and file statistics",
        "Automatic Cleanup: Scheduled removal of expired files",
      ],
    },
    {
      title: "GaiaX – AI-Powered Virtual Assistant",
      description:
        "Built a voice-controlled virtual assistant using HTML, CSS, and JavaScript, integrating Weather API, News API, and Gemini AI API for real-time information retrieval and AI-driven responses. Implemented speech recognition, smart command handling, and local storage for history management.",
      longDescription:
        "GaiaX is an advanced AI-powered virtual assistant that combines voice recognition technology with multiple APIs to provide users with real-time information and intelligent responses. The project showcases modern web development techniques and API integration skills.",
      tags: ["HTML", "CSS", "JavaScript", "Weather API", "Gemini AI", "Speech Recognition"],
      images: ["/projects/gaiax-1.png", "/projects/gaiax-2.png"],
      repoUrl: "https://github.com/adityaraj161616/GaiaX-VirtualAssistant",
      demoUrl: "https://link-not-available.vercel.app/",
      category: "AI & Machine Learning",
      date: "January 2025",
      status: "Completed",
      features: [
        "Voice-controlled interface with speech recognition",
        "Real-time weather updates via Weather API",
        "Latest news integration through News API",
        "AI-powered responses using Gemini AI",
        "Local storage for conversation history",
        "Smart command processing and routing",
      ],
    },
    {
      title: "DreamFrame AI – AI Image Generation App",
      description:
        "A full-stack AI image generation app built with Next.js, featuring a cinematic dark theme, smooth Framer Motion animations, and intelligent image generation via Replicate API. Smart fallback system for relevant images when AI is unavailable with responsive, mobile-first UI.",
      longDescription:
        "DreamFrame AI is a cutting-edge image generation platform that leverages artificial intelligence to create stunning visuals, featuring multiple artistic styles and a personal gallery system.",
      tags: ["Next.js", "AI", "Replicate API", "Framer Motion", "TypeScript"],
      images: ["/projects/dream-1.png", "/projects/dream-2.png", "/projects/dream-3.png"],
      repoUrl: "https://github.com/adityaraj161616/DreamFrame-ai",
      demoUrl: "https://dream-frame-ai.vercel.app/",
      category: "AI & Machine Learning",
      date: "2025",
      status: "Completed",
      features: [
        "Smart fallback system for relevant images when AI is unavailable",
        "Responsive, mobile-first UI with Tailwind CSS and shadcn/ui",
        "Personal gallery to save and manage creations",
        "Multiple artistic styles and generation options",
        "Real-time image generation with progress tracking",
        "User authentication and profile management",
      ],
    },
    {
      title: "Sydney Events Scraper – Web-Based Aggregation Tool",
      description:
        "Developed a Node.js-based scraper using Cheerio and Axios to fetch and store Sydney event data in MongoDB. Created a React.js frontend to display events with filters, enhancing user navigation and data visibility.",
      longDescription:
        "A comprehensive web scraping solution that aggregates event data from multiple sources in Sydney, providing users with a centralized platform to discover local events with advanced filtering capabilities.",
      tags: ["Node.js", "Cheerio", "Axios", "React.js", "MongoDB"],
      images: ["/projects/sydney-events-1.png", "/projects/sydney-events-2.png"],
      repoUrl: "https://github.com/adityaraj161616/SydneyEventSrapper",
      demoUrl: "https://link-not-available.vercel.app/",
      category: "Web Scraping",
      date: "May 2025",
      status: "Completed",
      features: [
        "Automated web scraping with Cheerio and Axios",
        "MongoDB database for efficient data storage",
        "React.js frontend with modern UI components",
        "Advanced filtering and search functionality",
        "Real-time data updates and synchronization",
        "Responsive design for all device types",
      ],
    },
    {
      title: "RailPoint – Smart Solutions for Modern Railways",
      description:
        "Built a full-stack railway platform using HTML, CSS, JS, Node.js, and MongoDB for real-time train tracking and ticketing. Integrated dynamic features like user authentication, train tracking, ticket management, coach crowd status, optimizing railway operations for efficiency and ease of use.",
      longDescription:
        "RailPoint is a comprehensive railway management system that modernizes train operations with real-time tracking, digital ticketing, and crowd management features, enhancing both operational efficiency and passenger experience.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/railpoint-1.png", "/projects/railpoint-2.png"],
      repoUrl: "https://github.com/adityaraj161616/Rail-system-full-stack",
      demoUrl: "https://link-not-available.vercel.app/",
      category: "Full-Stack Web Application",
      date: "January 2025 - Present",
      status: "In Progress",
      features: [
        "Real-time train tracking and location updates",
        "Digital ticketing system with QR codes",
        "User authentication and profile management",
        "Coach crowd status monitoring",
        "Admin dashboard for railway operations",
        "Mobile-responsive design for passengers",
      ],
    },
    {
      title: "Epeolodies – Full-Stack eCommerce Website",
      description:
        "Built a responsive eCommerce site with HTML, CSS, JS, Node.js, and MongoDB, supporting user auth, cart, and Payment Features. Implemented dynamic product filtering and modular backend routes for scalable and maintainable development.",
      longDescription:
        "Epeolodies is a modern eCommerce platform featuring a complete online shopping experience with secure payment processing, inventory management, and a user-friendly interface designed for optimal conversion rates.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      images: ["/projects/epeolodies-1.png", "/projects/epeolodies-2.png", "/projects/epeolodies-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Epeolodies-E-commerce",
      demoUrl: "https://link-not-available.vercel.app/",
      category: "E-Commerce",
      date: "May 2025",
      status: "Completed",
      features: [
        "Complete user authentication system",
        "Shopping cart with persistent storage",
        "Secure payment gateway integration",
        "Dynamic product filtering and search",
        "Admin panel for inventory management",
        "Order tracking and management system",
      ],
    },
    {
      title: "Lunox Studio – Modern Creative Agency Website",
      description:
        "Developed a premium dark-themed creative agency site using React 18, Tailwind CSS, Framer Motion, and TypeScript, inspired by Cuberto's interactive design language. Engineered a cinematic hero section with fullscreen video background, staggered text animations, and parallax effects.",
      longDescription:
        "Lunox Studio represents the pinnacle of modern web design, combining cutting-edge technologies with sophisticated animations to create an immersive digital experience. This premium creative agency website showcases advanced React development skills and performance optimization techniques.",
      tags: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Performance Optimization"],
      images: ["/projects/lunox-1.png", "/projects/lunox-2.png"],
      repoUrl: "https://github.com/adityaraj161616/Lunox-Motion-landing-page",
      demoUrl: "https://lunox-motion-landing-page-n49gebmh3.vercel.app/",
      category: "Creative Web Design",
      date: "June 2025",
      status: "Completed",
      features: [
        "Cinematic hero section with fullscreen video background",
        "Staggered text animations and parallax effects",
        "Custom cursor interactions and micro-animations",
        "Scroll-based transitions for immersive UX",
        "60fps performance optimization with lazy loading",
        "WCAG 2.1 AA compliance with accessibility features",
        "95+ Lighthouse scores across all metrics",
        "<1.5s First Contentful Paint and <2.5s LCP",
      ],
    },
    {
      title: "Desai Builders – Modern Construction Company Website",
      description:
        "A modern web app developed using Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. Fast, type-safe, and component-driven architecture with clean, accessible UI with utility-first styling. Hot-reloading for rapid development with modular codebase and MIT licensed.",
      longDescription:
        "Desai Builders is a professional construction company website built with modern web technologies, featuring a clean design, fast performance, and comprehensive project showcase capabilities.",
      tags: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
      images: ["/projects/desai-1.png", "/projects/desai-2.png", "/projects/desai-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Desai-builders-page",
      demoUrl: "https://desai-builders-page.vercel.app/",
      category: "Business Website",
      date: "2025",
      status: "Completed",
      features: [
        "Fast, type-safe, and component-driven architecture",
        "Clean, accessible UI with utility-first styling",
        "Hot-reloading for rapid development",
        "Modular codebase and MIT licensed",
        "Responsive design for all devices",
        "SEO optimized for better visibility",
      ],
    },
    {
      title: "AyurSoothe – Ayurvedic Therapy Booking Platform",
      description:
        "A modern web app for discovering and booking authentic Ayurvedic therapies, built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. Browse treatments, book appointments, and explore wellness products with responsive, accessible, and user-friendly design.",
      longDescription:
        "AyurSoothe is a comprehensive platform for Ayurvedic wellness, connecting users with authentic therapies and treatments through a modern, intuitive interface.",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn-ui", "Vite"],
      images: ["/projects/ayur-1.png", "/projects/ayur-2.png", "/projects/ayur-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Ayursooothe",
      demoUrl: "https://ayursooothe.vercel.app/",
      category: "Healthcare",
      date: "2025",
      status: "Completed",
      features: [
        "Browse treatments, book appointments, and explore wellness products",
        "Responsive, accessible, and user-friendly design",
        "Fast, type-safe, and component-driven",
        "Modern UI with Tailwind CSS and shadcn-ui",
        "Appointment scheduling system",
        "Product catalog and e-commerce features",
      ],
    },
    {
      title: "BookTracker – Book Discovery & Reading Tracker",
      description:
        "A modern full-stack web app to discover books, track reading progress, and manage your personal library. Google OAuth authentication with NextAuth.js, search millions of books via Google Books API, and organize books into shelves with progress tracking.",
      longDescription:
        "BookTracker is a comprehensive reading companion that helps users discover new books, track their reading journey, and maintain a digital library with detailed analytics and progress insights.",
      tags: ["Next.js", "Google Books API", "OAuth", "TypeScript", "MongoDB"],
      images: ["/projects/book-1.png", "/projects/book-2.png", "/projects/book-3.png"],
      repoUrl: "https://github.com/adityaraj161616/Book-tracker",
      demoUrl: "https://book-tracker-rust.vercel.app/",
      category: "Full-Stack",
      date: "2025",
      status: "Completed",
      features: [
        "Google OAuth authentication with NextAuth.js",
        "Search millions of books via Google Books API",
        "Organize books into shelves: Want to Read, Currently Reading, Finished",
        "Track progress, add notes, and view animated reading statistics",
        "Responsive, dark/light themed UI with Framer Motion and shadcn/ui",
        "Built with Next.js, TypeScript, Tailwind CSS",
      ],
    },
    {
      title: "TaskFlow Pro – Advanced Task Management",
      description:
        "A modern, production-ready task management app built with Next.js, TypeScript, and MongoDB. Advanced UI/UX with glassmorphism, smooth animations, dark/light themes, and Kanban, list, and calendar views for flexible task management.",
      longDescription:
        "TaskFlow Pro is a comprehensive productivity platform that combines advanced task management features with beautiful design and powerful analytics to help teams and individuals achieve their goals.",
      tags: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "Analytics"],
      images: ["/projects/task-1.png", "/projects/task-2.png", "/projects/task-3.png"],
      repoUrl: "https://github.com/adityaraj161616/TaskFlowpro",
      demoUrl: "https://task-flowpro.vercel.app/",
      category: "Productivity",
      date: "2025",
      status: "Completed",
      features: [
        "Advanced UI/UX: glassmorphism, smooth animations, dark/light themes",
        "Kanban, list, and calendar views for flexible task management",
        "Subtasks, dependencies, priorities, tags, and time tracking",
        "Analytics dashboard with productivity metrics and visualizations",
        "Power user features: command palette, keyboard shortcuts, bulk actions",
        "Secure Google OAuth authentication",
      ],
    },
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Web Scraping",
    "Full-Stack Web Application",
    "E-Commerce",
    "Creative Web Design",
    "Business Website",
    "Healthcare",
    "Productivity",
    "Education",
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "about") {
      window.location.href = "/#"
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Custom Cursor */}
      {!isMobile && <CustomCursor />}

      {/* Navigation */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-white/70 transition-colors relative z-10"
            data-cursor-hover
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-white" />
            <span className="font-bold text-lg text-white">Projects</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">My Projects</h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              A showcase of my technical skills and creative solutions. Each project represents a unique challenge and
              demonstrates my growth as a full-stack developer.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/20 relative z-10"
                  data-cursor-hover
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  images={project.images}
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Information */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Details</h2>
            <p className="text-white/60">Deep dive into each project</p>
          </div>

          <div className="mt-16 space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8"
              >
                <div className="relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl font-bold text-white hover:text-white/80 transition-colors cursor-pointer relative z-10"
                          data-cursor-hover
                        >
                          {project.title}
                        </a>
                        <Badge variant="outline" className="border-white/30 text-white bg-white/10" data-cursor-hover>
                          {project.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                        <Badge variant="secondary" className="bg-white/10 text-white border border-white/20">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-white/80 mb-6 leading-relaxed">{project.longDescription}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-white/10 text-white border border-white/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-1/3">
                      <div className="space-y-4">
                        <button
                          className="group/demo relative w-full px-6 py-3 bg-white text-black font-medium rounded-lg overflow-hidden border border-white flex items-center justify-center gap-2"
                          style={{ zIndex: 10 }}
                          data-cursor-hover
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          {/* Right to left fill animation */}
                          <div className="absolute inset-0 bg-black transform translate-x-full group-hover/demo:translate-x-0 transition-transform duration-300 ease-out"></div>
                          <div className="relative z-10 flex items-center gap-2 text-black group-hover/demo:text-white transition-colors duration-300">
                            <ExternalLink className="h-4 w-4" />
                            View Live Demo
                          </div>
                        </button>

                        <button
                          className="group/code relative w-full px-6 py-3 border border-white/30 text-white font-medium rounded-lg overflow-hidden flex items-center justify-center gap-2"
                          style={{ zIndex: 10 }}
                          data-cursor-hover
                          onClick={() => window.open(project.repoUrl, "_blank")}
                        >
                          {/* Right to left fill animation */}
                          <div className="absolute inset-0 bg-white transform translate-x-full group-hover/code:translate-x-0 transition-transform duration-300 ease-out"></div>
                          <div className="relative z-10 flex items-center gap-2 text-white group-hover/code:text-black transition-colors duration-300">
                            <Github className="h-4 w-4" />
                            View Source Code
                          </div>
                        </button>

                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <h5 className="font-semibold mb-2 text-white">Project Stats</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-white/60">Technologies:</span>
                              <span className="text-white">{project.tags.length}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Category:</span>
                              <span className="text-white">{project.category}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Status:</span>
                              <span className={project.status === "Completed" ? "text-green-400" : "text-yellow-400"}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-white/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Interested in Working Together?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's connect and see how we can
              create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className="group/contact relative px-8 py-3 bg-white text-black font-medium rounded-full overflow-hidden"
                onClick={() => scrollToSection("contact")}
                style={{ zIndex: 10 }}
                data-cursor-hover
              >
                {/* Right to left fill animation */}
                <div className="absolute inset-0 bg-black transform translate-x-full group-hover/contact:translate-x-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 text-black group-hover/contact:text-white transition-colors duration-300">
                  Get In Touch
                </span>
              </button>

              <button
                className="group/resume relative px-8 py-3 border border-white/30 text-white font-medium rounded-full overflow-hidden"
                onClick={() => scrollToSection("resume")}
                style={{ zIndex: 10 }}
                data-cursor-hover
              >
                {/* Right to left fill animation */}
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover/resume:translate-x-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 text-white group-hover/resume:text-black transition-colors duration-300">
                  View Resume
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Quick Links */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">ADITYA RAJ</h3>
              <p className="text-white/60 leading-relaxed">
                Creative developer crafting digital experiences through innovative design and clean code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-white/60 hover:text-white transition-colors text-left relative z-10"
                  data-cursor-hover
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block text-white/60 hover:text-white transition-colors text-left relative z-10"
                  data-cursor-hover
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-white/60 hover:text-white transition-colors text-left relative z-10"
                  data-cursor-hover
                >
                  Contact
                </button>
                <Link
                  href="/resume"
                  target="_blank"
                  className="block text-white/60 hover:text-white transition-colors relative z-10"
                  data-cursor-hover
                >
                  Resume
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Services</h4>
              <div className="space-y-2">
                <p className="text-white/60">Web Development</p>
                <p className="text-white/60">UI/UX Design</p>
                <p className="text-white/60">Full-Stack Apps</p>
                <p className="text-white/60">Consulting</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-white/60">adityaraj1613@gmail.com</p>
                <p className="text-white/60">Ranchi, Jharkhand</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm">© {new Date().getFullYear()} Aditya Raj. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 p-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white relative z-10"
              data-cursor-hover
            >
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
