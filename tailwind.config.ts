import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'mdnav': { 'max': '768px' }
      },
      colors: {
        yellow: "#FFD200"
      },
      fontFamily: {
        mainFont: ['Poppins', 'sans-serif'],
        secondFont: ['Adamin', 'serif'],
        storyFont: ['Abel', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        600: '600'
      },
    },
  },
  plugins: [],
};
export default config;
