/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F3F',
        secondary: '#00C2FF',
        accent: '#FFD166',
        background: '#050816'
      },
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero-desktop': '96px',
        'hero-tablet': '72px',
        'hero-mobile': '48px',
        'section-heading': '64px',
        'card-title': '32px',
        'body-lg': '18px',
        'body-sm': '14px'
      }
    }
  },
  plugins: []
}
