import React from 'react'
import Header from '@/components/layouts/header/header'
import Footer from '@/components/layouts/footer/footer'
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
