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
        <header className="relative bg-white/80 backdrop-blur-sm z-50 border-b">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo/Brand */}
                    <Link href="/" className="text-xl font-bold text-gray-800 hover:text-green-600 transition">
                        MXHIT
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group relative text-gray-600 hover:text-green-600 transition-colors"
                            >
                                {item.label}
                                <span className="absolute -top-4 right-0 text-xs text-gray-400 group-hover:text-green-400">
                                    {item.shortcut}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-green-600">
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
            </div>
        </header>
    )
}
