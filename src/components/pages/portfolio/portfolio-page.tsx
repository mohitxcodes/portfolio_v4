"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaPalette, FaRocket, FaArrowRight } from 'react-icons/fa'
import BackgroundStyle from '@/components/common/background'

interface PortfolioVersion {
    version: string;
    year: string;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];

}

const portfolioVersions: PortfolioVersion[] = [
    {
        version: "v1",
        year: "2022",
        title: "My First Portfolio",
        description: "A simple, static portfolio showcasing my initial projects and skills. Built with basic HTML, CSS, and JavaScript.",
        image: "/projects/portfolio/portfolio-v1.png",
        githubUrl: "https://github.com/mohitxcodes/portfolio-v1",
        liveUrl: "https://portfolio-v1.msxcodes.in",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
        version: "v2",
        year: "2023",
        title: "Enhanced Portfolio",
        description: "An improved version with better UI/UX, animations, and more interactive features.",
        image: "/projects/portfolio/portfolio-v2.png",
        githubUrl: "https://github.com/mohitxcodes/portfolio-v2",
        liveUrl: "https://portfolio-v2.msxcodes.in",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    },
    {
        version: "v3",
        year: "2023",
        title: "Full-Stack Portfolio",
        description: "A comprehensive portfolio with backend integration, authentication, and advanced features.",
        image: "/projects/portfolio/portfolio-v3.png",
        githubUrl: "https://github.com/mohitxcodes/portfolio-v3",
        liveUrl: "https://portfolio-v3.msxcodes.in",

        technologies: ["Next.js", "TypeScript", "MongoDB", "Express"],
    },
    {
        version: "v4",
        year: "2024",
        title: "Modern Portfolio",
        description: "A cutting-edge portfolio with advanced features, AI integration, and exceptional performance.",
        image: "/projects/portfolio/portfolio-v4.png",
        githubUrl: "https://github.com/mohitxcodes/portfolio-v4",
        liveUrl: "https://portfolio-v4.msxcodes.in",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "AI Integration"],
    },
    {
        version: "v5",
        year: "2025",
        title: "Modern Portfolio",
        description: "A cutting-edge portfolio with advanced features, AI integration, and exceptional performance.",
        image: "/projects/portfolio/portfolio-v5.png",
        githubUrl: "https://github.com/mohitxcodes/portfolio-v5",
        liveUrl: "https://portfolio-v5.msxcodes.in",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "AI Integration"],
    }
]

