/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        dark: '#0f1419',
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 107, 107, 0.4)',
      },
      borderRadius: {
        glass: '20px',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 18px rgba(255, 107, 107, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 35px rgba(255, 107, 107, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
