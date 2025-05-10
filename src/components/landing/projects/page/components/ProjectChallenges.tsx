import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Project } from '../../data/projects-data'

interface ProjectChallengesProps {
    project: Project;
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
    return (
        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6
            border border-gray-200 dark:border-gray-700/50
            shadow-lg">
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
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                        <span>{challenge}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
} 