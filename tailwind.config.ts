import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00e67a',
          light: '#00ff88',
          dark: '#00b35c',
          muted: 'rgba(0, 230, 122, 0.15)',
        },
        surface: {
          DEFAULT: '#0f0f0f',
          elevated: '#141414',
        },
        border: {
          DEFAULT: '#1a1a1a',
          subtle: '#111111',
          hover: 'rgba(0, 230, 122, 0.2)',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 230, 122, 0.15)',
        'glow': '0 0 40px rgba(0, 230, 122, 0.25)',
        'glow-lg': '0 0 80px rgba(0, 230, 122, 0.3)',
        'glow-btn': '0 0 30px rgba(0, 230, 122, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(rgba(0, 230, 122, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 122, 0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}

export default config
