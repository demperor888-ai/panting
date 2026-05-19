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
          50: '#f0f2f6',
          100: '#d9dde8',
          200: '#b5bed0',
          300: '#8493b0',
          400: '#5f7296',
          500: '#3f5478',
          600: '#2a3d60',
          700: '#1a2a4a',
          800: '#111e38',
          900: '#0b1529',
        },
        accent: {
          50: '#f8f9fc',
          100: '#eceff5',
          200: '#dae0ed',
          300: '#bcc6d8',
          400: '#98a6be',
          500: '#7b8ba6',
          600: '#5f708c',
          700: '#4a5a74',
          800: '#36445c',
          900: '#232d42',
        },
        dark: {
          50: '#f5f6f8',
          100: '#e8eaef',
          200: '#d3d7e0',
          300: '#b2b8c6',
          400: '#828ba0',
          500: '#5a6478',
          600: '#3d465a',
          700: '#283042',
          800: '#181e2c',
          900: '#0a0f1a',
          950: '#050810',
        },
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0b1529 0%, #1a2a4a 50%, #7b8ba6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0f1a 0%, #050810 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(123, 139, 166, 0.3)',
        'glow-lg': '0 0 40px rgba(123, 139, 166, 0.4)',
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
