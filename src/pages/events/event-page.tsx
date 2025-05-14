"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaArrowLeft, } from 'react-icons/fa'
import BackgroundStyle from '@/core/common/background'
import Link from 'next/link'
import Image from 'next/image'
import { events, tabs } from '@/data/event-data'



export default function EventPage() {
    const [activeTab, setActiveTab] = useState('all')
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

    const filteredEvents = activeTab === 'all'
        ? events
        : events.filter(event => event.type === activeTab)

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
                                dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>

                        {/* Tabs - Desktop View - Positioned at right top */}
                        {!isMobile && (
                            <div className="flex gap-2">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-1 rounded-sm text-sm font-medium transition-all duration-300
                                            ${activeTab === tab.id
                                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                                    >
                                        {tab.icon && <tab.icon className="inline-block mr-2" />}
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        Events & Achievements
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A collection of hackathons, workshops, and conferences I&apos;ve participated in
                    </p>
                </motion.div>

                {/* Tabs - Mobile View */}
                {isMobile && (
                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                                    ${activeTab === tab.id
                                        ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                            >
                                {tab.icon && <tab.icon className="inline-block mr-1" />}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Events Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
                    </div>

                    <div className="space-y-12">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-12 sm:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-3 sm:left-5 top-1.5">
                                    <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" />
                                </div>

                                <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl">

                                    {/* Event Images */}
                                    <div className="relative h-40 sm:h-48 md:h-64">
                                        <div className="absolute inset-0 flex">
                                            {event.images.map((image, idx) => (
                                                <div key={idx} className="relative flex-1">
                                                    <Image
                                                        src={image}
                                                        alt={`${event.title} - Image ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6">
                                        {/* Event Header */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                                    {event.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                    Hosted by {event.host}
                                                </p>
                                            </div>
                                            {event.certificateUrl ? (
                                                <a
                                                    href={event.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                                                        transition-colors duration-300 flex items-center gap-1.5 text-sm"
                                                    title="View Certificate"
                                                >
                                                    <span className="text-xs sm:text-sm">Certificate</span>
                                                    <FaExternalLinkAlt size={12} />
                                                </a>
                                            ) : (
                                                <a
                                                    href={event.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                                                        transition-colors duration-300"
                                                >
                                                    <FaExternalLinkAlt size={14} />
                                                </a>
                                            )}
                                        </div>

                                        {/* Event Details */}
                                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                            <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                <FaCalendarAlt size={12} className="sm:text-base" />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                <FaMapMarkerAlt size={12} className="sm:text-base" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        {/* Overview */}
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                                                Overview
                                            </h4>
                                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                                {event.overview}
                                            </p>
                                        </div>

                                        {/* Learning Outcomes */}
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                                                Learning Outcomes
                                            </h4>
                                            <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                                {event.learningOutcomes.map((outcome, idx) => (
                                                    <li key={idx}>{outcome}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
