import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { educationData } from './data/education-data'
import { IEducation } from './data/education-data'
import CardOverlayStyle from '@/core/common/card-overlay-style'

export default function EducationSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-800 dark:text-gray-100
                    relative inline-block animate-fade-in">
                    Education
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 
                        dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full" />
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-50 blur-sm" />
                    </div>

                    <div className="space-y-12">
                        {educationData.map((edu: IEducation, index: number) => (
                            <div
                                key={index}
                                className="relative pl-12 sm:pl-16 animate-slide-in group/timeline"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-3 sm:left-5 top-1.5">
                                    <div className="relative">
                                        {/* Outer Glow */}
                                        <div className="absolute -inset-2 rounded-full bg-gray-400/20 dark:bg-gray-500/20 
                                            group-hover/timeline:bg-gray-400/30 dark:group-hover/timeline:bg-gray-500/30 
                                            transition-all duration-300 blur-sm" />

                                        {/* Middle Ring */}
                                        <div className="absolute -inset-1 rounded-full bg-gray-400/30 dark:bg-gray-500/30 
                                            group-hover/timeline:bg-gray-400/40 dark:group-hover/timeline:bg-gray-500/40 
                                            transition-all duration-300" />

                                        {/* Main Dot */}
                                        <div className="relative w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500 
                                            group-hover/timeline:scale-110 transition-transform duration-300">
                                            <div className="absolute inset-0 rounded-full bg-gray-400 dark:bg-gray-500 animate-ping opacity-75" />
                                        </div>
                                    </div>
                                </div>

                                <div className="group relative bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl
                                    hover:scale-[1.02] transform">

                                    {/* Institution Link */}
                                    {edu.website && (
                                        <a
                                            href={edu.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="z-50 absolute top-4 right-4 p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                        hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-300
                                        group/link"
                                        >
                                            <FaExternalLinkAlt className="text-gray-500 group-hover/link:text-gray-700 
                                            dark:text-gray-400 dark:group-hover/link:text-gray-200" size={14} />
                                        </a>
                                    )}

                                    <div className="flex items-start gap-4">
                                        {/* Institution Logo */}
                                        <div className="relative size-16 rounded-sm overflow-hidden bg-gray-100 dark:bg-gray-700/50
                                            group-hover:shadow-md transition-shadow duration-300">
                                            <Image
                                                src={edu.logo}
                                                alt={edu.institution}
                                                fill
                                                className="object-contain "
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 
                                                    dark:from-gray-700/50 dark:to-gray-800/50
                                                    shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                                    <FaGraduationCap className="text-gray-600 dark:text-gray-300" size={20} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100
                                                        group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Duration and Location */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                                    <FaCalendarAlt className="text-gray-500" size={14} />
                                                    <span>{edu.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                                    <FaMapMarkerAlt className="text-gray-500" size={14} />
                                                    <span>{edu.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <CardOverlayStyle />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
