import React from 'react'
import { FaUserAlt, FaCalendarAlt, FaGlobe, FaBrain, FaMobile, } from 'react-icons/fa'
import { Project } from '@/types/projects-types'

interface ProjectHeaderProps {
    project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
    return (
        <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        {project.title}
                    </h1>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0'>
                <p className="text-sm sm:text-md text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                    {project.role && (
                        <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                            {project.projectType === 'website' ? (
                                <span className="flex items-center gap-1">
                                    <FaGlobe className="text-blue-600 dark:text-blue-400" />
                                    Web Application
                                </span>
                            ) : project.projectType === 'ai' ? (
                                <span className="flex items-center gap-1">
                                    <FaBrain className="text-purple-600 dark:text-purple-400" />
                                    AI/ML
                                </span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    <FaMobile className="text-green-600 dark:text-green-400" />
                                    Mobile Application
                                </span>
                            )}
                        </div>
                    )}
                    {project.duration && (
                        <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                            <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
                            <span>{project.duration}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 