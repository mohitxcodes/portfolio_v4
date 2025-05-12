import React from 'react'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/msxcodes' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/msxcodes' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com/msxcodes' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/msxcodes' }
]

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black border-t mt-4 border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    {/* Left side - Copyright and Links */}
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Mohit Kumar
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                transition-colors duration-300"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                transition-colors duration-300"
                            >
                                Terms
                            </Link>
                        </div>
                    </div>

                    {/* Right side - Social Links */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300
                                transition-colors duration-300 hover:scale-110 transform"
                                aria-label={item.name}
                            >
                                <item.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
