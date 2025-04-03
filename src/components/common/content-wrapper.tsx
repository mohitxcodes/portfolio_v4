import React from 'react'

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
    return (

        <div className="max-w-6xl mx-auto px-4 py-8 border rounded-lg border-green-500/20">
            {children}
        </div>
    )
}
