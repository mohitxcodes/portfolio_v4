import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          accent: '#10b981',
          text: {
            primary: '#1f2937',
            secondary: '#4b5563',
            accent: '#059669'
          }
        },
        dark: {
          primary: '#000000',
          secondary: '#111827',
          accent: '#10b981',
          text: {
            primary: '#f3f4f6',
            secondary: '#9ca3af',
            accent: '#34d399'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config