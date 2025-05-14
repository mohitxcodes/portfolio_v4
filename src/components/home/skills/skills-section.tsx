import BackgroundStyle from '@/core/common/background'
import React from 'react'
import SectionHeader from '@/core/common/section-header'
import { skillCategories } from '@/data/skills-data'
import { ISkillCategory } from '@/types/skills-types'

export default function SkillsSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Skills" />

                <div className="space-y-4 sm:space-y-6">
                    {skillCategories.map((category: ISkillCategory) => (
                        <div key={category.title} className="space-y-3 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skill}
                                        className="group relative flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 
                                        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 
                                        rounded-sm border border-gray-200 dark:border-gray-700/50 transition-all duration-300
                                        hover:border-gray-300 dark:hover:border-gray-600/50 cursor-default"
                                    >
                                        <span className="text-base sm:text-lg md:text-xl">
                                            {category.icons[skillIndex]}
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                                            {skill}
                                        </span>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-100/0 via-gray-200/5 to-gray-100/0 
                                        dark:from-gray-800/0 dark:via-gray-700/5 dark:to-gray-800/0 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
