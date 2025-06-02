"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
	{
		id: 1,
		title: "GaiaX AI Assistant",
		description: "Voice-controlled virtual assistant with AI integration",
		image: "/projects/gaiax-1.png",
		video: "/projects/gaiax-1.png",
		tags: ["JavaScript", "AI", "Voice Recognition"],
		github: "https://github.com/adityaraj161616/GaiaX-VirtualAssistant",
		demo: "#",
		category: "AI & Machine Learning",
		year: "2025",
	},
	{
		id: 2,
		title: "Sydney Events Scraper",
		description: "Web scraping tool for event aggregation",
		image: "/projects/sydney-events-1.png",
		video: "/projects/sydney-events-1.png",
		tags: ["Node.js", "React", "MongoDB"],
		github: "https://github.com/adityaraj161616/SydneyEventSrapper",
		demo: "#",
		category: "Web Scraping",
		year: "2025",
	},
	{
		id: 3,
		title: "RailPoint System",
		description: "Smart railway management platform",
		image: "/projects/railpoint-1.png",
		video: "/projects/railpoint-1.png",
		tags: ["Full-Stack", "Real-time", "MongoDB"],
		github: "https://github.com/adityaraj161616/Rail-system-full-stack",
		demo: "#",
		category: "Full-Stack",
		year: "2025",
	},
	{
		id: 4,
		title: "Epeolodies Commerce",
		description: "Full-stack eCommerce platform",
		image: "/projects/epeolodies-1.png",
		video: "/projects/epeolodies-1.png",
		tags: ["E-commerce", "Payment", "Node.js"],
		github: "https://github.com/adityaraj161616/Epeolodies-E-commerce",
		demo: "#",
		category: "E-Commerce",
		year: "2025",
	},
	{
		id: 5,
		title: "Lunox Studio",
		description: "Modern creative agency website",
		image: "/projects/lunox-1.png",
		video: "/projects/lunox-1.png",
		tags: ["React", "Framer Motion", "TypeScript"],
		github: "https://github.com/adityaraj161616/Lunox-Motion-landing-page",
		demo: "https://lunox-motion-landing-page-n49gebmh3.vercel.app/",
		category: "Creative Design",
		year: "2025",
	},
]

