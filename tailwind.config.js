/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc6c6',
          300: '#ff9d9d',
          400: '#ff6b6b',
          500: '#f53d3d',
          600: '#e21d1d',
          700: '#bd1515',
          800: '#9c1414',
          900: '#7f1818',
          950: '#460808',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b8c8',
          400: '#8590a8',
          500: '#67738c',
          600: '#525c73',
          700: '#434b5e',
          800: '#3a4051',
          900: '#0f1419',
          950: '#070a0e',
        },
        gold: {
          400: '#e4c878',
          500: '#c9a85a',
          600: '#a8863f',
        },
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(15, 20, 25, 0.08)',
        card: '0 10px 40px -12px rgba(15, 20, 25, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out both',
        slideUp: 'slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        scaleIn: 'scaleIn 0.5s ease-out both',
        kenburns: 'kenburns 8s ease-out both',
        shimmer: 'shimmer 2s linear infinite',
        pulseRing: 'pulseRing 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
      },
    },
  },
  plugins: [],
};
