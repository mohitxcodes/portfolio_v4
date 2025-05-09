import BackgroundStyle from '@/components/common/background'
import React from 'react'
import { FaCode, FaMobile, FaRocket, FaExternalLinkAlt, FaCheckCircle, FaClock, FaUsers, FaShieldAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: "Website Development",
        icon: FaCode,
        description: "Transform your ideas into stunning, high-performance websites that drive results.",
        image: "/services/web-dev.png",
        features: [
            {
                title: "Custom Websites",
                description: "Tailored solutions that perfectly match your brand and business needs"
            },
            {
                title: "E-commerce Platforms",
                description: "Scalable online stores with secure payment integration"
            },
            {
                title: "Web Applications",
                description: "Interactive and dynamic applications with real-time features"
            }
        ],
        technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        color: "from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10",
        gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
        title: "Mobile App Development",
        icon: FaMobile,
        description: "Create powerful mobile applications that provide seamless experiences across iOS and Android.",
        image: "/services/mobile-dev.png",
        features: [
            {
                title: "Native Apps",
                description: "High-performance applications optimized for each platform"
            },
            {
                title: "Cross-Platform",
                description: "Efficient development for both iOS and Android"
            },
            {
                title: "App Maintenance",
                description: "Regular updates and performance optimization"
            }
        ],
        technologies: ["React Native", "Flutter", "Firebase", "Redux", "Node.js", "MongoDB"],
        color: "from-purple-500/20 to-purple-600/20 dark:from-purple-500/10 dark:to-purple-600/10",
        gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
]

const benefits = [
    {
        icon: FaClock,
        title: "Fast Delivery",
        description: "Quick turnaround time without compromising on quality"
    },
    {
        icon: FaUsers,
        title: "Client Collaboration",
        description: "Regular updates and transparent communication throughout the project"
    },
    {
        icon: FaShieldAlt,
        title: "Quality Assurance",
        description: "Thorough testing and quality checks before delivery"
    },
    {
        icon: FaCheckCircle,
        title: "Post-Launch Support",
        description: "Ongoing maintenance and support after project completion"
    }
]

export default function ServicesSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <div className=" mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100
                        relative inline-block animate-fade-in">
                        Freelance Services
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full" />
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl ">
                        Transforming your ideas into powerful digital solutions.
                    </p>
                </div>


                {/* Benefits Section */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl
                                    border border-gray-200 dark:border-gray-700/50
                                    hover:border-gray-300 dark:hover:border-gray-600/50
                                    transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50
                                    w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    {benefit.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-00 to-gray-800 
                        dark:from-gray-950 dark:to-gray-900 border border-gray-700/50">
                        <div className="relative px-6 py-4 sm:px-8">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-center sm:text-left">
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        Ready to Start Your Project?
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-1">
                                        Let's build something amazing together
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Link
                                        href="/contact"
                                        className="text-sm group flex items-center gap-2 px-6 py-1.5 bg-white hover:bg-gray-100 
                                        text-gray-900 rounded-sm font-medium
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    >
                                        Get in Touch
                                        <FaExternalLinkAlt className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="text-sm group flex items-center gap-2 px-6 py-2 bg-transparent hover:bg-white/10 
                                        text-white border border-white/20 hover:border-white/40 rounded-sm font-medium
                                        transition-all duration-300 transform hover:scale-105"
                                    >
                                        View Work
                                        <FaExternalLinkAlt className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
