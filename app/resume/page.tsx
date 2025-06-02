"use client"

import { Download, ArrowLeft, Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CustomCursor } from "@/components/custom-cursor"
import { useState, useEffect } from "react"

export default function ResumePage() {
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

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    try {
      // Create a proper download link
      const link = document.createElement("a")
      link.href = "/resume/Aditya_Raj_Resume.pdf"
      link.download = "Aditya_Raj_Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      // Add to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Success feedback
      console.log("Resume download initiated")
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open("/resume/Aditya_Raj_Resume.pdf", "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      {/* Custom Cursor */}
      {!isMobile && <CustomCursor />}

      {/* Navigation - Hidden in print */}
      <div className="print:hidden bg-zinc-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-purple-400" data-cursor-hover>
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <Button onClick={handleDownload} className="bg-purple-600 hover:bg-purple-700" data-cursor-hover>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white">
        {/* Header */}
        <header className="text-center mb-8 border-b-2 border-gray-300 pb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Aditya Raj</h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +91 9931617960
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              adityaraj1613@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/aditya-raj16/
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              github.com/adityaraj161616
            </div>
          </div>
          <p className="text-gray-600 mt-2">Ranchi, Jharkhand</p>
        </header>

        {/* Objective */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">OBJECTIVE</h2>
          <p className="text-gray-700 leading-relaxed">
            As a Full-Stack Developer and UI/UX Designer, I specialize in building user-friendly, scalable, and
            efficient web applications using HTML, CSS, JavaScript, React.js, MongoDB, and Node.js. Passionate about
            creating seamless digital experiences, I focus on intuitive design, responsive development, and optimized
            performance. I am seeking opportunities to apply my expertise in front-end and back-end technologies to
            develop innovative and impactful web solutions.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">EDUCATION</h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">O.P. Jindal University</h3>
              <p className="text-gray-600">Bachelor of Technology in Computer Science and Engineering</p>
              <p className="text-gray-600">Cumulative GPA: 7.40/10.0</p>
            </div>
            <div className="text-right text-gray-600">
              <p>Raigarh, Chhattisgarh</p>
              <p>Expected April 2026</p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">WORK EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">CodSoft</h3>
                <p className="text-gray-600 font-medium">Front-End Web Development Intern</p>
              </div>
              <p className="text-gray-600">June 2024 – July 2024</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Developed a calculator, landing page, and portfolio website using HTML, CSS, and JavaScript, ensuring
                responsiveness and cross-browser compatibility.
              </li>
              <li>
                Focused on UI/UX best practices, optimizing design and functionality for seamless user experience.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">TechnoHacks</h3>
                <p className="text-gray-600 font-medium">Front-End Web Development Intern</p>
              </div>
              <p className="text-gray-600">June 2024 – July 2024</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Developed a countdown timer, login page, and registration form using HTML, CSS, and JavaScript, ensuring
                responsive and user-friendly design.
              </li>
              <li>
                Implemented best practices in front-end development, enhancing functionality, accessibility, and
                cross-browser compatibility.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">PROJECTS</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">RailPoint – Smart Solutions for Modern Railways</h3>
              <p className="text-gray-600">Jan 2025 – Present</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Built a full-stack railway platform using HTML, CSS, JS, Node.js, and MongoDB for real-time train
                tracking and ticketing.
              </li>
              <li>
                Integrated dynamic features like user authentication, train tracking, ticket management, coach crowd
                status, optimizing railway operations for efficiency and ease of use.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Sydney Events Scraper – Web-Based Aggregation Tool
              </h3>
              <p className="text-gray-600">May 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Developed a Node.js-based scraper using Cheerio and Axios to fetch and store Sydney event data in
                MongoDB.
              </li>
              <li>
                Created a React.js frontend to display events with filters, enhancing user navigation and data
                visibility.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">Epeolodies – Full-Stack E-Commerce Website</h3>
              <p className="text-gray-600">May 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Built a responsive eCommerce site with HTML, CSS, JS, Node.js, and MongoDB, supporting user auth, cart,
                and Payment Features.
              </li>
              <li>
                Implemented dynamic product filtering and modular backend routes for scalable and maintainable
                development.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">GaiaX – AI-Powered Virtual Assistant</h3>
              <p className="text-gray-600">Jan 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Built a voice-controlled virtual assistant using HTML, CSS, and JavaScript, integrating Weather API,
                News API, and Gemini AI API for real-time information retrieval and AI-driven responses.
              </li>
              <li>
                Implemented speech recognition, smart command handling, and local storage for history management,
                enabling users to interact seamlessly through voice commands for web searches, weather updates, and
                note-taking.
              </li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">
            CERTIFICATIONS & TRAINING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <div>• HTML & CSS: Meta</div>
            <div>• React JS: Meta</div>
            <div>• Principles of UI/UX design: Meta</div>
            <div>• Figma: Google</div>
            <div>• Developing Backend Apps with Node.js and Express: IBM</div>
            <div>• Programming in Python: Meta</div>
            <div>• Full Stack: Meta</div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">TECHNICAL SKILLS</h2>
          <div className="space-y-2 text-gray-700">
            <div>
              <strong>Front-End Development:</strong> HTML, CSS, JavaScript, ReactJS, Bootstrap, TypeScript
            </div>
            <div>
              <strong>Back-End Development/Database:</strong> Node.js, MongoDB, Mongoose, Python, SQL
            </div>
            <div>
              <strong>Version Control:</strong> Git, GitHub
            </div>
            <div>
              <strong>Other Tools:</strong> VS Code, Figma, Postman, Android Studio
            </div>
            <div>
              <strong>Languages:</strong> English, Hindi
            </div>
          </div>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            font-size: 12px;
            line-height: 1.4;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:bg-white {
            background: white !important;
          }
          h1 {
            font-size: 24px;
          }
          h2 {
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          h3 {
            font-size: 14px;
          }
          .container {
            max-width: none;
            padding: 0;
          }
          section {
            margin-bottom: 20px;
          }
          ul {
            margin: 5px 0;
          }
          li {
            margin: 2px 0;
          }
        }
      `}</style>
    </div>
  )
}
