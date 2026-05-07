/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#e8ecf3',
          100: '#c5cfe3',
          200: '#9aafd0',
          300: '#6f8fbd',
          400: '#4d73ae',
          500: '#2b57a0',
          600: '#264f96',
          700: '#1e4589',
          800: '#163b7c',
          900: '#1B2A4A',
          950: '#111c30',
        },
      },
    },
  },
  plugins: [],
};
