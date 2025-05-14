import React from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import CardOverlayStyle from '@/core/common/card-overlay-style'
import { ICertification } from '@/types/certification-types'

export default function CertificationsCard({ cert, index }: { cert: ICertification, index: number }) {
    return (
        <div
            key={index}
            className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
                                border border-gray-200 dark:border-gray-700/50 
                                hover:border-gray-300 dark:hover:border-gray-600/50 
                                transition-all duration-300 hover:shadow-xl
                                hover:scale-[1.02] transform"
        >
            {/* Certificate Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={cert.certificateImage}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                {/* Organization Logo Overlay */}
                <div className="absolute top-4 right-4 p-0.5 rounded-sm bg-white/90 dark:bg-gray-800/10
                                    shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <div className="size-8 relative">
                        <Image
                            src={cert.organizationLogo}
                            alt={cert.organization}
                            fill
                            className="object-contain size-full"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
                {/* Title and External Link */}
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-100
                                        group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {cert.title}
                    </h3>
                    <div className="rounded-lg bg-white/90 dark:bg-gray-800/90 p-1.5
                                    shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                                            transition-colors duration-300"
                        >
                            <FaExternalLinkAlt size={14} />
                        </a>
                    </div>
                </div>

                {/* Organization and Date */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-gray-500" size={14} />
                        <span>{cert.issueDate}</span>
                    </div>
                    <span className="font-medium">Issued by {cert.organization}</span>
                </div>
            </div>

            {/* Decorative Elements */}
            <CardOverlayStyle />
        </div>
    )
}
