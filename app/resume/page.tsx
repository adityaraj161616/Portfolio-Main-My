"use client"

import { Download, ArrowLeft, Mail, Phone, Linkedin, Github, MapPin, Globe } from "lucide-react"
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
          <h1 className="text-5xl font-bold text-gray-800 mb-2">ADITYA RAJ</h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Ranchi, Jharkhand
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +91 9931617960
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              adityaraj1613@gmail.com
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/aditya-raj16/
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              Portfolio: adityaraj-portfolio.vercel.app
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              github.com/adityaraj161616
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Full-Stack Developer (MERN/Next.js) with hands-on experience building production-grade apps for education,
            e-commerce, and AI-based platforms. Proficient in developing responsive UIs, integrating third-party APIs,
            implementing secure auth, and building real-time dashboards. Passionate about creating meaningful digital
            experiences with scalable architectures and seamless UI/UX flows.
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
              <p>Expected April, 2026</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">TECHNICAL SKILLS</h2>
          <div className="space-y-2 text-gray-700">
            <div>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind, TypeScript, Bootstrap
            </div>
            <div>
              <strong>Backend:</strong> Node.js, Express.js, REST API, JWT
            </div>
            <div>
              <strong>Database:</strong> MongoDB, Mongoose, SQL
            </div>
            <div>
              <strong>Tools:</strong> Git, GitHub, Postman, VS Code, Figma, GSAP, Framer motion
            </div>
            <div>
              <strong>AI Tools:</strong> Gemini API, Replicate API, Langchain
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">WORK EXPERIENCE</h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Proxenix</h3>
                <p className="text-gray-600 font-medium">Full Stack Development Intern</p>
              </div>
              <p className="text-gray-600">June 2025 – August 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Developed production-level full-stack applications, including Edureka (a Coursera-style LMS) and
                FeedbackPro (an AI-powered feedback platform), using Next.js, MongoDB, Express.js, and Node.js.
              </li>
              <li>
                Integrated real-time features, GSAP animations, role-based authentication, and Gemini API-based
                sentiment analysis into client-platforms.
              </li>
              <li>
                Collaborated remotely with the team on scalable, responsive solutions aligned with modern web design
                principles.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Cognifyz Technologies</h3>
                <p className="text-gray-600 font-medium">Full Stack Development Intern</p>
              </div>
              <p className="text-gray-600">June 2025 – July 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Built and deployed advanced full-stack applications such as DreamFrame AI (an AI image generator),
                TaskFlow Pro, and Blog Platform using the MERN stack and external APIs like Replicate and Google Books.
              </li>
              <li>Focused on backend integration, database design, JWT authentication, and dynamic UI/UX workflows.</li>
              <li>
                Demonstrated initiative and precision in delivering real-world software features under tight deadlines.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">PROJECTS</h2>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Eduverse – Coursera-Style Online Learning Platform
              </h3>
              <p className="text-gray-600">July 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Built a full-stack LMS using Next.js, Express.js, MongoDB, and JWT auth with dynamic course creation,
                enrollment tracking, and admin dashboards. Designed scalable APIs and optimized real-time updates.
              </li>
              <li>
                <strong>GitHub</strong> | <strong>Live</strong>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                FeedbackPro – AI Sentiment Feedback Collection Platform
              </h3>
              <p className="text-gray-600">June 2025</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Developed a real-time feedback system with Next.js, Express, MongoDB, and GSAP. Integrated Gemini API
                for sentiment analysis and built a live dashboard with Socket.io and QR-based form sharing.
              </li>
              <li>
                <strong>GitHub</strong> | <strong>Live</strong>
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
                Built a modern e-commerce site using HTML, CSS, React, Node.js, Express, and MongoDB with secure auth,
                cart, admin dashboard, and Stripe-like payment integration. Improved performance and reduced bugs by
                30%.
              </li>
              <li>
                <strong>GitHub</strong>
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
            <div>• Meta Front-end Developer: Meta</div>
            <div>• Advanced React: Meta</div>
            <div>• Next.js from Scratch: Packt</div>
            <div>• Developing Backend Apps with Node.js and Express: IBM</div>
            <div>• Principles of UI/UX design: Meta</div>
            <div>• AWS Fundamentals: Amazon Web Services</div>
            <div>• Fundamentals of AI Agents Using RAG and Langchain: IBM</div>
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
