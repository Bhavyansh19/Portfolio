/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet: {
          300: '#5724FF',
        },
        yellow: {
          100: '#8E993F',
          300: '#FdFF66',
        }
      },
      fontFamily: {
        zentry: ['Zentry', 'sans-serif'],
        general: ['General', 'sans-serif'],
        'circular-web': ['circular Web', 'sans-serif'],
        'robert-medium': ['Robert Medium, sans-serif'],
        'robert-regular': ['Robert Regular, sans-serif'],
      },
      animation: {
        zoom: "zoomInOut 2s ease-in-out infinite",
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
    },
  },
  plugins: [],
};
