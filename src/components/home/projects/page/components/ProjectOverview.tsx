import { Project } from '@/types/projects-types';
import React from 'react'
import { FaDesktop } from 'react-icons/fa'


interface ProjectOverviewProps {
    project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6
            border border-gray-200 dark:border-gray-700/50
            shadow-lg w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4
                flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50
                    flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaDesktop className="text-sm sm:text-base md:text-lg" />
                </span>
                <span className="flex-1">Overview</span>
            </h3>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                </p>

                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {/* Frontend */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                            Frontend:
                            <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                                {" "}{project.techStack.frontend}
                            </span>
                        </h4>
                    </div>

                    {/* Backend */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                            Backend:
                            <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                                {" "}{project.techStack.backend}
                            </span>
                        </h4>
                    </div>

                    {/* DevOps */}
                    {project.techStack.devops && (
                        <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                                DevOps:
                                <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                                    {" "}{project.techStack.devops}
                                </span>
                            </h4>
                        </div>
                    )}

                    {/* Extras */}
                    {project.techStack.extras && (
                        <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                                Extras:
                                <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                                    {" "}{project.techStack.extras}
                                </span>
                            </h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 