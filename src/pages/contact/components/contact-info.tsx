"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function ContactInfo() {
    const contactInfo = [
        {
            icon: <FaEnvelope className="text-xl" />,
            title: "Email",
            content: "mohitxcodes@gmail.com",
            link: "mailto:mohitxcodes@gmail.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-xl" />,
            title: "Location",
            content: "India",
            link: "#"
        },
        {
            icon: <FaClock className="text-xl" />,
            title: "Response Time",
            content: "Within 24 hours",
            link: "#"
        }
    ]


    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Feel free to reach out through email or fill out the form.
                    I'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
                {contactInfo.map((info, index) => (
                    <motion.a
                        key={index}
                        href={info.link}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block p-4 rounded-lg border border-gray-200 dark:border-gray-800
                            hover:border-gray-300 dark:hover:border-gray-700
                            transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                                {info.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {info.title}
                                </h3>
                                <p className="text-gray-900 dark:text-white">
                                    {info.content}
                                </p>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Social Links */}
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect on Social
                </h3>
                <div className="flex gap-4">
                    <motion.a
                        href="https://github.com/mohitxcodes"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                            text-gray-600 dark:text-gray-400
                            hover:text-gray-900 dark:hover:text-white
                            transition-colors"
                    >
                        <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/mohitxcodes"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                            text-gray-600 dark:text-gray-400
                            hover:text-gray-900 dark:hover:text-white
                            transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                        href="https://instagram.com/mohitxcodes"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                            text-gray-600 dark:text-gray-400
                            hover:text-gray-900 dark:hover:text-white
                            transition-colors"
                    >
                        <FaInstagram size={20} />
                    </motion.a>
                    <motion.a
                        href="https://twitter.com/mohitxcodes"
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                            text-gray-600 dark:text-gray-400
                            hover:text-gray-900 dark:hover:text-white
                            transition-colors"
                    >
                        <FaTwitter size={20} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
} 