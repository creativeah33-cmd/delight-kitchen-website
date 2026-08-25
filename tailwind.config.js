/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        // ── Photo-verified palette ──────────────────────────────
        // Primary — black steel chairs/tables, door, tile ink, logo linework
        primary: {
          DEFAULT: "#1C1815",
          50: "#F7F6F5",
          100: "#ECEAE8",
          200: "#D5D1CD",
          300: "#B0AAA3",
          400: "#85807A",
          500: "#5C5751",
          600: "#3A3632",
          700: "#2A2724",
          800: "#1C1815",
          900: "#0E0C0A",
        },
        // Secondary — warm cream lime-plaster wall/arch color
        secondary: {
          DEFAULT: "#E6D9C4",
          50: "#FAF7F2",
          100: "#F2ECE0",
          200: "#E6D9C4",
          300: "#D4C3A5",
          400: "#BFA67F",
          500: "#A08A63",
          600: "#7D6B4D",
          700: "#5C4E38",
          800: "#3B3224",
          900: "#1E1912",
        },
        // Accent — confirmed brand amber from logo block, rattan, LED glow
        accent: {
          DEFAULT: "#E39A3B",
          50: "#FDF5E9",
          100: "#FAE7C7",
          200: "#F5D08E",
          300: "#EFB75A",
          400: "#E39A3B",
          500: "#C47D1E",
          600: "#9A6116",
          700: "#6F4510",
          800: "#452B0A",
          900: "#221504",
        },
        // Background — marble tabletop/counter, warm off-white
        surface: {
          DEFAULT: "#F5F2EC",
          50: "#FDFCFA",
          100: "#F5F2EC",
          200: "#EBE6DC",
          300: "#DDD6C8",
          400: "#C9BFAD",
        },
        // Support: cognac — leather seats, tags, hover fills
        cognac: {
          DEFAULT: "#A97142",
          50: "#F8F0E8",
          100: "#EEDCCA",
          200: "#DDB999",
          300: "#C89567",
          400: "#A97142",
          500: "#855832",
          600: "#634124",
          700: "#442C17",
          800: "#24170B",
        },
        // Support: cobalt — Turkish coffee ware + wall art, sparing accent only
        cobalt: {
          DEFAULT: "#2E4F80",
          50: "#EAF0F7",
          100: "#CEDCEB",
          200: "#9DB9D7",
          300: "#6B94C0",
          400: "#3F6FA0",
          500: "#2E4F80",
          600: "#233D64",
          700: "#192B47",
          800: "#0F1A2B",
        },
      },
      fontFamily: {
        display: ['"Cinzel"', "ui-serif", "Georgia", "serif"],
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.25rem, 7vw, 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.875rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        eyebrow: ["0.78rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28,24,21,0.06), 0 8px 24px -12px rgba(28,24,21,0.15)",
        card: "0 1px 1px rgba(28,24,21,0.05), 0 12px 36px -16px rgba(28,24,21,0.18)",
        inset: "inset 0 0 0 1px rgba(28,24,21,0.08)",
        glow: "0 0 40px 8px rgba(227,154,59,0.25)",
      },
      borderRadius: {
        pill: "9999px",
        arch: "50% 50% 0 0",
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.32em",
      },
      keyframes: {
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        archGlow: {
          "0%": { opacity: "0", filter: "brightness(0.7)" },
          "100%": { opacity: "1", filter: "brightness(1)" },
        },
        ledTrace: {
          "0%": { strokeDashoffset: "600" },
          "100%": { strokeDashoffset: "0" },
        },
        warmPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        rise: "riseIn 0.7s cubic-bezier(.2,.7,.2,1) both",
        fade: "fadeIn 0.6s ease both",
        marquee: "marquee 40s linear infinite",
        "arch-glow": "archGlow 0.8s ease-out both",
        "led-trace": "ledTrace 1.2s ease-out forwards",
        "warm-pulse": "warmPulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    // Safe-area inset utilities + no-scrollbar
    function ({ addUtilities }) {
      addUtilities({
        ".pb-safe": {
          "padding-bottom": "env(safe-area-inset-bottom, 0px)",
        },
        ".pt-safe": {
          "padding-top": "env(safe-area-inset-top, 0px)",
        },
        ".pl-safe": {
          "padding-left": "env(safe-area-inset-left, 0px)",
        },
        ".pr-safe": {
          "padding-right": "env(safe-area-inset-right, 0px)",
        },
        ".mb-safe": {
          "margin-bottom": "env(safe-area-inset-bottom, 0px)",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".min-touch": {
          "min-height": "44px",
          "min-width": "44px",
        },
      });
    },
  ],
};
