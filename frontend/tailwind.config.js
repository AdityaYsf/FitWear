/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B',
          hover: '#0F172A',
          light: '#F8FAFC',
        },
        secondary: {
          DEFAULT: '#64748B',
          hover: '#475569',
        },
        accent: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
        },
        neutral: {
          bg: '#FFFFFF',
          card: '#F1F5F9',
          text: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
}
