"use client"
import ContactPage from '@/pages/contact/contact-page'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function ContactUsPage() {
    return (
        <>
            <Toaster
                position='top-center'
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: 'rgba(17, 17, 17, 0.95)',
                        color: '#fff',
                        border: '1px solid rgba(75, 75, 75, 0.5)',
                        borderRadius: '8px',
                        padding: '16px',
                        fontSize: '16px',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                        maxWidth: '400px',
                        width: '100%',
                    },
                    success: {
                        iconTheme: {
                            primary: '#10B981',
                            secondary: '#FFFFFF',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#EF4444',
                            secondary: '#FFFFFF',
                        },
                    },
                }}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            >
                <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='w-full'
                >
                    <ContactPage />
                </motion.div>
            </motion.div>
        </>
    )
}
