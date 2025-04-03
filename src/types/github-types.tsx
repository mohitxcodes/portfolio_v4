export interface ContributionDay {
    contributionCount: number;
    date: string;
    weekday: number;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export interface ContributionsCollection {
    contributionCalendar: ContributionCalendar;
    startedAt: string;
    endedAt: string;
}

export interface GitHubContributions {
    year: number;
    collection: ContributionsCollection;
}