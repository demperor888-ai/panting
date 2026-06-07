/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effafc',
          100: '#d7f0f5',
          200: '#b3e3ed',
          300: '#7dcee0',
          400: '#47b2cc',
          500: '#2b97b4',
          600: '#1d7a96',
          700: '#1a627b',
          800: '#0f4762',
          900: '#062238',
        },
        accent: {
          50: '#f6fbfc',
          100: '#e4f5f7',
          200: '#cbebf0',
          300: '#a5dce5',
          400: '#7dc9d7',
          500: '#56b2c5',
          600: '#3994a9',
          700: '#2e7d8f',
          800: '#25616d',
          900: '#16414b',
        },
        dark: {
          50: '#f4f6f9',
          100: '#e2e6ef',
          200: '#c8cedc',
          300: '#9fa8c0',
          400: '#707b99',
          500: '#4a5573',
          600: '#354154',
          700: '#262d3e',
          800: '#151b2a',
          900: '#070b14',
          950: '#04070c',
        },
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #062238 0%, #1a627b 52%, #12c7b5 100%)',
        'gradient-dark': 'linear-gradient(180deg, #050810 0%, #062238 48%, #0a2439 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(15,45,68,0.06) 0%, rgba(18,199,181,0.04) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(18, 199, 181, 0.24)',
        'glow-lg': '0 0 40px rgba(18, 199, 181, 0.34)',
        'glass': '0 8px 32px rgba(8, 18, 34, 0.08)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'scaleIn': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
