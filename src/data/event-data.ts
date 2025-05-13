import { IEvent } from "@/types/event-types";
import { FaLightbulb, FaTrophy } from "react-icons/fa";

export const tabs = [
    { id: 'all', label: 'All', icon: null },
    { id: 'events', label: 'Events', icon: FaTrophy },
    { id: 'hackathon', label: 'Hackathons', icon: FaTrophy },
    { id: 'workshop', label: 'Workshops', icon: FaLightbulb }
]

export const events: IEvent[] = [
    {
        type: 'events',
        title: "Badge Ceremony 2025",
        date: "Feb 2025",
        location: "D1 Auditorium, Chandigarh University, Punjab",
        host: "Chandigarh University",
            overview: "Worked on developing an AI-powered waste management system that helps cities optimize their recycling processes.",
            learningOutcomes: [
                "Advanced AI implementation in real-world scenarios",
                "Team collaboration and project management",
                "Pitching and presentation skills"
            ],
            images: [
                "/events/badge-event/badge_01.jpeg",
                "/events/badge-event/badge_02.jpeg",
                "/events/badge-event/badge_03.jpeg"
            ],
            link: "#",
            certificateUrl: "/certificates/python-certification.pdf"
        },
        {
            type: 'workshop',
            title: "Web Development Masterclass",
            date: "October 20, 2023",
            location: "Tech Hub, Bangalore",
            host: "Web Dev Community",
            overview: "Led a hands-on session on building scalable web applications using Next.js and TypeScript.",
            learningOutcomes: [
                "Advanced TypeScript patterns",
                "Next.js 13 features and best practices",
                "Performance optimization techniques"
            ],
            images: [
                "/events/workshop1.jpg",
                "/events/workshop2.jpg",
                "/events/workshop3.jpg"
            ],
            link: "#",
            certificateUrl: "/certificates/web-dev-masterclass.pdf"
        },
        {
            type: 'conference',
            title: "Tech Summit 2023",
            date: "September 5-7, 2023",
            location: "Convention Center, Mumbai",
            host: "Tech Leaders Forum",
            overview: "Participated in panel discussions on the future of AI and machine learning in enterprise applications.",
            learningOutcomes: [
                "Industry trends and future predictions",
                "Networking with industry leaders",
                "Public speaking and presentation skills"
            ],
            images: [
                "/events/conference1.jpg",
                "/events/conference2.jpg",
                "/events/conference3.jpg"
            ],
            link: "#",
            certificateUrl: "/certificates/tech-summit-certificate.pdf"
        }
    ]