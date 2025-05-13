export interface IExperience {
    company: string;
    role: string;
    companyLogo: string;
    type: string;
    duration: string;
    location: string;
    companyUrl: string;
    technologies: ITechnology[];
}

export interface ITechnology {
    name: string;
    icon: React.ElementType;
    color: string;
}