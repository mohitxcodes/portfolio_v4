"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa'
import BackgroundStyle from '@/core/common/background'
import { portfolioVersions } from '@/data/portfolio-data'

export default function PortfolioPage() {
    const [selectedVersion, setSelectedVersion] = useState<number>(0)
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

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
            <div className="min-h-screen w-full">
                {/* Header with Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center  px-4"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-start mb-6">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
                                    dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                            >
                                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Home</span>
                            </Link>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6
                            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                            dark:from-white dark:via-gray-300 dark:to-white
                            bg-clip-text text-transparent">
                            Portfolio Evolution
                        </h1>
                        <p className="mb-12 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                            Witness the journey of my portfolio&apos;s evolution, from a simple static site to a modern, feature-rich application.
                        </p>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Left Side - Timeline (hidden on mobile) */}
                        <div className="hidden lg:block lg:col-span-2">
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
                                    className="space-y-6 sm:space-y-8"
                                >
                                    {/* Project Header with Links */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex border-b border-gray-200 dark:border-gray-700/50 pb-4 w-full justify-between items-center gap-4">
                                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                                {portfolioVersions[selectedVersion].title}
                                            </h2>
                                            {!isMobile && (
                                                <div className="flex items-center gap-2">
                                                    <motion.button
                                                        onClick={prevVersion}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center px-4 gap-2 p-2 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                                                            hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        <FaChevronLeft />
                                                        <span className="text-sm">Back</span>
                                                    </motion.button>
                                                    <motion.button
                                                        onClick={nextVersion}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="flex items-center px-4 gap-2 p-2 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
                                                            hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                                    >
                                                        <span className="text-sm">Next</span>
                                                        <FaChevronRight />
                                                    </motion.button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Description */}
                                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                                        {portfolioVersions[selectedVersion].description}
                                    </p>

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
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
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
                                        <div className="flex gap-3 w-full sm:w-auto">
                                            <motion.a
                                                href={portfolioVersions[selectedVersion].githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm
                                                    bg-gray-100 dark:bg-gray-800
                                                    text-gray-900 dark:text-white
                                                    hover:bg-gray-200 dark:hover:bg-gray-700
                                                    transition-colors flex-1 sm:flex-initial"
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
                                                className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-sm
                                                    bg-gray-900 dark:bg-white
                                                    text-white dark:text-gray-900
                                                    hover:opacity-90 transition-opacity flex-1 sm:flex-initial"
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

                {/* Mobile Version Selector - Fixed at Bottom */}
                {isMobile && (
                    <div className="fixed bottom-0 left-0 right-0 z-40">
                        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-4 border-t border-gray-200 dark:border-gray-800 shadow-lg">
                            <button
                                onClick={prevVersion}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                            >
                                <FaChevronLeft />
                            </button>
                            <div className="text-center">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{portfolioVersions[selectedVersion].version}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{portfolioVersions[selectedVersion].year}</p>
                            </div>
                            <button
                                onClick={nextVersion}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </BackgroundStyle>
    )
}
