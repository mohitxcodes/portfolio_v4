"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {
    FaArrowLeft, FaChevronLeft, FaChevronRight,
} from 'react-icons/fa'
import Link from 'next/link'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '@/core/common/background'
import ProjectHeader from './components/ProjectHeader'
import ProjectOverview from './components/ProjectOverview'
import ProjectChallenges from './components/ProjectChallenges'
import ProjectImpact from './components/ProjectImpact'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectDetailsPageProps {
    projectId: string
}

export default function ProjectDetailsPage({ projectId }: ProjectDetailsPageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const project = projectsData.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId)

    if (!project) {
        return (
            <BackgroundStyle>
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <FaArrowLeft />
                            Back to Projects
                        </Link>
                    </div>
                </div>
            </BackgroundStyle>
        )
    }

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    return (
        <BackgroundStyle>
            <div className="min-h-screen">
                {/* Back Button */}
                <div className="px-4 sm:px-6 pt-4 sm:pt-6">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
                            dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Projects</span>
                    </Link>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
                    {/* Hero Section */}
                    <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-12
                        border border-gray-200 dark:border-gray-700/50
                        shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                {project.images && (
                                    <Image
                                        src={project.images[currentImageIndex]}
                                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Image Navigation */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                                        p-2 sm:p-3 rounded-lg bg-gray-800/50 text-white
                                        hover:bg-gray-800/70 cursor-pointer transition-all duration-300
                                        backdrop-blur-sm border border-white/20"
                                >
                                    <FaChevronLeft className="text-base sm:text-lg md:text-xl" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                                        p-2 sm:p-3 rounded-lg bg-gray-800/50 text-white
                                        hover:bg-gray-800/70 cursor-pointer transition-all duration-300
                                        backdrop-blur-sm border border-white/20"
                                >
                                    <FaChevronRight className="text-base sm:text-lg md:text-xl" />
                                </button>
                                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2
                                    bg-gray-800/50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm
                                    backdrop-blur-sm border border-white/20">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                                <div className="absolute bottom-10 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                                    {project.images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                                ? 'bg-white w-3 sm:w-4'
                                                : 'bg-white/50 hover:bg-white/80'
                                                }`}
                                            aria-label={`Go to image ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Project Header */}
                    <ProjectHeader project={project} />

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
                            {/* Overview */}
                            <ProjectOverview project={project} />

                            {/* Challenges */}
                            <ProjectChallenges project={project} />
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            {/* Impact */}
                            <ProjectImpact project={project} />
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
} 