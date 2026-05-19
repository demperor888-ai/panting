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
          50: '#fafafa',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#424242',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0a0a0a',
        },
        accent: {
          50: '#fdfaf3',
          100: '#faf2e0',
          200: '#f5e4c0',
          300: '#edcf8e',
          400: '#e0b95c',
          500: '#d4a853',
          600: '#c49a3c',
          700: '#a67e2e',
          800: '#856324',
          900: '#63491a',
        },
        dark: {
          50: '#fafafa',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#cccccc',
          400: '#999999',
          500: '#666666',
          600: '#333333',
          700: '#1a1a1a',
          800: '#0d0d0d',
          900: '#000000',
          950: '#000000',
        },
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #d4a853 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0d0d0d 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 168, 83, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 168, 83, 0.4)',
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
