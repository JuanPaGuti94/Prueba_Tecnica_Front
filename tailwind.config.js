/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-loading': 'spinLoading 1s linear infinite',
      },
      keyframes: {
        spinLoading: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      boxShadow: {
        'custom-pink': '0px 10px 12px -10px #FFA7B8',
      },
    },
  },
  plugins: [],
}

