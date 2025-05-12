import React from 'react'

export default function CardOverlayStyle() {
    return (
        <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100/20 to-transparent 
                                dark:from-gray-700/40 rounded-bl-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100/20 to-transparent 
                                dark:from-gray-700/20 rounded-tr-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500" />
        </>
    )
}
