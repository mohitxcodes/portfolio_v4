import BackgroundStyle from '@/components/common/background'
import React from 'react'
import { FaCalendarAlt, FaExternalLinkAlt, FaAward, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        issueDate: "March 2024",
        credentialId: "AWS-123456",
        credentialUrl: "https://aws.amazon.com/verification",
        organizationLogo: "/certifications/aws-logo.png",
        certificateImage: "/certifications/aws-cert.png"
    },
    {
        title: "Professional Full Stack Developer",
        organization: "Meta",
        issueDate: "January 2024",
        credentialId: "META-789012",
        credentialUrl: "https://meta.com/verification",
        organizationLogo: "/certifications/meta-logo.png",
        certificateImage: "/certifications/meta-cert.png"
    },
    {
        title: "Machine Learning Specialization",
        organization: "Stanford Online",
        issueDate: "December 2023",
        credentialId: "STAN-345678",
        credentialUrl: "https://stanford.edu/verification",
        organizationLogo: "/certifications/stanford-logo.png",
        certificateImage: "/certifications/stanford-cert.png"
    }
]

export default function CertificationsSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100
                        relative inline-block animate-fade-in">
                        Certifications
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full" />
                    </h2>
                    <Link
                        href="/certifications"
                        className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300
                        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50
                        rounded-lg border border-gray-200 dark:border-gray-700/50
                        transition-all duration-300 hover:shadow-md"
                    >
                        View All
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
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
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/90 dark:bg-gray-800/90 p-1.5
                                    shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={cert.organizationLogo}
                                        alt={cert.organization}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                {/* Title and Verification Link */}
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100
                                        group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                        hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-300
                                        group/link"
                                    >
                                        <FaExternalLinkAlt className="text-gray-500 group-hover/link:text-gray-700 
                                            dark:text-gray-400 dark:group-hover/link:text-gray-200" size={14} />
                                    </a>
                                </div>

                                {/* Organization and Date */}
                                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <FaCalendarAlt className="text-gray-500" size={14} />
                                        <span>{cert.issueDate}</span>
                                    </div>
                                    <span className="font-medium">ID: {cert.credentialId}</span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/20 to-transparent 
                                dark:from-gray-700/20 rounded-bl-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100/20 to-transparent 
                                dark:from-gray-700/20 rounded-tr-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
