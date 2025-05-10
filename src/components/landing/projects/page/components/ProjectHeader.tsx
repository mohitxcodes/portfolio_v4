import React from 'react'
import { FaUserAlt, FaCalendarAlt, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '../../data/projects-data'

interface ProjectHeaderProps {
    project: Project;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
    return (
        <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-bold
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        {project.title}
                    </h1>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <p className="text-md text-gray-600 dark:text-gray-400">
                    {project.subtitle}
                </p>
                <div className="flex items-center gap-6">
                    {project.role && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <FaUserAlt className="text-blue-500" />
                            <span>{project.role}</span>
                        </div>
                    )}
                    {project.duration && (
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                            <FaCalendarAlt className="text-green-500" />
                            <span>{project.duration}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 