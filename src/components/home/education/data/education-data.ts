export interface IEducation {
    degree: string;
    institution: string;
    duration: string;
    location: string;
    website?: string;
    logo: string;
}

export const educationData = [
    {
        degree: "Bechelor of Engineering in Computer Science and Engineering",
        institution: "Chandigarh University",
        duration: "2024 - 2028",
        location: "Punjab, India",
        website: "https://www.cuchd.in/",
        logo: "/education/cu-log.webp",
    },
    {
        degree: "Higher Secondary Education (12th)",
        institution: "East & West High School",
        duration: "2022 - 2023",
        location: "Patna, Bihar",
        logo: "/education/ewhs-logo.jpg",
    },
    {
        degree: "Secondary Education (10th)",
        institution: "East & West High School",
        duration: "2020 - 2022",
        location: "Patna, Bihar",
        logo: "/education/ewhs-logo.jpg",
    }
]
