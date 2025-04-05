import React from 'react'

export default function BackgroundStyle({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-8 border border-gray-800/50">
            {children}
        </div>
    )
}
