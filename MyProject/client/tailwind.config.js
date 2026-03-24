/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",  // base (mobile, tablet, small laptop)
      lg: "2rem",
      md:"4rem"  
    }
  },
  extend: {
    colors: {
      customColor1: "#80AFD1",
      customColor2: "#5A90B3",
    },
    animation: {
      "infinite-scroll": "infinite-scroll 50s linear infinite",
      "infinite-scroll-left": "infinite-scroll-left 50s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      "infinite-scroll-left": {
        from: { transform: "translateX(-50%)" },
        to: { transform: "translateX(0%)" },
      },
      
    },
  },
};
export const plugins = [];