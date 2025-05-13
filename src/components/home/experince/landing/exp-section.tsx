import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { FaCalendarAlt, FaBuilding, FaMapMarkerAlt, FaExternalLinkAlt, FaClock } from 'react-icons/fa'
import { experiences } from '../data/exp-data'
import SectionHeader from '@/core/common/section-header'
import ExperienceCard from '../components/exp-card'
import { IExperience } from '@/types/exp-types'
import Timeline from '@/core/common/timeline'
export default function ExperienceSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Experience" link="/experience" linkText="View All Experience" />

                <div className="relative">
                    {/* Enhanced Timeline Line with Gradient and Animation */}
                    <Timeline />

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp: IExperience, index: number) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    )
}
