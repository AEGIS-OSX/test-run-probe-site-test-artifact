import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "var(--color-canvas)",
          secondary: "var(--color-canvas-secondary)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        trust: "var(--color-trust)",
        border: "var(--color-border)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        "h1": ["56px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h1-mobile": ["36px", { lineHeight: "1.1" }],
        "h2": ["40px", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h2-mobile": ["28px", { lineHeight: "1.15" }],
        "h3": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3-mobile": ["22px", { lineHeight: "1.25" }],
        "body": ["17px", { lineHeight: "1.65" }],
        "body-mobile": ["16px", { lineHeight: "1.6" }],
        "small": ["14px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        "label": ["14px", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      spacing: {
        "18": "72px",
        "22": "88px",
        "30": "120px",
        "34": "136px",
        "38": "152px",
      },
      borderRadius: {
        button: "6px",
        input: "4px",
        card: "8px",
      },
      maxWidth: {
        container: "1200px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
          sm: "24px",
          lg: "24px",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
