/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF7EE',
          100: '#F4ECD4',
          200: '#E7D7A4',
          300: '#D9C074',
          400: '#CCAA4B',
          500: '#B8932C',
          600: '#94721E',
          700: '#705315',
          800: '#4C370E',
          900: '#2E2007',
        },
        obsidian: {
          950: '#07090C',
          900: '#0C0F14',
          850: '#11151C',
          800: '#171C26',
          700: '#222938',
          600: '#2F384C',
        },
        champagne: {
          light: '#F8F5F0',
          DEFAULT: '#E8DFD3',
          dark: '#D0C4B4',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-metallic': 'linear-gradient(135deg, #B8932C 0%, #F5DE98 45%, #CCAA4B 70%, #8C6A18 100%)',
      }
    },
  },
  plugins: [],
}
