import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { Project } from '@/types/projects-types';

interface ProjectImpactProps {
    project: Project;
}

export default function ProjectImpact({ project }: ProjectImpactProps) {
    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 sm:p-5 md:p-6
            border border-gray-200 dark:border-gray-700/50
            shadow-lg w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4
                flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50
                    flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaChartLine className="text-sm sm:text-base md:text-lg" />
                </span>
                <span className="flex-1">Project Impact</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
                {project.impact.map((impact, idx) => (
                    <li key={idx}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        <span>{impact}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
} 