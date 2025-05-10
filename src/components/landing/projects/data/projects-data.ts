interface Project {
    title: string;
    subtitle: string;
    projectType: 'website' | 'ai' | 'app';
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
    featured: boolean;
    features: string[];
}

export const projectsData: Project[] = [
    {
        title: "TechPathFinder",
        subtitle: "Event Management Platform",
        projectType: "website",
        description: "A full-stack event management platform with real-time events management, registration, and admin dashboard.",
        image: "/projects/techpathfinder/tpf_01.png",
        githubUrl: "https://github.com/mohitxcodes/techpathfinder",
        liveUrl: "https://techpathfinder.msxcodes.in",
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        featured: true,
        features: [
            "Real-time event updates and notifications",
            "User authentication and role-based access control",
            "Admin dashboard for event management",
            "Responsive design for all devices",
            "Interactive event registration system"
        ]
    },
    {
        title: "InsightsEd",
        subtitle: "AI-Powered Study Notes Generator",
        projectType: "ai",
        description: "A web application that allows users to generate study notes using AI.",
        image: "/projects/insightsEd/insightsEd_01.png",
        githubUrl: "https://github.com/mohitxcodes/insighted-frontend",
        liveUrl: "https://insights-ed.vercel.app",
        technologies: ["React", "Socket.io", "OpenAI", "Express", "Redis"],
        featured: true,
        features: [
            "AI-powered note generation from text input",
            "Real-time processing and updates",
            "Customizable note formats and styles",
            "Save and export functionality",
            "User-friendly interface for easy note creation"
        ]
    },
    {
        title: "Max Movie",
        subtitle: "Web Application for Movie Reviews",
        projectType: "website",
        description: "A web application that allows users to search for movies and read reviews.",
        image: "/projects/max_movie/maxmovie_01.png",
        githubUrl: "https://github.com/mohitxcodes/maxmovie",
        liveUrl: "https://max-movie.vercel.app",
        technologies: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
        featured: true,
        features: [
            "Movie search and filtering capabilities",
            "Detailed movie information and ratings",
            "User reviews and comments system",
            "Responsive design for all devices",
            "Interactive UI with smooth animations"
        ]
    },
    {
        title: "TaskFlow",
        subtitle: "Task Management Application",
        projectType: "app",
        description: "A mobile-first task management application with collaborative features and progress tracking.",
        image: "/projects/taskflow/taskflow_01.png",
        githubUrl: "https://github.com/mohitxcodes/taskflow",
        liveUrl: "https://taskflow.msxcodes.in",
        technologies: ["React Native", "Firebase", "Redux", "Expo"],
        featured: false,
        features: [
            "Task creation and assignment",
            "Progress tracking with visual indicators",
            "Team collaboration features",
            "Push notifications for task updates",
            "Offline mode with data synchronization"
        ]
    },
    {
        title: "WeatherNow",
        subtitle: "Real-time Weather Forecast",
        projectType: "website",
        description: "A weather application that provides real-time forecasts and historical weather data for locations worldwide.",
        image: "/projects/weathernow/weathernow_01.png",
        githubUrl: "https://github.com/mohitxcodes/weathernow",
        liveUrl: "https://weather-now.msxcodes.in",
        technologies: ["Vue.js", "OpenWeatherMap API", "Chart.js", "Vuetify"],
        featured: false,
        features: [
            "Real-time weather updates",
            "7-day forecast predictions",
            "Historical weather data visualization",
            "Location-based automatic detection",
            "Customizable weather alerts"
        ]
    },
    {
        title: "CodeSnippet",
        subtitle: "Developer's Code Repository",
        projectType: "website",
        description: "A platform for developers to store, share, and discover code snippets with syntax highlighting and organization features.",
        image: "/projects/codesnippet/codesnippet_01.png",
        githubUrl: "https://github.com/mohitxcodes/codesnippet",
        liveUrl: "https://code-snippet.msxcodes.in",
        technologies: ["Angular", "Node.js", "PostgreSQL", "Prism.js"],
        featured: false,
        features: [
            "Syntax highlighting for multiple languages",
            "Categorization and tagging system",
            "Public and private snippet options",
            "Search and filter functionality",
            "One-click copy to clipboard"
        ]
    },
    {
        title: "FitTrack",
        subtitle: "Fitness Tracking Mobile App",
        projectType: "app",
        description: "A comprehensive fitness tracking application that helps users monitor workouts, nutrition, and progress towards fitness goals.",
        image: "/projects/fittrack/fittrack_01.png",
        githubUrl: "https://github.com/mohitxcodes/fittrack",
        liveUrl: "https://fittrack.msxcodes.in",
        technologies: ["Flutter", "Firebase", "Google Fit API", "Provider"],
        featured: false,
        features: [
            "Workout plan creation and tracking",
            "Nutrition and calorie monitoring",
            "Progress visualization with charts",
            "Integration with wearable devices",
            "Personalized fitness recommendations"
        ]
    },
    {
        title: "ChatAI",
        subtitle: "AI-Powered Chat Assistant",
        projectType: "ai",
        description: "An intelligent chat assistant that uses natural language processing to provide helpful responses and perform tasks for users.",
        image: "/projects/chatai/chatai_01.png",
        githubUrl: "https://github.com/mohitxcodes/chatai",
        liveUrl: "https://chat-ai.msxcodes.in",
        technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSockets"],
        featured: false,
        features: [
            "Natural language understanding and generation",
            "Context-aware conversations",
            "Integration with external services",
            "Voice input and output capabilities",
            "Customizable AI personality settings"
        ]
    }
]