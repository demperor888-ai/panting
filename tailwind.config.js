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
          50: '#f0f4f8',
          100: '#d6e0ea',
          200: '#b0c4d4',
          300: '#7d9ab3',
          400: '#557a99',
          500: '#3a6080',
          600: '#264b6b',
          700: '#1e3a5f',
          800: '#152b4a',
          900: '#0d1f38',
        },
        accent: {
          50: '#fdf8ee',
          100: '#f9efd5',
          200: '#f3dfa8',
          300: '#e9c76b',
          400: '#d4af37',
          500: '#c9a84c',
          600: '#b8942f',
          700: '#9a7a28',
          800: '#7a6120',
          900: '#5c4818',
        },
        dark: {
          50: '#f7f8fa',
          100: '#eef1f5',
          200: '#dde3ea',
          300: '#c1cbd6',
          400: '#8d9aab',
          500: '#5f6d80',
          600: '#3d4d61',
          700: '#25344a',
          800: '#152033',
          900: '#0a1526',
          950: '#050d1a',
        },
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #1e3a5f 0%, #3a6080 50%, #c9a84c 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a1526 0%, #050d1a 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(201, 168, 76, 0.3)',
        'glow-lg': '0 0 40px rgba(201, 168, 76, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
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
