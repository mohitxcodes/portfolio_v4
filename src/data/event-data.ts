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
        overview: "Badge Ceremony 2025 was a great event that celebrated for the all university level and department level societies and clubs of Chandigarh University. It was a day of joy and pride as the students received their badges, which are a symbol of their hard work and dedication.",
            learningOutcomes: [
                "Gained experience in event planning and management",
                "Learned about the importance of teamwork and collaboration",
                "Developed skills in public speaking and presentation",
            ],
            images: [
                "/events/badge-event/badge_01.jpeg",
                "/events/badge-event/badge_02.jpeg",
                "/events/badge-event/badge_03.jpeg"
            ],
            link: "#",
            certificateUrl: "/certificates/python-certification.pdf"
        },

    ]