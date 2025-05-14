"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import BackgroundStyle from '@/core/common/background'
import Link from 'next/link'
import ContactForm from './components/contact-form'

export default function ContactPage() {

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
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                        I&apos;m always open to exploring new collaborations and exciting opportunities.
                        Whether it&apos;s a project idea, a job opportunity, or simply a chance to connect,
                        feel free to reach out!
                    </p>

                </motion.div>

                {/* Contact Form Component */}
                <ContactForm />
            </div>
        </BackgroundStyle>
    )
}
