import React from 'react'

export default function CustomButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`px-5 py-1.5 text-sm font-medium bg-white-500/10 text-white-400 rounded-sm hover:bg-gray-500/20 transition border-2 overflow-hidden border-gray-500 flex items-center gap-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