export default function PortfolioPage() {
    const [selectedVersion, setSelectedVersion] = useState<number>(0)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview')

    const nextVersion = () => {
        setSelectedVersion((prev) => (prev + 1) % portfolioVersions.length)
    }

    const prevVersion = () => {
        setSelectedVersion((prev) => (prev - 1 + portfolioVersions.length) % portfolioVersions.length)
    }

    // Reverse the portfolio versions array
    const reversedVersions = [...portfolioVersions].reverse()

    return (
        <BackgroundStyle>
            <div className="min-h-screen">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        Portfolio Evolution
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Witness the journey of my portfolio's evolution, from a simple static site to a modern, feature-rich application.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        {/* Left Side - Timeline */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="relative min-h-[600px]">
                                    {/* Timeline Line */}
                                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

                                    {/* Timeline Items */}
                                    {reversedVersions.map((version, index) => (
                                        <motion.div
                                            key={version.version}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`relative pl-16 pb-16 ${index === reversedVersions.length - 1 ? 'pb-0' : ''}`}
                                        >
                                            {/* Timeline Dot with Ring Effect */}
                                            <motion.div
                                                className="absolute left-6 top-1.5"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {/* Outer Ring */}
                                                <motion.div
                                                    className={`absolute -inset-2 rounded-full border-2 transition-all duration-300
                                                        ${selectedVersion === (reversedVersions.length - 1 - index)
                                                            ? 'border-black dark:border-white'
                                                            : 'border-gray-200 dark:border-gray-700'}`}
                                                    animate={selectedVersion === (reversedVersions.length - 1 - index) ? {
                                                        scale: [1, 1.2, 1],
                                                        opacity: [0.5, 0.2, 0.5]
                                                    } : {}}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    }}
                                                />
                                                {/* Inner Dot */}
                                                <motion.div
                                                    className={`w-3 h-3 rounded-full transition-all duration-300
                                                        ${selectedVersion === (reversedVersions.length - 1 - index)
                                                            ? 'bg-black dark:bg-white'
                                                            : 'bg-gray-300 dark:bg-gray-600'}`}
                                                    animate={selectedVersion === (reversedVersions.length - 1 - index) ? {
                                                        scale: [1, 1.2, 1]
                                                    } : {}}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    }}
                                                />
                                            </motion.div>

                                            {/* Timeline Content */}
                                            <motion.button
                                                onClick={() => setSelectedVersion(reversedVersions.length - 1 - index)}
                                                className={`text-left w-full transition-all duration-300
                                                    ${selectedVersion === (reversedVersions.length - 1 - index)
                                                        ? 'opacity-100'
                                                        : 'opacity-60 hover:opacity-100'}`}
                                                whileHover={{ x: 4 }}
                                            >
                                                <div className="space-y-1.5">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-base font-medium text-gray-900 dark:text-white">
                                                            {version.version}
                                                        </h3>
                                                        <motion.span
                                                            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.1 + 0.2 }}
                                                        >
                                                            {version.year}
                                                        </motion.span>
                                                    </div>
                                                </div>
                                            </motion.button>


                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Project Details */}
                        <div className="lg:col-span-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedVersion}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-8"
                                >
                                    {/* Project Header with Links */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                                {portfolioVersions[selectedVersion].title}
                                            </h2>
                                            <div className="flex items-center gap-2">
                                                <motion.button
                                                    onClick={prevVersion}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                                                        hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                >
                                                    <FaChevronLeft />
                                                </motion.button>
                                                <motion.button
                                                    onClick={nextVersion}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                                                        hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                >
                                                    <FaChevronRight />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Image */}
                                    <div className="relative aspect-video rounded-lg overflow-hidden
                                        border border-gray-200 dark:border-gray-700/50
                                        shadow-lg hover:shadow-xl transition-all duration-300">
                                        <Image
                                            src={portfolioVersions[selectedVersion].image}
                                            alt={portfolioVersions[selectedVersion].title}
                                            fill
                                            className="object-cover cursor-pointer"
                                            onClick={() => setIsImageModalOpen(true)}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                                    </div>

                                    {/* Tech Stack and Links */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4">
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {portfolioVersions[selectedVersion].technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="px-3 py-1.5 rounded-lg text-sm
                                                        bg-gray-100 dark:bg-gray-800
                                                        text-gray-900 dark:text-white
                                                        border border-gray-200 dark:border-gray-700
                                                        hover:shadow-md transition-all duration-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={portfolioVersions[selectedVersion].githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg
                                                    bg-gray-100 dark:bg-gray-800
                                                    text-gray-900 dark:text-white
                                                    hover:bg-gray-200 dark:hover:bg-gray-700
                                                    transition-colors"
                                            >
                                                <FaGithub />
                                                <span>View Code</span>
                                            </motion.a>
                                            <motion.a
                                                href={portfolioVersions[selectedVersion].liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg
                                                    bg-gray-900 dark:bg-white
                                                    text-white dark:text-gray-900
                                                    hover:opacity-90 transition-opacity"
                                            >
                                                <FaExternalLinkAlt />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Image Modal */}
                                    <AnimatePresence>
                                        {isImageModalOpen && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-4"
                                                onClick={() => setIsImageModalOpen(false)}
                                            >
                                                <motion.div
                                                    initial={{ scale: 0.9 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0.9 }}
                                                    className="relative w-full max-w-5xl aspect-video"
                                                    onClick={e => e.stopPropagation()}
                                                >
                                                    <Image
                                                        src={portfolioVersions[selectedVersion].image}
                                                        alt={portfolioVersions[selectedVersion].title}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                    <button
                                                        onClick={() => setIsImageModalOpen(false)}
                                                        className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white
                                                            hover:bg-white/20 transition-colors"
                                                    >
                                                        <FaChevronLeft className="rotate-45" />
                                                    </button>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
