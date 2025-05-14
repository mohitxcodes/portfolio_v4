'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions } from '@/apis/fetch-github';
import type { GitHubContributions } from '@/types/github-types';
import { FaChevronDown, FaGithub, FaUsers, FaCode } from 'react-icons/fa';
import ContributionsFallback from '@/core/fallback/contributions-fallback';
import BackgroundStyle from '../../../core/common/background';

export default function GitHubContributions() {
    const [contributions, setContributions] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchGitHubContributions('mohitxcodes', selectedYear);
                if (data) {
                    setContributions(data);
                } else {
                    setError('Failed to load contributions');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [selectedYear]);

    console.log(contributions);

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-gray-100 dark:bg-gray-900';
        if (count < 1) return 'bg-emerald-200 dark:bg-emerald-900/80';
        if (count < 3) return 'bg-emerald-300 dark:bg-emerald-700';
        if (count < 5) return 'bg-emerald-400 dark:bg-emerald-600';
        return 'bg-emerald-500 dark:bg-emerald-400';
    };

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const years = [2025, 2024, 2023];

    if (loading) return <ContributionsFallback />;
    if (error) return <div className="text-red-400">Error: {error}</div>;
    if (!contributions) return null;

    return (
        <BackgroundStyle>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-gray-600 dark:text-gray-400" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            GitHub Activity
                        </h2>
                        <a
                            href="https://github.com/mohitxcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition"
                        >
                            @mohitxcodes
                        </a>
                    </div>
                </div>

                <div className="relative w-full sm:w-auto">
                    <button
                        onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="flex items-center justify-between gap-2 px-4 py-2 
                        text-gray-700 dark:text-gray-300 
                        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 
                        rounded-lg transition w-full sm:w-auto"
                    >
                        {selectedYear}
                        <FaChevronDown className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isYearDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-full 
                        bg-white dark:bg-gray-900/95 
                        border border-gray-200 dark:border-gray-800 
                        rounded-lg py-1 z-10 shadow-lg">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedYear(year);
                                        setIsYearDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left 
                                    text-gray-700 hover:bg-gray-100 
                                    dark:text-gray-300 dark:hover:bg-gray-800/50 
                                    transition"
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Contributions Grid */}
            <div className="space-y-4">
                <div className="relative overflow-x-auto pb-2">
                    <div className="min-w-[800px] md:min-w-full">
                        {/* Month Labels */}
                        <div className="grid grid-cols-12 mb-2">
                            {months.map((month) => (
                                <div key={month} className="text-xs text-gray-400 font-medium">
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Contribution Grid */}
                        <div className="grid grid-cols-12 gap-2 md:gap-4">
                            {months.map((month, monthIndex) => {
                                const monthWeeks = contributions.collection.contributionCalendar.weeks.filter(week => {
                                    const weekDate = new Date(week.contributionDays[0].date);
                                    return weekDate.getMonth() === monthIndex;
                                });

                                return (
                                    <div key={month} className="space-y-1">
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-1">
                                            {monthWeeks.map((week, weekIndex) => (
                                                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                                    {week.contributionDays.map((day, dayIndex) => (
                                                        <div
                                                            key={`${weekIndex}-${dayIndex}`}
                                                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded ${getContributionColor(day.contributionCount)} 
                                                            hover:ring-1 hover:ring-emerald-400/50 transition-all duration-200`}
                                                            title={`${new Date(day.date).toLocaleDateString()}: ${day.contributionCount} contributions`}
                                                        />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-sm bg-gray-800 dark:bg-gray-800" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-700/80" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-600" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                        <div className="w-3 h-3 rounded-sm bg-emerald-400" />
                    </div>
                    <span>More</span>
                </div>
            </div>

            {/* Stats at bottom */}
            <div className="border-t mt-4 pt-4 border-gray-200 dark:border-gray-800/90">
                <div className="flex flex-wrap items-center justify-start gap-6">
                    <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaGithub className="text-gray-600 dark:text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Contributions:</span>
                        <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium">
                            {contributions.collection.contributionCalendar.totalContributions.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaCode className="text-gray-600 dark:text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Repositories:</span>
                        <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium">
                            {contributions.publicRepos.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaUsers className="text-gray-600 dark:text-gray-400" />
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Followers:</span>
                        <span className="text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-medium">
                            {contributions.followers.toLocaleString()}
                        </span>
                    </div>

                </div>
            </div>
        </BackgroundStyle>
    );
}