import React from 'react';

export default function ContributionsFallback() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="relative bg-black/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-gray-800 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-6">
                <div className="h-7 w-48 bg-gray-800 rounded" />
                <div className="h-8 w-24 bg-gray-800 rounded-md" />
            </div>

            <div className="space-y-3 pb-4">
                <div className="relative">
                    {/* Month Labels Skeleton */}
                    <div className="overflow-x-auto">
                        <div className="flex text-sm mb-1 min-w-[1000px]">
                            {months.map((month) => (
                                <div key={month} className="flex-1 text-center px-2 border-l border-gray-800 first:border-l-0">
                                    <div className="h-4 w-8 bg-gray-800 rounded mx-auto" />
                                </div>
                            ))}
                        </div>

                        {/* Contribution Grid Skeleton */}
                        <div className="flex min-w-[1000px]">
                            {months.map((month) => (
                                <div key={month} className="flex-1 px-2 border-l border-gray-800 first:border-l-0">
                                    <div className="grid grid-cols-4 gap-1">
                                        {[...Array(4)].map((_, index) => (
                                            <div key={index} className="grid grid-rows-7 gap-1">
                                                {[...Array(7)].map((_, dayIndex) => (
                                                    <div
                                                        key={dayIndex}
                                                        className="w-4 h-4 rounded-sm bg-gray-800"
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Legend Skeleton */}
                <div className="flex items-center justify-end gap-2 pt-2">
                    <div className="h-4 w-8 bg-gray-800 rounded" />
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-4 h-4 rounded-sm bg-gray-800"
                            />
                        ))}
                    </div>
                    <div className="h-4 w-8 bg-gray-800 rounded" />
                </div>

                {/* Stats Skeleton */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-800">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 bg-gray-800 rounded" />
                            <div className="h-4 w-24 bg-gray-800 rounded" />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-32 bg-gray-800 rounded" />
                            <div className="h-4 w-16 bg-gray-800 rounded" />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-20 bg-gray-800 rounded" />
                            <div className="h-4 w-12 bg-gray-800 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
