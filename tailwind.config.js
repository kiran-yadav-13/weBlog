/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#F6EDE3',
        'card-surface': '#FFFFFF',
        'accent': '#FF7A7A',
        'text-default': '#2D2A32',
        'muted': '#7A757A',
        'border-soft': '#F2E6E1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'pink-glow': '0 8px 30px rgba(255,122,122,0.12)',
      }
    },
  },
  plugins: [],
}