export function EnhancedProjectsGrid() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
	const [hoveredProject, setHoveredProject] = useState<number | null>(null)
	const [filter, setFilter] = useState("All")

	const categories = [
		"All",
		"AI & Machine Learning",
		"Web Scraping",
		"Full-Stack",
		"E-Commerce",
		"Creative Design",
	]
	const filteredProjects =
		filter === "All" ? projects : projects.filter((p) => p.category === filter)

	return (
		<section
			ref={ref}
			id="projects"
			className="py-32 bg-black relative overflow-hidden"
		>
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
					transition={{
						duration: 15,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>

				{/* Animated Grid Lines */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
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
							<span className="text-white/60 text-sm tracking-wider font-light">
								SELECTED WORKS
							</span>
						</div>
					</motion.div>

					<motion.h2
						className="text-4xl md:text-6xl font-black text-white mb-8"
						style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Featured{" "}
						<span className="relative">
							Projects
							<motion.div
								className="absolute bottom-0 left-0 w-full h-2 bg-white/10"
								initial={{ scaleX: 0 }}
								animate={isInView ? { scaleX: 1 } : {}}
								transition={{ duration: 1, delay: 0.8 }}
								style={{ originX: 0 }}
							/>
						</span>
					</motion.h2>

					{/* Enhanced Filter Buttons */}
					<motion.div
						className="flex flex-wrap justify-center gap-3 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						{categories.map((category, index) => (
							<motion.button
								key={category}
								className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
									filter === category
										? "bg-white text-black border-white"
										: "bg-white/5 text-white/70 border-white/20 hover:bg-white/10 hover:border-white/40"
								}`}
								data-cursor-hover
								onClick={() => setFilter(category)}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{category}
							</motion.button>
						))}
					</motion.div>
				</motion.div>

				{/* Enhanced Projects Grid */}
				<motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							className="group relative"
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
							layout
						>
							<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
								{/* Enhanced Project Image */}
								<motion.div
									className="absolute inset-0"
									animate={{
										scale: hoveredProject === project.id ? 1.05 : 1,
									}}
									transition={{ duration: 0.6, ease: "easeOut" }}
								>
									<img
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										className="w-full h-full object-cover contrast-110 brightness-110 transition-all duration-700"
									/>
									<div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />

									{/* Overlay Pattern */}
									<motion.div
										className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_49%,rgba(255,255,255,0.02)_51%,transparent_52%)] bg-[size:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
										animate={{ backgroundPosition: ["0px 0px", "30px 30px"] }}
										transition={{
											duration: 10,
											repeat: Number.POSITIVE_INFINITY,
											ease: "linear",
										}}
									/>
								</motion.div>

								{/* Project Info Overlay */}
								<div className="absolute inset-0 p-6 flex flex-col justify-between">
									{/* Top Info */}
									<div className="flex justify-between items-start">
										<motion.div
											className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20"
											initial={{ opacity: 0, x: -20 }}
											animate={{
												opacity: hoveredProject === project.id ? 1 : 0,
												x: hoveredProject === project.id ? 0 : -20,
											}}
											transition={{ duration: 0.3 }}
										>
											<span className="text-white/80 text-xs font-medium">
												{project.year}
											</span>
										</motion.div>

										<motion.div
											className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
											initial={{ opacity: 0, x: 20 }}
											animate={{
												opacity: hoveredProject === project.id ? 1 : 0,
												x: hoveredProject === project.id ? 0 : 20,
											}}
											transition={{ duration: 0.3, delay: 0.1 }}
										>
											<span className="text-white/80 text-xs font-medium">
												{project.category}
											</span>
										</motion.div>
									</div>

									{/* Bottom Info */}
									<div>
										<motion.h3
											className="text-xl font-bold text-white mb-2"
											initial={{ opacity: 0, y: 20 }}
											animate={{
												opacity: hoveredProject === project.id ? 1 : 0,
												y: hoveredProject === project.id ? 0 : 20,
											}}
											transition={{ duration: 0.3, delay: 0.1 }}
										>
											{project.title}
										</motion.h3>

										<motion.p
											className="text-white/70 text-sm mb-4"
											initial={{ opacity: 0, y: 20 }}
											animate={{
												opacity: hoveredProject === project.id ? 1 : 0,
												y: hoveredProject === project.id ? 0 : 20,
											}}
											transition={{ duration: 0.3, delay: 0.2 }}
										>
											{project.description}
										</motion.p>

										<motion.div
											className="flex flex-wrap gap-2 mb-4"
											initial={{ opacity: 0, y: 20 }}
											animate={{
												opacity: hoveredProject === project.id ? 1 : 0,
												y: hoveredProject === project.id ? 0 : 20,
											}}
											transition={{ duration: 0.3, delay: 0.3 }}
										>
											{project.tags.slice(0, 3).map((tag, tagIndex) => (
												<span
													key={tagIndex}
													className="px-2 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
												>
													{tag}
												</span>
											))}
										</motion.div>
									</div>
								</div>

								{/* Enhanced Hover Actions */}
								<motion.div
									className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
									initial={false}
								>
									<div className="flex gap-4">
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group/btn"
											data-cursor-hover
											whileHover={{ scale: 1.1, rotate: 5 }}
											whileTap={{ scale: 0.9 }}
										>
											<Github className="w-6 h-6 text-white group-hover/btn:text-white transition-colors" />
										</motion.a>
										<motion.a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group/btn"
											data-cursor-hover
											whileHover={{ scale: 1.1, rotate: -5 }}
											whileTap={{ scale: 0.9 }}
										>
											<ExternalLink className="w-6 h-6 text-white group-hover/btn:text-white transition-colors" />
										</motion.a>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Enhanced View All Button */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<Link href="/projects">
						<button
							className="group relative px-8 py-3 border border-white/30 bg-black text-white font-medium rounded-full overflow-hidden"
							data-cursor-hover
							tabIndex={0}
						>
							{/* Animated black background slides in (opposite theme) */}
							<span
								className="absolute inset-0 bg-white z-0 transition-transform duration-300 ease-out group-hover:translate-x-0 translate-x-[-100%]"
								aria-hidden="true"
								style={{ transitionProperty: "transform" }}
							/>
							<span className="relative z-10 transition-colors duration-300 group-hover:text-black">
								View All Projects
							</span>
						</button>
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
