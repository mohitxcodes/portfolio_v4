export interface IEvent {
    type: string;
    title: string;
    date: string;
    location: string;
    host: string;
    overview: string;
    learningOutcomes: string[];
    images: string[];
    link: string;
    certificateUrl?: string; // Optional certificate URL
}