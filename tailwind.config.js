/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-card': '#1a1f3a',
        'dark-border': '#2a2f4a',
        'cyber-blue': '#00d9ff',
        'cyber-purple': '#9d4edd',
        'cyber-pink': '#ff006e',
        'cyan-glow': '#00f5ff',
        'neon-green': '#39ff14',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'glow-spin': 'glow-spin 8s linear infinite',
        'particle-float': 'particle-float 20s linear infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'typing': 'typing 0.7s steps(40, end)',
        'magnetic': 'magnetic 0.5s ease-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
        },
        'slide-down': {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'glow-spin': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(100px)', opacity: '0' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'magnetic': {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(10px, -10px) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 217, 255, 0.5)',
        'glow-lg': '0 0 60px rgba(0, 217, 255, 0.8)',
        'glow-pink': '0 0 30px rgba(255, 0, 110, 0.5)',
        'glow-purple': '0 0 30px rgba(157, 78, 221, 0.5)',
        'card': '0 8px 32px rgba(0, 217, 255, 0.1)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
