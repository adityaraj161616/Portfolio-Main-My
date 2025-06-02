"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificationCardProps {
  title: string
  provider: string
  date: string
  credentialId: string
  verifyUrl: string
  certificateImage: string
}

export function CertificationCard({
  title,
  provider,
  date,
  credentialId,
  verifyUrl,
  certificateImage,
}: CertificationCardProps) {
  const [showCertificate, setShowCertificate] = useState(false)

  const getProviderColor = (provider: string) => {
    switch (provider.toLowerCase()) {
      case "meta":
        return "from-blue-500 to-blue-600"
      case "google":
        return "from-red-500 to-yellow-500"
      case "ibm":
        return "from-blue-600 to-blue-800"
      default:
        return "from-purple-500 to-pink-500"
    }
  }

  const getProviderLogo = (provider: string) => {
    switch (provider.toLowerCase()) {
      case "meta":
        return "🔵"
      case "google":
        return "🔴"
      case "ibm":
        return "🔷"
      default:
        return "🏆"
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <div className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative p-6 h-full flex flex-col">
            {/* Header with provider logo and badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{getProviderLogo(provider)}</div>
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getProviderColor(provider)} text-white`}
                >
                  {provider}
                </div>
              </div>
              <Award className="h-5 w-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </div>

            {/* Certification title */}
            <h3 className="text-lg font-bold mb-3 group-hover:text-purple-300 transition-colors leading-tight">
              {title}
            </h3>

            {/* Date and credential info */}
            <div className="space-y-2 mb-4 flex-grow">
              <div className="text-sm text-zinc-400">
                <span className="font-medium">Completed:</span> {date}
              </div>
              <div className="text-sm text-zinc-400">
                <span className="font-medium">Credential ID:</span>
                <span className="font-mono text-xs ml-1">{credentialId}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-auto pt-4 border-t border-zinc-700/50 space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-zinc-400 hover:text-purple-400 hover:bg-zinc-700/50"
                onClick={() => setShowCertificate(true)}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Certificate
              </Button>
              <a
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm text-zinc-400 hover:text-purple-400 transition-colors w-full"
              >
                <ExternalLink className="h-4 w-4" />
                Verify on Coursera
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificate Modal */}
      {showCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-white"
                onClick={() => setShowCertificate(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <img
                src={certificateImage || "/placeholder.svg"}
                alt={`${title} Certificate`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
