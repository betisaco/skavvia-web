/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0F3D2E',
          dark: '#0A2B20',
          light: '#BFD9CC',
          50: '#F2F7F4',
          100: '#E2EEE7',
          200: '#C2DDD0',
          300: '#94C3AE',
          400: '#5EA284',
          500: '#3A8263',
          600: '#2A684E',
          700: '#0F3D2E',
          800: '#0C3125',
          900: '#0A2B20',
          950: '#051812',
        },
        gold: {
          DEFAULT: '#E9B949',
          muted: '#D4A338',
          light: '#F8E9C0',
          dark: '#B88B27',
        },
        stone: {
          brand: '#6B7280',
        },
        brand: {
          offwhite: '#F5F5F0',
          obsidian: '#101412',
          darkBg: '#08130F',
          darkSurface: '#0E1B17',
          darkSurfaceElevated: '#13231D',
          darkBorder: '#26382F',
          lightBorder: '#E1E4DE',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
