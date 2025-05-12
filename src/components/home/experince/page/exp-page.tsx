"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaAward, FaArrowLeft, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa'
import BackgroundStyle from '@/components/common/background'
import Link from 'next/link'
import { experiences } from '../data/exp-data'

export default function ExperiencePage() {
    const [activeTab, setActiveTab] = useState('experience')

    const certifications = [
        {
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2023",
            credentialId: "AWS-123456",
            link: "#"
        },
        {
            title: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2023",
            credentialId: "GCP-789012",
            link: "#"
        },
        {
            title: "Microsoft Certified: Azure Developer Associate",
            issuer: "Microsoft",
            date: "2023",
            credentialId: "MS-345678",
            link: "#"
        }
    ]

    const licenses = [
        {
            title: "Full Stack Development",
            issuer: "Meta",
            date: "2023",
            credentialId: "META-123456",
            link: "#"
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Stanford University",
            date: "2023",
            credentialId: "STAN-789012",
            link: "#"
        }
    ]

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
                        Professional Journey
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of my professional experience, certifications, and achievements
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'experience'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaBriefcase className="inline-block mr-2" />
                        Experience
                    </button>
                    <button
                        onClick={() => setActiveTab('certifications')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'certifications'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaCertificate className="inline-block mr-2" />
                        Certifications
                    </button>
                    <button
                        onClick={() => setActiveTab('licenses')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                            ${activeTab === 'licenses'
                                ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'}`}
                    >
                        <FaAward className="inline-block mr-2" />
                        Licenses
                    </button>
                </div>

                {/* Content */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600" />
                    </div>

                    <div className="space-y-8">
                        {activeTab === 'experience' && experiences.map((exp, index) => (
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

                                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="rounded-sm bg-gradient-to-br from-gray-100 to-gray-50 
                                            dark:from-gray-700/50 dark:to-gray-800/50">
                                            <img src={exp.companyLogo} alt={exp.company} className="size-10 rounded-sm" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <FaBuilding size={14} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                            <FaMapMarkerAlt size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                            <FaCalendarAlt size={14} />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                                            <FaClock size={14} />
                                            <span>{exp.type}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="flex items-center gap-1.5 px-3 py-1.5 
                                                    bg-gray-100 dark:bg-gray-800/50 
                                                    rounded-sm border border-gray-200 dark:border-gray-700/50"
                                            >
                                                <tech.icon className={tech.color} size={16} />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {tech.name}
                                                </span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {activeTab === 'certifications' && certifications.map((cert, index) => (
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

                                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {cert.issuer}
                                            </p>
                                        </div>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                                hover:bg-gray-200 dark:hover:bg-gray-600/50 
                                                transition-colors duration-300"
                                        >
                                            <FaExternalLinkAlt className="text-gray-500 dark:text-gray-400" size={14} />
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <FaCalendarAlt size={14} />
                                            <span>{cert.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span>Credential ID: {cert.credentialId}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {activeTab === 'licenses' && licenses.map((license, index) => (
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

                                <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 
                                    border border-gray-200 dark:border-gray-700/50 
                                    hover:border-gray-300 dark:hover:border-gray-600/50 
                                    transition-all duration-300 hover:shadow-xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                                {license.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {license.issuer}
                                            </p>
                                        </div>
                                        <a
                                            href={license.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                                hover:bg-gray-200 dark:hover:bg-gray-600/50 
                                                transition-colors duration-300"
                                        >
                                            <FaExternalLinkAlt className="text-gray-500 dark:text-gray-400" size={14} />
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <FaCalendarAlt size={14} />
                                            <span>{license.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span>Credential ID: {license.credentialId}</span>
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
