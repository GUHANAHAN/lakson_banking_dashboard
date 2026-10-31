/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14213d',
        muted: '#5b6b82',
        line: '#dde2ea',
        canvas: '#f4f6f9',
        head: '#f8f9fb',
        accent: { DEFAULT: '#0f6cbd', soft: '#e8f1fa' },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Selawik', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
