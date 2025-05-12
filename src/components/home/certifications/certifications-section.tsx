import BackgroundStyle from '@/components/common/background'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { certifications } from './data/certifications-data'
import CertificationsCard from './components/certifications-card'

export default function CertificationsSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <div className="flex items-center justify-between mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100
                        relative inline-block animate-fade-in">
                        Licenses & Certifications
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
                        <CertificationsCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
