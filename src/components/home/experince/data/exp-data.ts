import { SiDocker, SiJest, SiMongodb, SiExpress, SiJavascript, SiPostgresql, SiReact, SiTypescript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";

import { SiNodedotjs } from "react-icons/si";

export const experiences = [
    {
        company: "OCTAPHORES PRIVATE LIMITED",
        role: "Full Stack Developer",
        companyLogo: "exp/octaphores.jpeg",
        type: "Remote",
        duration: "Feb 2025 - April 2025",
        location: "Gurgaon, Haryana",
        companyUrl: "https://octaphores.com/",
        technologies: [
            { name: "React", icon: SiReact, color: "text-blue-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400" },
            { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-white" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        ]
    },
    {
        company: "CSDT IT Solutions",
        companyLogo: "exp/csdt_it_solutions.jpeg",
        role: "Full Stack Trainee",
        type: "On-site",
        duration: "May 2024 - Oct 2024",
        location: "Patna, Bihar",
        companyUrl: "https://www.csdtitsolution.com/",
        technologies: [
            { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
            { name: "CSS", icon: SiCss3, color: "text-blue-400" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "React", icon: SiReact, color: "text-blue-400" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-blue-400" },
            { name: "Express", icon: SiExpress, color: "text-white" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        ]
    }
]