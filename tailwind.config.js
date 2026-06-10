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
        // 深邃靛蓝系 — 用作深色区域、按钮、强调色
        brand: {
          50: '#f5f7fb',
          100: '#e4eaf4',
          200: '#c8d4e6',
          300: '#9db3d1',
          400: '#6b8bb7',
          500: '#4b6e9e',
          600: '#3a5784',
          700: '#30476b',
          800: '#2a3d5a',
          900: '#1e2d43',
          950: '#101a2b',
        },
        // 铜金色系 — 点缀、高亮、CTA
        accent: {
          50: '#fdf9f2',
          100: '#f9eedb',
          200: '#f2dab3',
          300: '#e7bf80',
          400: '#d99f4f',
          500: '#cc8830',
          600: '#b46e25',
          700: '#935422',
          800: '#774422',
          900: '#5c351d',
          950: '#331c0e',
        },
        // 冷灰中间色 — 展开区域、卡片底纹
        surface: {
          50: '#f6f7fa',
          100: '#ebeef3',
          200: '#d6dae6',
          300: '#b2b9d1',
          400: '#858ea8',
          500: '#626a84',
          600: '#485068',
          700: '#363c53',
          800: '#272b3e',
          900: '#161927',
          950: '#0a0c14',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #101a2b 0%, #2a3d5a 48%, #4b6e9e 100%)',
        'gradient-warm': 'linear-gradient(135deg, #1e2d43 0%, #30476b 35%, #6b8bb7 70%, #cc8830 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(30,45,67,0.03) 0%, rgba(107,139,183,0.04) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(107,139,183,0.2)',
        'glow-lg': '0 0 48px rgba(107,139,183,0.3)',
        'glow-warm': '0 0 28px rgba(204,136,48,0.18)',
        'glass': '0 8px 36px rgba(10,18,28,0.06)',
        'glass-lg': '0 20px 60px rgba(10,18,28,0.08)',
        'elevated': '0 2px 12px rgba(10,18,28,0.04), 0 8px 32px rgba(10,18,28,0.06)',
        'elevated-hover': '0 4px 20px rgba(10,18,28,0.06), 0 12px 44px rgba(10,18,28,0.1)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.7s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'float': 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
