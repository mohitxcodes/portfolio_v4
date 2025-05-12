import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import BackgroundStyle from '../../../core/common/background'
import { socialLinks } from '@/data/hero-data'

export default function HeroSection() {
    return (
        <BackgroundStyle>
            {/* Profile Banner */}
            <div className="h-24 sm:h-32 overflow-hidden bg-gradient-to-r 
                from-green-100 to-green-50 
                dark:from-green-500/10 dark:to-green-500/5 
                rounded-t-lg -mt-6 -mx-6">
                <Image
                    src="/profile/profile_banner.png"
                    alt="Profile Banner"
                    width={1000}
                    height={1000}
                    className='object-cover object-center w-full h-full'
                    priority
                />
            </div>

            {/* Profile Image */}
            <div className="relative -mt-12 sm:-mt-16 mb-4 px-4 sm:px-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full 
                    border-4 border-white dark:border-gray-900
                    shadow-lg overflow-hidden">
                    <Image
                        src="/profile/mohit.jpeg"
                        alt="Profile Photo"
                        width={128}
                        height={128}
                        className="object-cover object-center w-full h-full"
                        priority
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-4 px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                        <div className='flex flex-wrap items-center gap-2'>
                            <div className="flex flex-wrap items-center gap-1">
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Mohit Kumar</h1>
                                <span className="text-gray-400">
                                    <RiVerifiedBadgeFill />
                                </span>
                                <span className="text-sm text-gray-400">(he/him)</span>
                            </div>
                            <Link
                                href="https://www.buymeacoffee.com/mohitxcodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium bg-amber-500/5 text-amber-400 
                                    rounded-sm hover:bg-amber-500/10 transition border border-amber-500/30 
                                    flex items-center gap-2 active:scale-95"
                            >
                                <span>☕</span>
                                <span className="whitespace-nowrap">Buy me a coffee</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-2xl">
                    CSE'28 | Full-Stack Developer | Next.js/ReactJs | Flutter | Redux/Toolkit | Node.js | ExpressJs | MongoDB | Freelancer | Exploring AI & Emerging Technologies.
                </p>

                {/* Social Links & Resume */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-600 
                                    dark:text-gray-400 dark:hover:text-white 
                                    transition hover:scale-110 active:scale-90"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        ))}
                    </div>
                    <div className="active:scale-95 transition">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 sm:px-5 py-1.5 text-xs sm:text-sm font-medium 
                                bg-white-500/10 text-white-400 rounded-sm 
                                hover:bg-gray-500/20 transition border-2 
                                overflow-hidden border-gray-500 
                                flex items-center gap-2 active:scale-95"
                        >
                            <span className='text-xs'>📄</span>
                            <span>Resume</span>
                        </Link>
                    </div>
                </div>

                {/* Location & Contact */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 
                    text-sm text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                        <span>📍</span>
                        <span>Bihar, India</span>
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                        <span>📧</span>
                        <span>Contact - <a href="mailto:mohitxcodes@gmail.com"
                            className="hover:text-black dark:hover:text-white transition hover:underline">
                            mohitxcodes@gmail.com
                        </a></span>
                    </span>
                </div>
            </div>
        </BackgroundStyle>
    )
}