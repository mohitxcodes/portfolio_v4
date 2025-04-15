import React from 'react'

export default function BackgroundStyle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-6 rounded-lg 
            bg-white dark:bg-black/80 
            border border-gray-200/60 dark:border-gray-800 
            shadow-lg backdrop-blur-sm
            transition-colors duration-200">
            {children}
        </div>
    )
}
