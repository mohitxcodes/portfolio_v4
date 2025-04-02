import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-[500px] px-4 py-8">
            <div className="max-w-5xl mx-auto">
                {/* Background Card */}
                <div className="relative bg-white rounded-lg shadow-md p-6">
                    {/* Profile Banner */}
                    <div className="h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-t-lg -mt-6 -mx-6" />

                    {/* Profile Image */}
                    <div className="relative -mt-16 mb-4">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                            <Image
                                src="/your-profile-photo.jpg" // Replace with your photo path
                                alt="Profile Photo"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Your Name</h1>
                            <p className="text-xl text-green-600">Full Stack Developer</p>
                        </div>

                        <p className="text-gray-600 max-w-2xl">
                            Professional summary goes here. Write a brief description about yourself,
                            your expertise, and what you're passionate about.
                        </p>

                        {/* Location & Contact */}
                        <div className="flex items-center gap-4 text-gray-600">
                            <span>📍 Your Location</span>
                            <span>📧 your.email@example.com</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                                Contact Me
                            </button>
                            <button className="px-6 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// 