"use client"

import { useTheme } from '@/components/providers/theme-provider';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 p-3 rounded-full 
            bg-gray-100 dark:bg-gray-800 
            text-gray-800 dark:text-gray-200
            shadow-lg hover:shadow-xl
            transition-all duration-200
            hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
    );
}
