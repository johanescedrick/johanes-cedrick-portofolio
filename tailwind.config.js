/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#1E52C8',
          deep: '#123A9E',
          bright: '#3B6FE0',
        },
        ember: {
          DEFAULT: '#E8820E',
          soft: '#F4A94A',
        },
        lavender: '#EEF1FB',
        mist: '#E3E9F9',
        ink: '#161E38',
        slate2: '#4A5578',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
