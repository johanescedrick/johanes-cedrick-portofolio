/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1D1D1F',
        graphite: '#424245',
        muted: '#6E6E73',
        hairline: '#D2D2D7',
        mist: '#F5F5F7',
        accent: {
          DEFAULT: '#0055FF',
          hi: '#3B7BFF',
          soft: '#EBF1FF',
        },
        violet: '#6D3BEF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1180px',
        read: '68ch',
      },
      borderRadius: {
        xl2: '22px',
        xl3: '30px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
      },
    },
  },
  plugins: [],
}
