import BackgroundStyle from '@/core/common/background'
import React from 'react'
import {
    SiJavascript, SiTypescript, SiPython, SiPostgresql,
    SiReact, SiNextdotjs, SiExpress, SiFastapi, SiNodedotjs,
    SiTailwindcss, SiBootstrap, SiCypress, SiGraphql, SiRedux,
    SiMongodb, SiMysql, SiPrisma, SiGithubactions, SiServerless,
    SiDocker, SiMapbox, SiJest, SiRedis,
    SiAlchemy, SiAmazonec2,
    SiAwsamplify,
} from 'react-icons/si'
import { DiJava, DiMaterializecss } from 'react-icons/di'
import { VscAzure } from 'react-icons/vsc'

const skillCategories = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
        icons: [
            <SiJavascript className="text-yellow-400" size={16} />,
            <SiTypescript className="text-blue-400" size={16} />,
            <SiPython className="text-blue-500" size={16} />,
            <DiJava className="text-red-500" size={16} />,
            <SiPostgresql className="text-blue-400" size={16} />
        ]
    },
    {
        title: 'Libraries & Frameworks',
        skills: [
            'React', 'Next.js', 'Express', 'Fast API', 'HonoJs', 'Node.js',
            'React Native', 'Tailwind CSS', 'Bootstrap', 'Material UI',
            'Jest', 'Cypress', 'React Query', 'GraphQL', 'Redux', 'Recoil'
        ],
        icons: [
            <SiReact className="text-blue-400" size={16} />,
            <SiNextdotjs className="text-white" size={16} />,
            <SiExpress className="text-white" size={16} />,
            <SiFastapi className="text-teal-500" size={16} />,
            <SiAlchemy className="text-white" size={16} />,
            <SiNodedotjs className="text-green-500" size={16} />,
            <SiReact className="text-blue-400" size={16} />,
            <SiTailwindcss className="text-cyan-400" size={16} />,
            <SiBootstrap className="text-purple-500" size={16} />,
            <DiMaterializecss className="text-blue-400" size={16} />,
            <SiJest className="text-red-500" size={16} />,
            <SiCypress className="text-green-400" size={16} />,
            <SiReact className="text-blue-500" size={16} />,
            <SiGraphql className="text-pink-500" size={16} />,
            <SiRedux className="text-purple-500" size={16} />,
            <SiRedux className="text-blue-400" size={16} />
        ]
    },
    {
        title: 'Databases & ORMs',
        skills: ['MongoDB', 'Postgres', 'SQLAlchemy', 'Redis', 'Alembic', 'MySQL', 'Prisma', 'PyScopG2'],
        icons: [
            <SiMongodb className="text-green-500" size={16} />,
            <SiPostgresql className="text-blue-400" size={16} />,
            <SiAlchemy className="text-gray-400" size={16} />,
            <SiRedis className="text-red-500" size={16} />,
            <SiAlchemy className="text-gray-400" size={16} />,
            <SiMysql className="text-blue-500" size={16} />,
            <SiPrisma className="text-white" size={16} />,
            <SiPython className="text-yellow-500" size={16} />
        ]
    },
    {
        title: 'Tools & Platforms',
        skills: [
            'GitHub Actions', 'Serverless', 'ESLint', 'AWS S3', 'AWS EC2',
            'AWS CloudFront', 'Azure VM', 'Docker', 'Mapbox'
        ],
        icons: [
            <SiGithubactions className="text-blue-500" size={16} />,
            <SiServerless className="text-red-500" size={16} />,
            <SiJavascript className="text-purple-500" size={16} />,
            <SiAwsamplify className="text-yellow-500" size={16} />,
            <SiAmazonec2 className="text-yellow-500" size={16} />,
            <SiAlchemy className="text-yellow-500" size={16} />,
            <VscAzure className="text-blue-500" size={16} />,
            <SiDocker className="text-blue-400" size={16} />,
            <SiMapbox className="text-blue-500" size={16} />
        ]
    }
]

export default function SkillsSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">
                    Skills
                </h2>

                <div className="space-y-4 sm:space-y-6">
                    {skillCategories.map((category, index) => (
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
