"use client"
import React, { useState } from 'react'
import { FaDesktop, FaMobileAlt, FaRobot, FaArrowLeft } from 'react-icons/fa'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '@/core/common/background'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<string>('all')
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

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

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedProject !== null) {
            const project = projectsData[selectedProject]
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
        }
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedProject !== null) {
            const project = projectsData[selectedProject]
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
        }
    }

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
                            <button
                                onClick={() => setActiveTab('app')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                    ${activeTab === 'app'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                            >
                                <FaMobileAlt className="inline-block mr-2" />
                                Mobile Apps
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
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            getProjectTypeIcon={getProjectTypeIcon}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject !== null && (
                <ProjectModal
                    project={projectsData[selectedProject]}
                    currentImageIndex={currentImageIndex}
                    onClose={() => setSelectedProject(null)}
                    onNextImage={nextImage}
                    onPrevImage={prevImage}
                />
            )}
        </BackgroundStyle>
    )
}
