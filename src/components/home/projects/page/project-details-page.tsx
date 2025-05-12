"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import {
    FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft,
    FaMobileAlt, FaDesktop, FaRobot, FaChevronRight,
} from 'react-icons/fa'
import Link from 'next/link'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '@/components/common/background'
import ProjectHeader from './components/ProjectHeader'
import ProjectOverview from './components/ProjectOverview'
import ProjectChallenges from './components/ProjectChallenges'
import ProjectImpact from './components/ProjectImpact'

interface ProjectDetailsPageProps {
    projectId: string
}

export default function ProjectDetailsPage({ projectId }: ProjectDetailsPageProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const project = projectsData.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectId)

    if (!project) {
        return (
            <BackgroundStyle>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
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
                <div className="ml-4">
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
                <div className="max-w-6xl mx-auto px-4 py-8">
                    {/* Hero Section */}
                    <div className="relative h-[60vh] w-full rounded-2xl overflow-hidden mb-12
                        border border-gray-200 dark:border-gray-700/50
                        shadow-lg">
                        {project.images && (
                            <Image
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}

                        {/* Image Navigation */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2
                                        p-3 rounded-lg bg-gray-800/50 text-white
                                        hover:bg-gray-800/70 cursor-pointer transition-all duration-300
                                        backdrop-blur-sm border border-white/20"
                                >
                                    <FaChevronLeft className="text-xl" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2
                                        p-3 rounded-lg bg-gray-800/50 text-white
                                        hover:bg-gray-800/70 cursor-pointer transition-all duration-300
                                        backdrop-blur-sm border border-white/20"
                                >
                                    <FaChevronRight className="text-xl" />
                                </button>
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                                    bg-gray-800/50 text-white px-4 py-2 rounded-lg text-sm
                                    backdrop-blur-sm border border-white/20">
                                    {currentImageIndex + 1} / {project.images.length}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Project Header */}
                    <ProjectHeader project={project} />

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            {/* Overview */}
                            <ProjectOverview project={project} />

                            {/* Challenges */}
                            <ProjectChallenges project={project} />
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Impact */}
                            <ProjectImpact project={project} />
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
} 