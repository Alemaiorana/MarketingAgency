/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0053D0',
        'bg-dark': '#000000',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Archivo', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '24px',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      extend: {
        padding: {
          'site': '100px',
        }
      }
    },
  },
  plugins: [],
}
