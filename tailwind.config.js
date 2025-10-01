/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fbf7f3',
          100: '#f5ebe1',
          200: '#ead3bb',
          300: '#deb489',
          400: '#cf8c50',
          500: '#b96c2f',
          600: '#9a5224',
          700: '#7a401f',
          800: '#65361d',
          900: '#3b1f12',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


