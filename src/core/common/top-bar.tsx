'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function TopBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 750);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900/10 via-gray-800/15 to-gray-900/10 
                        dark:from-gray-900/20 dark:via-gray-800/30 dark:to-gray-900/20 
                        border-b border-gray-800/30 backdrop-blur-sm mb-4"
                >

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="py-2.5 flex items-center justify-center relative"
                        >
                            {/* Left decorative line */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-400/50" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-300/30 blur-[0.5px]" />

                            <Link href="/contact-us" onClick={() => setIsVisible(false)} className="flex items-center gap-3 cursor-pointer z-50">
                                <FaEnvelope className="text-gray-600 dark:text-gray-400 animate-pulse" />
                                <p className="text-sm text-gray-800 dark:text-gray-200">
                                    <span className="hidden md:inline">Ready to start your next project?{" "}</span>
                                    <span className="font-medium bg-gradient-to-r from-gray-700 to-gray-600 dark:from-gray-400 dark:to-gray-300 bg-clip-text text-transparent">
                                        Let&apos;s build something together!
                                    </span>
                                </p>
                            </Link>

                            {/* Right decorative line */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-400/50" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-300/30 blur-[0.5px]" />

                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute right-4 p-1.5 rounded-full hover:bg-gray-900/10 
                                    text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 cursor-pointer 
                                    focus:outline-none transition-colors z-50 duration-200"
                                aria-label="Close"
                            >
                                <IoClose className="h-4 w-4" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Bottom glow effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent animate-pulse" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300/50 to-transparent blur-[1px]" />

                    {/* Bottom shadow */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
