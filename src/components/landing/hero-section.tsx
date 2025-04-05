import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin, FaCheckCircle, FaInstagram } from 'react-icons/fa'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import BackgroundStyle from '../common/background'

export default function HeroSection() {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/msxcodes",
            label: "GitHub"
        },

        {
            icon: FaLinkedin,
            href: "https://linkedin.com/in/msxcodes",
            label: "LinkedIn"
        },
        {
            icon: FaTwitter,
            href: "https://twitter.com/msxcodes",
            label: "Twitter"
        },
        {
            icon: FaInstagram,
            href: "https://instagram.com/msxcodes",
            label: "Instagram"
        }
    ]

    return (
        <>
            {/* Background Card */}
            <BackgroundStyle>
                {/* Profile Banner */}
                <div className="h-32 overflow-hidden bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-t-lg -mt-6 -mx-6" >
                    <Image
                        src="/profile/profile_banner.png"
                        alt="Profile Banner"
                        width={1000}
                        height={1000}
                        className='object-cover object-center size-full'
                        priority
                    />
                </div>

                {/* Profile Image */}
                <div className="relative -mt-16 mb-4">
                    <div className="w-32 h-32 rounded-full border-4 border-green-500/30 overflow-hidden">
                        <Image
                            src="/profile/mohit.jpeg"
                            alt="Profile Photo"
                            width={128}
                            height={128}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className='flex items-center gap-2'>
                                <div className="flex items-center gap-1">
                                    <h1 className="text-xl font-bold">Mohit Kumar</h1>
                                    <span className="text-gray-400">
                                        <RiVerifiedBadgeFill />
                                    </span>
                                    <span className="text-sm text-gray-400">(he/him)</span>
                                </div>
                                <Link
                                    href="https://www.buymeacoffee.com/msxcodes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 bg-amber-500/5 text-amber-400 rounded-md hover:bg-amber-500/10 transition border border-amber-500/30 flex items-center gap-2"
                                >
                                    <span>☕</span>
                                    <span>Buy me a coffee</span>
                                </Link>
                            </div>
                            {/* <p className="text-xl text-green-500">Full Stack Developer</p> */}
                        </div>
                    </div>

                    <p className="text-gray-300 max-w-2xl">
                        CSE'28 | Full-Stack Developer | Next.js/ReactJs | Flutter | Redux/Toolkit | Node.js | ExpressJs | MongoDB | Freelancer | Exploring AI & Emerging Technologies.
                    </p>

                    {/* Social Links & Resume */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition hover:scale-110 active:scale-90"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                        <div className="hover:scale-105 active:scale-95 transition">
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white-500/10 text-white-400 rounded-md hover:bg-gray-500/20 transition border border-gray-500 flex items-center gap-2"
                            >
                                <span>📄</span>
                                <span>Resume</span>
                            </Link>
                        </div>
                    </div>

                    {/* Location & Contact */}
                    <div className="flex items-center gap-4 text-gray-300">
                        <span>📍 Patna, Bihar, India</span>
                        <span>📧 Contact - msxcodes@gmail.com</span>
                    </div>

                </div>
            </BackgroundStyle>
        </>
    )
}