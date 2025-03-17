import layer from "react-map-gl/src/components/layer.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite",
        zoom: "zoomInOut 2s ease-in-out infinite",
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#DFDFF2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724FF",
        },
        yellow: {
          100: "#8E993F",
          300: "#FdFF66",
        },
      },
      fontFamily: {
        zentry: ["Zentry", "sans-serif"],
        general: ["General", "sans-serif"],
        "circular-web": ["circular Web", "sans-serif"],
        "robert-medium": ["Robert Medium", "sans-serif"],
        "robert-regular": ["Robert Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// @layer utilities {
// .mask-horizontal {
//   @apply [mask-image:linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)]
//     [mask-size:cover]
//     [mask-repeat:no-repeat];
//   }
//
// .mask-vertical {
//   @apply [mask-image:linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)]
//     [mask-size:cover]
//     [mask-repeat:no-repeat];
//   }
//
// .paused .animate-scrollX,
// .paused .animate-scrollY {
//     animation-play-state: paused !important;
//   }
//
// .reverse-x {
//     animation-direction: reverse;
//     animation-delay: -3s;
//   }
// }
