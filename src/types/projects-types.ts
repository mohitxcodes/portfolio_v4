export interface Project {
    title: string;
    subtitle: string;
    projectType: 'website' | 'ai' | 'app';
    description: string;
    images: string[];
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
    featured: boolean;
    challenges: string[];
    impact: string[];
    role: string;
    duration: string;
    techStack: {
        frontend: string;
        backend: string;
        devops?: string;
        extras?: string;
    };
}