import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
import SectionHeader from '@/core/common/section-header'

export default function ServicesSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 
                        dark:from-gray-950 dark:to-gray-900 border border-gray-700/50 dark:border-gray-700/50
                        shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative px-4 py-4 sm:px-6 md:px-8 md:py-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
                            <div className="text-center sm:text-left w-full sm:w-auto">
                                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white dark:text-white">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-xs xs:text-sm text-gray-300 dark:text-gray-300 mt-1">
                                    Let's build something amazing together
                                </p>
                            </div>
                            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 w-full sm:w-auto">
                                <Link
                                    href="/contact"
                                    className="text-xs xs:text-sm group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-1.5 bg-white hover:bg-gray-100 
                                        dark:bg-white dark:hover:bg-gray-100 text-gray-900 dark:text-gray-900 rounded-xs font-medium
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full xs:w-auto"
                                >
                                    Get in Touch
                                    <FaExternalLinkAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-xs xs:text-sm group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-1.5 bg-transparent hover:bg-white/10 
                                        dark:bg-transparent dark:hover:bg-white/10 text-white dark:text-white border border-white/20 hover:border-white/40 
                                        dark:border-white/20 dark:hover:border-white/40 rounded-xs font-medium
                                        transition-all duration-300 transform hover:scale-105 w-full xs:w-auto"
                                >
                                    View Work
                                    <FaExternalLinkAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
