'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions } from '@/apis/fetch-github';
import type { GitHubContributions } from '@/types/github-types';
import { FaChevronDown, FaGithub } from 'react-icons/fa';

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
                    console.log(data);
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
    }, [selectedYear]); // Reload when year changes

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-green-500/5';
        if (count < 5) return 'bg-green-500/20';
        if (count < 10) return 'bg-green-500/40';
        if (count < 20) return 'bg-green-500/60';
        return 'bg-green-500/80';
    };

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const years = [2025, 2024, 2023, 2022, 2021, 2020];

    if (loading) {
        return <div className="animate-pulse h-52 bg-black/60 rounded-lg" />;
    }

    if (error) {
        return <div className="text-red-400">Error: {error}</div>;
    }

    if (!contributions) return null;

    return (
        <div className="relative bg-black/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-200">
                    GitHub Contributions
                </h2>

                {/* Year Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 text-gray-300 bg-gray-800/50 rounded-md hover:bg-gray-700/50 transition"
                    >
                        {selectedYear}
                        <FaChevronDown className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isYearDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-full bg-black/90 border border-gray-800 rounded-md py-1 z-10">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedYear(year);
                                        setIsYearDropdownOpen(false);
                                    }}
                                    className="w-full px-3 py-1.5 text-left text-gray-300 hover:bg-gray-800/50 transition"
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-3 overflow-x-auto pb-4">
                {/* Month Labels with gaps */}
                <div className="flex text-sm text-gray-400 mb-1 min-w-[1000px]">
                    {months.map((month) => (
                        <div key={month} className="flex-1 text-center px-2 border-l border-gray-800 first:border-l-0">
                            {month}
                        </div>
                    ))}
                </div>

                {/* Contribution Grid with month separators */}
                <div className="flex min-w-[1000px]">
                    {months.map((month, monthIndex) => {
                        // Filter weeks for current month
                        const monthWeeks = contributions.weeks.filter(week => {
                            const weekDate = new Date(week.contributionDays[0].date);
                            return weekDate.getMonth() === monthIndex;
                        });

                        return (
                            <div key={month} className="flex-1 px-2 border-l border-gray-800 first:border-l-0">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-1">
                                    {monthWeeks.map((week, weekIndex) => (
                                        <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                            {week.contributionDays.map((day, dayIndex) => (
                                                <div
                                                    key={`${weekIndex}-${dayIndex}`}
                                                    className={`w-4 h-4 rounded-sm ${getContributionColor(day.contributionCount)} 
                                                        hover:ring-1 hover:ring-green-500/50 transition-all`}
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

                {/* Legend */}
                <div className="flex items-center justify-end gap-2 text-sm text-gray-400 pt-2">
                    <span>Less</span>
                    <div className="flex gap-1">
                        {[5, 20, 40, 60, 80].map((opacity) => (
                            <div
                                key={opacity}
                                className={`w-4 h-4 rounded-sm bg-green-500/${opacity}`}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-800">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-gray-400" />
                            <a
                                href="https://github.com/msxcodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition"
                            >
                                @msxcodes
                            </a>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-400">Total contributions: </span>
                            <span className="text-gray-200 font-medium">{contributions.totalContributions.toLocaleString()}</span>
                        </div>
                        <div className="text-sm">
                            <span className="text-gray-400">Followers: </span>
                            <span className="text-gray-200 font-medium">2.1k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}