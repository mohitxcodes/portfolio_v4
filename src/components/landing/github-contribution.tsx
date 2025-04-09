'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions } from '@/apis/fetch-github';
import type { GitHubContributions } from '@/types/github-types';
import { FaChevronDown, FaGithub, FaUsers, FaFire } from 'react-icons/fa';
import ContributionsFallback from '@/components/fallback/contributions-fallback';
import BackgroundStyle from '../common/background';

export default function GitHubContributions() {
    const [contributions, setContributions] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchGitHubContributions('msxcodes', selectedYear);
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

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-gray-900 dark:bg-gray-800';
        if (count < 1) return 'bg-emerald-900/80';
        if (count < 3) return 'bg-emerald-700';
        if (count < 5) return 'bg-emerald-600';
        return 'bg-emerald-400';
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
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <FaGithub className="text-2xl text-gray-400" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-200">
                            GitHub Activity
                        </h2>
                        <a
                            href="https://github.com/msxcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-gray-300 transition"
                        >
                            @msxcodes
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition"
                    >
                        {selectedYear}
                        <FaChevronDown className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isYearDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-full bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-lg py-1 z-10">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedYear(year);
                                        setIsYearDropdownOpen(false);
                                    }}
                                    className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800/50 transition"
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
                <div className="relative overflow-x-auto">
                    <div className="min-w-[1000px]">
                        {/* Month Labels */}
                        <div className="grid grid-cols-12 mb-2">
                            {months.map((month) => (
                                <div key={month} className="text-xs text-gray-400 font-medium">
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Contribution Grid */}
                        <div className="grid grid-cols-12 gap-4">
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
                                                            className={`w-3 h-3 rounded ${getContributionColor(day.contributionCount)} 
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
            <div className="flex items-center justify-between border-t mt-1 pt-1 border-gray-800/90">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaGithub className="text-gray-400" />
                        <span className="text-sm text-gray-400">Contributions:</span>
                        <span className="text-gray-200 font-medium">
                            {contributions.collection.contributionCalendar.totalContributions.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaUsers className="text-gray-400" />
                        <span className="text-sm text-gray-400">Followers:</span>
                        <span className="text-gray-200 font-medium">2.1k</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200">
                        <FaFire className="text-gray-400" />
                        <span className="text-sm text-gray-400">Streak:</span>
                        <span className="text-gray-200 font-medium">14 days</span>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}