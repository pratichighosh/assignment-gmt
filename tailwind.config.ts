import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B9080",
          dark: "#4A6B5E",
          light: "#A4C3B2",
        },
        light: {
          DEFAULT: "#EAF4F4",
          darker: "#CCE3DE",
        },
        dark: {
          DEFAULT: "#2C3531",
          lighter: "#5F6C6B",
        },
        bright: {
          DEFAULT: "#F6BD60",
          darker: "#E8A846",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      spacing: {
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
      },
    },
  },
  plugins: [],
};

export default config;
