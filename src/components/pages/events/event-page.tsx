"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaLightbulb, FaExternalLinkAlt, FaArrowLeft, FaCertificate } from 'react-icons/fa'
import BackgroundStyle from '@/components/common/background'
import Link from 'next/link'
import Image from 'next/image'

interface IEvent {
    type: string;
    title: string;
    date: string;
    location: string;
    host: string;
    overview: string;
    learningOutcomes: string[];
    images: string[];
    link: string;
    certificateUrl?: string; // Optional certificate URL
}

export default function EventPage() {
    const [activeTab, setActiveTab] = useState('all')

    const events: IEvent[] = [
        {
            type: 'events',
            title: "Badge Ceremony 2025",
            date: "Feb 2025",
            location: "D1 Auditorium, Chandigarh University, Punjab",
            host: "Chandigarh University",
            overview: "Worked on developing an AI-powered waste management system that helps cities optimize their recycling processes.",
            learningOutcomes: [
                "Advanced AI implementation in real-world scenarios",
                "Team collaboration and project management",
                "Pitching and presentation skills"
            ],
            images: [
                "/events/badge-event/badge_01.jpeg",
                "/events/badge-event/badge_02.jpeg",
                "/events/badge-event/badge_03.jpeg"
            ],
            link: "#",
            certificateUrl: "/certificates/python-certification.pdf"
        },
        {
            type: 'workshop',
            title: "Web Development Masterclass",
            date: "October 20, 2023",
            location: "Tech Hub, Bangalore",
            host: "Web Dev Community",
            overview: "Led a hands-on session on building scalable web applications using Next.js and TypeScript.",
            learningOutcomes: [
                "Advanced TypeScript patterns",
                "Next.js 13 features and best practices",
                "Performance optimization techniques"
            ],
            images: [
                "/events/workshop1.jpg",
                "/events/workshop2.jpg",
                "/events/workshop3.jpg"
            ],
            link: "#",
            certificateUrl: "/certificates/web-dev-masterclass.pdf"
        },
        {
            type: 'conference',
            title: "Tech Summit 2023",
            date: "September 5-7, 2023",
            location: "Convention Center, Mumbai",
            host: "Tech Leaders Forum",
            overview: "Participated in panel discussions on the future of AI and machine learning in enterprise applications.",
            learningOutcomes: [
                "Industry trends and future predictions",
                "Networking with industry leaders",
                "Public speaking and presentation skills"
            ],
            images: [
                "/events/conference1.jpg",
                "/events/conference2.jpg",
                "/events/conference3.jpg"
            ],
            link: "#",
            certificateUrl: "/certificates/tech-summit-certificate.pdf"
        }
    ]

    const filteredEvents = activeTab === 'all'
        ? events
        : events.filter(event => event.type === activeTab)

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 py-8">
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
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        Events & Achievements
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A collection of hackathons, workshops, and conferences I've participated in
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'all'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'events'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaTrophy className="inline-block mr-2" />
                        Events
                    </button>
                    <button
                        onClick={() => setActiveTab('hackathon')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'hackathon'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaTrophy className="inline-block mr-2" />
                        Hackathons
                    </button>

                    <button
                        onClick={() => setActiveTab('workshop')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'workshop'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaLightbulb className="inline-block mr-2" />
                        Workshops
                    </button>
                </div>

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
                                    <div className="relative h-48 sm:h-64">
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

                                    <div className="p-6">
                                        {/* Event Header */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                                    {event.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Hosted by {event.host}
                                                </p>
                                            </div>
                                            {event.certificateUrl ? (
                                                <a
                                                    href={event.certificateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                                                        transition-colors duration-300 flex items-center gap-1.5"
                                                    title="View Certificate"
                                                >
                                                    <span className="text-sm">Certificate</span>
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
                                        <div className="flex flex-wrap gap-4 mb-6">
                                            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                                <FaCalendarAlt size={14} />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                                <FaMapMarkerAlt size={14} />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        {/* Overview */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                Overview
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {event.overview}
                                            </p>
                                        </div>

                                        {/* Learning Outcomes */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                                Learning Outcomes
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
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
