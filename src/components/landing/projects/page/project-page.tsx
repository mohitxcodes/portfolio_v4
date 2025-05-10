"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {
    FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft,
    FaMobileAlt,
    FaDesktop, FaRobot,
} from 'react-icons/fa'
import Link from 'next/link'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '@/components/common/background'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<string>('all')

    const getProjectTypeIcon = (type: string) => {
        switch (type) {
            case 'website':
                return <FaDesktop className="text-blue-500" />
            case 'ai':
                return <FaRobot className="text-purple-500" />
            case 'app':
                return <FaMobileAlt className="text-green-500" />
            default:
                return null
        }
    }

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(project => project.projectType === activeTab)

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
                                dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setActiveTab('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                    ${activeTab === 'all'
                                        ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                            >
                                All Projects
                            </button>
                            <button
                                onClick={() => setActiveTab('website')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                    ${activeTab === 'website'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                            >
                                <FaDesktop className="inline-block mr-2" />
                                Web Apps
                            </button>
                            <button
                                onClick={() => setActiveTab('ai')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                    ${activeTab === 'ai'
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                            >
                                <FaRobot className="inline-block mr-2" />
                                AI Projects
                            </button>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A collection of my work in web development and AI
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
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
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500
                                        group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {getProjectTypeIcon(project.projectType)}
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-2xl font-bold text-white opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-200 opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0
                                        transition-delay-100">
                                        {project.subtitle}
                                    </p>
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

                                {/* Key Features */}
                                <div className="grid grid-cols-2 gap-2">
                                    {project.features.slice(0, 4).map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="line-clamp-1">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full h-[80vh]"
                            onClick={e => e.stopPropagation()}
                        >
                            <Image
                                src={projectsData[selectedImage].image}
                                alt={projectsData[selectedImage].title}
                                fill
                                className="object-contain"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/10
                                    hover:bg-white/20 transition-colors duration-300"
                            >
                                <FaChevronLeft className="text-white text-xl" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </BackgroundStyle>
    )
}
