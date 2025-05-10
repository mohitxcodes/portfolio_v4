import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { Project } from '../../data/projects-data'

interface ProjectImpactProps {
    project: Project;
}

export default function ProjectImpact({ project }: ProjectImpactProps) {
    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6
            border border-gray-200 dark:border-gray-700/50
            shadow-lg">
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
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        <span>{impact}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
} 