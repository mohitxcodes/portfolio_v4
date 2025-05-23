"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import ContactInfo from './contact-info'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isMobile, setIsMobile] = useState(false)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const formRef = useRef<HTMLFormElement>(null)

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)

        console.log(serviceId, templateId, userId, formRef.current)

        // Send email
        if (serviceId && templateId && userId && formRef.current) {
            emailjs.sendForm(serviceId, templateId, formRef.current, userId)
                .then((result) => {
                    console.log('Email sent successfully:', result.text)
                    toast.success('Email sent successfully')
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    })
                })
                .catch((error) => {
                    console.error('Failed to send email:', error.text)
                    toast.error('Failed to send email')
                })
        } else {
            console.error('Missing required EmailJS configuration or form reference')
            toast.error('Missing required EmailJS configuration or form reference')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
            {/* Contact Info - Only shown at top for desktop */}
            {!isMobile && <ContactInfo />}

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-500/10 rounded-full blur-2xl" />

                <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6 bg-white/50 dark:bg-gray-900/50 
                    backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-800
                    shadow-lg">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                                border-2 border-gray-200 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:border-gray-900 dark:focus:border-gray-400
                                focus:ring-0 transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                                border-2 border-gray-200 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:border-gray-900 dark:focus:border-gray-400
                                focus:ring-0 transition-all duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Your message here..."
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                                border-2 border-gray-200 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-500 dark:placeholder-gray-400
                                focus:border-gray-900 dark:focus:border-gray-400
                                focus:ring-0 transition-all duration-300
                                resize-none"
                            required
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-1.5 rounded-sm bg-gray-900 dark:bg-white
                            text-white dark:text-gray-900 font-medium
                            hover:opacity-90 transition-opacity
                            flex items-center justify-center gap-2"
                    >
                        <span>Send Message</span>
                        <FaPaperPlane className="text-sm" />
                    </motion.button>
                </form>
            </motion.div>

            {/* Contact Info - Only shown at bottom for mobile */}
            {isMobile && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8"
                >
                    <ContactInfo />
                </motion.div>
            )}
        </div>
    )
} 