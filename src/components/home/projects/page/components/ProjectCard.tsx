import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaUserAlt, FaCalendarAlt, FaArrowRight, FaGlobe, FaBrain, FaMobile } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ProjectCardProps } from '@/types/projects-types'


export default function ProjectCard({ project, index, getProjectTypeIcon }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden
                border border-gray-200 dark:border-gray-700/50
                shadow-lg hover:shadow-2xl transition-all duration-300
                hover:scale-[1.02] transform w-full"
        >
            {/* Project Image */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                {project.images && project.images.length > 0 && (
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500
                            group-hover:scale-110"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 flex gap-2">
                    {getProjectTypeIcon(project.projectType)}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-4 sm:p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                            {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            {project.subtitle}
                        </p>
                    </div>
                    <div className="flex gap-2 self-end sm:self-auto">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-700
                                    text-gray-600 dark:text-gray-400
                                    hover:bg-gray-200 dark:hover:bg-gray-600
                                    transition-all duration-300"
                            >
                                <FaGithub className="text-lg sm:text-xl" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50
                                    text-blue-600 dark:text-blue-400
                                    hover:bg-blue-200 dark:hover:bg-blue-800/50
                                    transition-all duration-300"
                            >
                                <FaExternalLinkAlt className="text-lg sm:text-xl" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Meta */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {project.role && (
                        <div className="flex items-center gap-1">
                            {project.projectType === 'website' ? (
                                <span className="flex items-center gap-1">
                                    <FaGlobe className="" />
                                    <span className="hidden xs:inline">Web Application</span>
                                    <span className="xs:hidden">Web</span>
                                </span>
                            ) : project.projectType === 'ai' ? (
                                <span className="flex items-center gap-1">
                                    <FaBrain className="" />
                                    <span>AI/ML</span>
                                </span>
                            ) : project.projectType === 'app' ? (
                                <span className="flex items-center gap-1">
                                    <FaMobile className="" />
                                    <span className="hidden xs:inline">Mobile Application</span>
                                    <span className="xs:hidden">Mobile</span>
                                </span>
                            ) : (
                                <span>{project.role}</span>
                            )}
                        </div>
                    )}
                    {project.duration && (
                        <div className="flex items-center gap-1">
                            <FaCalendarAlt className="" />
                            <span>{project.duration}</span>
                        </div>
                    )}
                </div>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium
                                bg-gray-100 dark:bg-gray-700/50
                                text-gray-700 dark:text-gray-300
                                rounded-md border border-gray-200 dark:border-gray-600/50
                                hover:scale-105 transform transition-all duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View Details Button */}
                <Link
                    href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-center w-full py-1.5 sm:py-2 px-3 sm:px-4 rounded-sm text-center font-medium
                        bg-gray-100 text-xs sm:text-sm dark:bg-gray-700/50 text-gray-800 dark:text-white
                        border border-gray-200 dark:border-gray-600/50
                        hover:bg-gray-200 dark:hover:bg-gray-600/50
                        transition-all duration-300"
                >
                    View Details
                    <FaArrowRight className="ml-2 size-3" />
                </Link>
            </div>
        </motion.div>
    )
} 