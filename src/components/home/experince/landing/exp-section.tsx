import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaExternalLinkAlt, FaClock } from 'react-icons/fa'
import { experiences } from '../data/exp-data'
import SectionHeader from '@/core/common/section-header'

export default function ExperienceSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Experience" link="/experience" linkText="View All Experience" />

                <div className="relative">
                    {/* Enhanced Timeline Line with Gradient and Animation */}
                    <div className="absolute left-3 md:left-4 sm:left-6 top-0 bottom-0 w-0.5">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-50 blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-25 blur-md" />
                    </div>

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-10 md:pl-12 sm:pl-16 animate-slide-in group/timeline"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Enhanced Timeline Dot with Multiple Effects */}
                                <div className="absolute left-2 md:left-3 sm:left-5 top-1.5">
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
                                        <div className="relative w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-400 dark:bg-gray-500 
                                            group-hover/timeline:scale-110 transition-transform duration-300">
                                            <div className="absolute inset-0 rounded-full bg-gray-400 dark:bg-gray-500 animate-ping opacity-75" />
                                        </div>

                                        {/* Connecting Line Animation */}
                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 
                                            bg-gradient-to-b from-gray-400 to-transparent dark:from-gray-500 
                                            opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                <div className="group relative bg-white dark:bg-gray-800/50 rounded-xl p-3 md:p-4 sm:p-6 
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl
                                    hover:scale-[1.01] sm:hover:scale-[1.02] transform
                                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r 
                                    before:from-gray-100/0 before:via-gray-200/5 before:to-gray-100/0 
                                    dark:before:from-gray-800/0 dark:before:via-gray-700/5 dark:before:to-gray-800/0 
                                    before:opacity-0 before:transition-opacity before:duration-300
                                    hover:before:opacity-100">

                                    {/* Company Link Badge */}
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="z-50 absolute top-2 md:top-3 sm:top-4 right-2 md:right-3 sm:right-4 p-1 md:p-1.5 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                        hover:bg-gray-200 dark:hover:bg-gray-600/50 transition-colors duration-300
                                        group/link"
                                    >
                                        <FaExternalLinkAlt className="text-gray-500 group-hover/link:text-gray-700 
                                        dark:text-gray-400 dark:group-hover/link:text-gray-200" size={12} />
                                    </a>

                                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 relative">
                                        <div className="rounded-sm bg-gradient-to-br from-gray-100 to-gray-50 
                                            dark:from-gray-700/50 dark:to-gray-800/50
                                            shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img src={exp.companyLogo} alt={exp.company} className="size-8 md:size-10 rounded-sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100
                                                group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                                <FaBuilding className="text-gray-500 group-hover:text-gray-600 
                                                    dark:group-hover:text-gray-300 transition-colors duration-300" size={12} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location and Duration */}
                                    <div className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-2 md:gap-4 mb-4 md:mb-6 px-1 md:px-2">
                                        <div className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                            <FaMapMarkerAlt className="text-gray-500 group-hover:text-gray-600 
                                                dark:group-hover:text-gray-300 transition-colors duration-300" size={12} />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                            <FaCalendarAlt className="text-gray-500 group-hover:text-gray-600 
                                                dark:group-hover:text-gray-300 transition-colors duration-300" size={12} />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                                            <FaClock className="text-gray-500 group-hover:text-gray-600 
                                                dark:group-hover:text-gray-300 transition-colors duration-300" size={12} />
                                            <span>{exp.type}</span>
                                        </div>
                                    </div>

                                    {/* Technologies Section */}
                                    <div className="relative">
                                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b 
                                            from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 
                                            dark:to-gray-600 rounded-full opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-500" />

                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {exp.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="group/tech relative flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 sm:px-3 py-1 md:py-1.5 
                                                    bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 
                                                    rounded-sm border border-gray-200 dark:border-gray-700/50 transition-all duration-300
                                                    hover:border-gray-300 dark:hover:border-gray-600/50 cursor-default"
                                                    style={{ animationDelay: `${idx * 100}ms` }}
                                                >
                                                    <span className="text-sm md:text-base">
                                                        <tech.icon className={tech.color} size={14} />
                                                    </span>
                                                    <span className="text-gray-700 dark:text-gray-300 text-[10px] md:text-xs sm:text-sm font-medium">
                                                        {tech.name}
                                                    </span>

                                                    {/* Hover Effect */}
                                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-100/0 via-gray-200/5 to-gray-100/0 
                                                    dark:from-gray-800/0 dark:via-gray-700/5 dark:to-gray-800/0 
                                                    opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-24 md:w-28 sm:w-32 h-24 md:h-28 sm:h-32 bg-gradient-to-br from-gray-100/20 to-transparent 
                                        dark:from-gray-700/20 rounded-bl-full opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500" />
                                    <div className="absolute bottom-0 left-0 w-24 md:w-28 sm:w-32 h-24 md:h-28 sm:h-32 bg-gradient-to-tr from-gray-100/20 to-transparent 
                                        dark:from-gray-700/20 rounded-tr-full opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
