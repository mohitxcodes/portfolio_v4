import React from 'react'
import Header from '@/components/layouts/header/header'

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
