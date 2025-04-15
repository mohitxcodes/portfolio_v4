import React from 'react'
import Link from 'next/link'
export default function Header() {
    const navItems = [
        { label: 'Home', href: '/', shortcut: '(h)' },
        { label: 'Experience', href: '/experience', shortcut: '(e)' },
        { label: 'Events', href: '/events', shortcut: '(v)' },
        { label: 'Blogs', href: '/blogs', shortcut: '(b)' },
        { label: 'Designs', href: '/designs', shortcut: '(d)' },
        { label: 'Contact', href: '/contact', shortcut: '(c)' },
    ]

    return (
        <header className="max-w-6xl px-4 py-4 mx-auto relative bg-white/95 dark:bg-black/80 backdrop-blur-sm z-50 
            border rounded-lg border-gray-200 dark:border-green-500/20 my-4 
            shadow-lg shadow-gray-100 dark:shadow-none
            transition-all duration-300">
            <div className="flex items-center justify-between">
                {/* Logo/Brand */}
                <Link
                    href="/"
                    className="text-xl font-bold 
                        text-gray-800 hover:text-gray-900 dark:text-green-400 dark:hover:text-green-500 
                        transition-colors"
                >
                    Mohit Singh
                </Link>


                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative 
                                text-gray-600 hover:text-gray-900 
                                dark:text-gray-300 dark:hover:text-green-400 
                                transition-colors"
                        >
                            {item.label}
                            <span className="absolute -top-4 right-0 text-xs 
                                text-gray-400 group-hover:text-gray-600
                                dark:text-green-500/50 dark:group-hover:text-green-400
                                transition-colors">
                                {item.shortcut}
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 
                    text-gray-600 hover:text-gray-900 
                    dark:text-green-400 dark:hover:text-green-500
                    transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </header>
    )
}
