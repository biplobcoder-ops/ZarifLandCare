/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bengali: ["var(--font-noto-bengali)", "sans-serif"],
        sans: ["var(--font-noto-bengali)", "sans-serif"],
      },
      colors: {
        sidebar: {
          bg: "#0a2e20",
          bgDark: "#061f15",
          bgLight: "#0f3b29",
          hover: "#134d36",
          active: "#22c55e",
          activeBg: "#166534",
          text: "#d1fae5",
          textMuted: "#6ee7b7",
          border: "#1a4d38",
        },
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        status: {
          pending: "#f59e0b",
          pendingBg: "#fef3c7",
          approved: "#10b981",
          approvedBg: "#d1fae5",
          rejected: "#ef4444",
          rejectedBg: "#fee2e2",
          answered: "#3b82f6",
          answeredBg: "#dbeafe",
          closed: "#6b7280",
          closedBg: "#f3f4f6",
        },
        background: {
          DEFAULT: "#fafaf9",
          card: "#ffffff",
          muted: "#f5f5f4",
        },
        border: {
          DEFAULT: "#e7e5e4",
          light: "#f5f5f4",
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        cardHover: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        sidebar: "2px 0 8px 0 rgb(0 0 0 / 0.15)",
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        input: "8px",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
