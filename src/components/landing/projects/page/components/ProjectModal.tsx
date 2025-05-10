import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaUserAlt, FaCalendarAlt, FaTimes, FaChevronLeft, FaChevronRight, FaDesktop, FaCode, FaExclamationTriangle, FaChartLine } from 'react-icons/fa'
import { Project } from '../../data/projects-data'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectModalProps {
    project: Project;
    currentImageIndex: number;
    onClose: () => void;
    onNextImage: (e: React.MouseEvent) => void;
    onPrevImage: (e: React.MouseEvent) => void;
}

export default function ProjectModal({ project, currentImageIndex, onClose, onNextImage, onPrevImage }: ProjectModalProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50"
            >
                {/* Backdrop with blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <div className="relative min-h-screen p-4 md:p-8">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
                            shadow-2xl border border-gray-200 dark:border-gray-700"
                    >
                        {/* Modal Header with gradient */}
                        <div className="relative p-6 border-b border-gray-200 dark:border-gray-700
                            bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                            <div className="flex justify-between items-start">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                                            dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        {project.subtitle}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700
                                        transition-colors duration-300"
                                >
                                    <FaTimes className="text-gray-500 dark:text-gray-400 text-xl" />
                                </button>
                            </div>

                            {/* Project Meta */}
                            <div className="flex items-center gap-6 mt-4 text-sm">
                                {project.role && (
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <FaUserAlt className="text-blue-500" />
                                        <span>{project.role}</span>
                                    </div>
                                )}
                                {project.duration && (
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <FaCalendarAlt className="text-green-500" />
                                        <span>{project.duration}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
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
                                </div>
                            </div>
                        </div>

                        {/* Image Carousel */}
                        <div className="relative h-[500px] w-full bg-gray-100 dark:bg-gray-900">
                            {project.images && (
                                <Image
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            )}
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={onPrevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2
                                            p-3 rounded-full bg-black/50 text-white
                                            hover:bg-black/70 transition-all duration-300
                                            backdrop-blur-sm"
                                    >
                                        <FaChevronLeft className="text-xl" />
                                    </button>
                                    <button
                                        onClick={onNextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2
                                            p-3 rounded-full bg-black/50 text-white
                                            hover:bg-black/70 transition-all duration-300
                                            backdrop-blur-sm"
                                    >
                                        <FaChevronRight className="text-xl" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                                        bg-black/50 text-white px-4 py-2 rounded-full text-sm
                                        backdrop-blur-sm">
                                        {currentImageIndex + 1} / {project.images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Project Details */}
                        <div className="p-8 space-y-8">
                            {/* Description */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4
                                    flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50
                                        flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <FaDesktop className="text-lg" />
                                    </span>
                                    Description
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4
                                    flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50
                                        flex items-center justify-center text-purple-600 dark:text-purple-400">
                                        <FaCode className="text-lg" />
                                    </span>
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 text-sm font-medium
                                                bg-gray-100 dark:bg-gray-700/50
                                                text-gray-700 dark:text-gray-300
                                                rounded-lg border border-gray-200 dark:border-gray-600/50
                                                hover:scale-105 transform transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4
                                    flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/50
                                        flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                        <FaExclamationTriangle className="text-lg" />
                                    </span>
                                    Challenges & Solutions
                                </h3>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, idx) => (
                                        <li key={idx}
                                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30
                                                border border-gray-200 dark:border-gray-600/30"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {challenge}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Impact */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4
                                    flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50
                                        flex items-center justify-center text-blue-600 dark:text-blue-400">
                                        <FaChartLine className="text-lg" />
                                    </span>
                                    Project Impact
                                </h3>
                                <ul className="space-y-3">
                                    {project.impact.map((impact, idx) => (
                                        <li key={idx}
                                            className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30
                                                border border-gray-200 dark:border-gray-600/30"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {impact}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
} 