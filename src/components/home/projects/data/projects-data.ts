import { Project } from "@/types/projects-types";
import { FaMobileAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

export const projectsData: Project[] = [
    {
        title: "TechPathFinder",
        subtitle: "Event Management Platform",
        projectType: "website",
        description: "A full-stack event management platform with real-time events management, registration, and admin dashboard.",
        images: [
            "/projects/techpathfinder/tpf_01.png",
            "/projects/techpathfinder/tpf_02.png",
            "/projects/techpathfinder/tpf_03.png"
        ],
        githubUrl: "https://github.com/mohitxcodes",
        liveUrl: "https://techpathfinder.msxcodes.in",
        technologies: ["Next.js", "Node.js", "MongoDB", "ExpressJs", "Tailwind CSS" , "Docker",],
        featured: true,
        challenges: [
            "Implementing real-time updates across multiple devices",
            "Handling concurrent user registrations",
            "Optimizing database queries for large datasets"
        ],
        impact: [
            "Reduced event management time by 60%",
            "Increased user engagement by 40%",
            "Improved registration process efficiency"
        ],
        role: "Full Stack Developer",
        duration: "3 months",
        techStack: {
            frontend: "Next.js + Tailwind CSS, with real-time updates using Socket.io",
            backend: "Node.js + Express with MongoDB for data persistence",
            devops: "CI/CD using GitHub Actions, deployed on Vercel",
            extras: "JWT authentication, role-based access control, and real-time notifications"
        }
    },
    {
        title: "InsightsEd",
        subtitle: "AI-Powered Study Notes Generator",
        projectType: "ai",
        description: "A web application that allows users to generate study notes using AI.",
        images: [
            "/projects/insightsEd/insightsEd_01.png",
            "/projects/insightsEd/insightsEd_02.png"
        ],
        githubUrl: "https://github.com/mohitxcodes/insighted-frontend",
        liveUrl: "https://insights-ed.vercel.app",
        technologies: ["React", "Socket.io", "Gemini", "Express", "Redis" , "MongoDB"],
        featured: true,
        challenges: [
            "Ensuring AI accuracy and reliability",
            "Managing large datasets for AI training",
            "Integrating AI with existing educational systems"
        ],
        impact: [
            "Enhanced learning experience for students",
            "Reduced study time by 30%",
            "Improved note organization and retrieval"
        ],
        role: "AI Developer",
        duration: "2 months",
        techStack: {
            frontend: "React + Tailwind, with AI result rendering via react-markdown",
            backend: "Node.js + Express with OpenAI API integration; used background jobs (BullMQ + Redis) to queue video transcription",
            devops: "CI/CD using GitHub Actions + Dockerized backend; deployed on Render",
            extras: "Rate-limiting via express-rate-limit, user-level API quotas, and Swagger docs for public API"
        }
    },
    {
        title: "Max Movie",
        subtitle: "Web Application for Movie Reviews",
        projectType: "website",
        description: "A web application that allows users to search for movies and read reviews.",
        images: [
            "/projects/max_movie/maxmovie_01.png",
            "/projects/max_movie/maxmovie_02.png"
        ],
        githubUrl: "https://github.com/mohitxcodes/max-movie",
        liveUrl: "https://max-movie.vercel.app",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "TMDB API" , "Redux"],
        featured: true,
        challenges: [
            "Handling large movie datasets",
            "Ensuring fast and accurate search results",
            "Balancing user reviews and ratings"
        ],
        impact: [
            "Improved movie discovery experience",
            "Increased user engagement",
            "Enhanced movie information accessibility"
        ],
        role: "Frontend Developer",
        duration: "2 months",
        techStack: {
            frontend: "React + Next.js + Tailwind CSS",
            backend: "Node.js + Express with MongoDB for data persistence",
            devops: "CI/CD using GitHub Actions, deployed on Vercel",
            extras: "Chart.js for data visualization"
        }
    },
]

export const projectTabs = [
                                { id: 'all', label: 'All Projects', icon: null, color: 'bg-gray-900 dark:bg-gray-100 dark:text-gray-900' },
                                { id: 'website', label: 'Web Apps', icon: FaDesktop, color: 'bg-blue-600' },
                                { id: 'ai', label: 'AI Projects', icon: FaRobot, color: 'bg-purple-600' },
                                { id: 'app', label: 'Mobile Apps', icon: FaMobileAlt, color: 'bg-green-600' }
                            ]