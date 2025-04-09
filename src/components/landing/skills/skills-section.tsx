import BackgroundStyle from '@/components/common/background'
import React from 'react'
import {
    SiJavascript, SiTypescript, SiPython, SiJouav, SiPostgresql,
    SiReact, SiNextdotjs, SiExpress, SiFastapi, SiNodedotjs,
    Si1001Tracklists, SiTailwindcss, SiBootstrap, SiMaterialdesign,
    SiJest, SiCypress, SiGraphql, SiRedux, SiMongodb,
    SiMysql, SiPrisma, SiGithubactions, SiServerless,
    SiAmazon, SiDocker, SiMapbox
} from 'react-icons/si'
import { FaCode, FaTools, FaDatabase, FaServer } from 'react-icons/fa'

const skills = {
    languages: [
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'Python', icon: <SiPython className="text-blue-500" /> },
        { name: 'Java', icon: <SiJavascript className="text-red-500" /> },
        { name: 'SQL', icon: <SiPostgresql className="text-blue-400" /> },
    ],
    frameworks: [
        { name: 'React', icon: <SiReact className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Express', icon: <SiExpress className="text-white" /> },
        { name: 'Fast API', icon: <SiFastapi className="text-teal-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
        { name: 'React Native', icon: <SiAmazon className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'Material UI', icon: <SiAmazon className="text-blue-400" /> },
        { name: 'Jest', icon: <SiJest className="text-red-600" /> },
        { name: 'Cypress', icon: <SiCypress className="text-gray-400" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    ],
    databases: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
        { name: 'Prisma', icon: <SiPrisma className="text-white" /> },
    ],
    tools: [
        { name: 'GitHub Actions', icon: <SiGithubactions className="text-blue-500" /> },
        { name: 'Serverless', icon: <SiServerless className="text-red-500" /> },
        { name: 'AWS S3', icon: <SiAmazon className="text-yellow-500" /> },
        { name: 'Azure VM', icon: <SiAmazon className="text-blue-500" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
        { name: 'Mapbox', icon: <SiMapbox className="text-blue-500" /> },
    ]
}

export default function SkillsSection() {
    return (
        <BackgroundStyle>
            <div className='flex flex-col gap-8 py-8'>
                <h2 className='text-3xl font-bold text-gray-100'>Skills</h2>

                {/* Languages */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-gray-300'>
                        <FaCode className="text-xl" />
                        <h3 className='text-xl font-semibold'>Languages</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {skills.languages.map((skill) => (
                            <div key={skill.name}
                                className='flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300'>
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Libraries & Frameworks */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-gray-300'>
                        <FaTools className="text-xl" />
                        <h3 className='text-xl font-semibold'>Libraries & Frameworks</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {skills.frameworks.map((skill) => (
                            <div key={skill.name}
                                className='flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300'>
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Databases & ORMs */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-gray-300'>
                        <FaDatabase className="text-xl" />
                        <h3 className='text-xl font-semibold'>Databases & ORMs</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {skills.databases.map((skill) => (
                            <div key={skill.name}
                                className='flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300'>
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Platforms */}
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-gray-300'>
                        <FaServer className="text-xl" />
                        <h3 className='text-xl font-semibold'>Tools & Platforms</h3>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {skills.tools.map((skill) => (
                            <div key={skill.name}
                                className='flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300'>
                                <div className="text-2xl">{skill.icon}</div>
                                <span className="text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
