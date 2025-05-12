import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaUserAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { Project } from '../../data/projects-data'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    project: Project;
    index: number;
    getProjectTypeIcon: (type: string) => React.ReactNode;
}

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
                hover:scale-[1.02] transform"
        >
            {/* Project Image */}
            <div className="relative h-64 w-full overflow-hidden">
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
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {project.subtitle}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700
                                    text-gray-600 dark:text-gray-400
                                    hover:bg-gray-200 dark:hover:bg-gray-600
                                    transition-all duration-300"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50
                                    text-blue-600 dark:text-blue-400
                                    hover:bg-blue-200 dark:hover:bg-blue-800/50
                                    transition-all duration-300"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Meta */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    {project.role && (
                        <div className="flex items-center gap-1">
                            <FaUserAlt className="text-blue-500" />
                            <span>{project.role}</span>
                        </div>
                    )}
                    {project.duration && (
                        <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-green-500" />
                            <span>{project.duration}</span>
                        </div>
                    )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-xs font-medium
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
                    className="flex items-center justify-center w-full py-2 px-4 rounded-sm text-center font-medium
                        bg-gray-100 text-sm dark:bg-gray-700/50 text-gray-800 dark:text-white
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