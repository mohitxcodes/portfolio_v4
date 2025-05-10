"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Experience', href: '/experience' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Projects', href: '/projects' },
        { label: 'Events', href: '/events' },
        { label: 'Contact', href: '/contact' }
    ]

    return (
        <header className="max-w-6xl px-4 py-4 mx-auto relative bg-white/95 dark:bg-black/95 z-50 
            border rounded-lg border-gray-200 dark:border-gray-800 my-4 
            shadow-lg shadow-gray-100 dark:shadow-none
            transition-all duration-300">
            <div className="flex items-center justify-between">
                {/* Logo/Brand */}
                <Link
                    href="/"
                    className="text-xl font-bold 
                        text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white 
                        transition-colors group"
                >
                    <span className="relative">
                        Mohit Singh
                        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-800 dark:bg-gray-100 
                            group-hover:w-full group-hover:left-0 transition-all duration-300" />
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-2">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`group relative px-3 py-1.5 rounded-lg
                                    text-gray-600 hover:text-gray-900 
                                    dark:text-gray-300 dark:hover:text-white
                                    transition-all duration-300 font-bold
                                    ${isActive ? 'text-gray-900 dark:text-white' : ''}`}
                            >
                                <span className="relative z-10">{item.label}</span>
                                <span className={`absolute -bottom-0.5 w-0 h-0.5 
                                    bg-gray-800 dark:bg-gray-100 
                                    transition-all duration-300 
                                    ${isActive ? 'w-full right-0' : 'group-hover:w-full group-hover:left-0'}`} />
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg
                        text-gray-600 hover:text-gray-900 
                        dark:text-gray-400 dark:hover:text-white
                        transition-all duration-300"
                >
                    <div className="relative w-6 h-6 ">
                        <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300
                            ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                        <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300
                            ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300
                            ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col mt-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`group relative px-4 rounded-xl
                                                text-gray-600 hover:text-gray-900 
                                                dark:text-gray-300 dark:hover:text-white
                                                transition-all duration-300 font-bold
                                                ${isActive
                                                    ? 'text-gray-900 dark:text-white'
                                                    : 'hover:bg-gray-50/50 dark:hover:bg-gray-800/30'}`}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300
                                                    ${isActive
                                                        ? 'bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 scale-150'
                                                        : 'bg-gray-300 dark:bg-gray-600 group-hover:scale-150 group-hover:bg-gray-600 dark:group-hover:bg-gray-400'}`}
                                                />
                                                {item.label}
                                                {isActive && (
                                                    <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full
                                                        bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                                        Active
                                                    </span>
                                                )}
                                            </span>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
