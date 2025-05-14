import BackgroundStyle from '@/core/common/background'
import React from 'react'
import { certifications } from './data/certifications-data'
import CertificationsCard from './components/certifications-card'
import SectionHeader from '@/core/common/section-header'
import { ICertification } from '@/types/certification-types'
export default function CertificationsSection() {
    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
                <SectionHeader title="Licenses & Certifications" link="/experience" linkText="View All Certifications" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert: ICertification, index: number) => (
                        <CertificationsCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
