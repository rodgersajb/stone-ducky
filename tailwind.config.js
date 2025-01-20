const { Libre_Baskerville } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "ocean-side-view": "url('/images/ocean-side-view.webp')",
        "stone-ducky-icons-background":
          "url('/images/stone_ducky_background_1.svg')",
        "orange-BG": "url('/images/background_orange.webp')",
        "summer-patio": "url('/images/stone_ducky_patio_view.webp')",
        "blue-duck-BG": "url('/images/ducky_blue_BG.webp')",
        "orange-corner-borders": "url('/images/orange-corner-borders.webp')",
        "duck-feet": "url('/images/duck_feet.png')",
        "duck-tracks": "url('/images/duck_tracks.png')",
        "duck-feet-trail": "url('/images/duck_feet_trail.webp')",
        "mobile-duck-bg": "url('/images/mobile-nav-duck.webp')",
        "food-duck-feet-bg": "url('/images/food_duck_feet_bg.webp')",
        "nav-waves": "url('/images/navbar_waves.png')",
        "duck-feet": "url('/images/nav_duck_feet.png')",
      },
      colors: {
        whiteBG: "#f7f7f7",
        duckyOrange: "#f6a51f",
        duckyBlue: "#164997",
        duckyLightBlue: "#D0E4F2",
        duckyYellow: "#f6d166",
        warmBeige: "#D7CAB1",
        charcoal: "#333333",
        darkBlueBG: "#1c2b40",
        softBlue: "#e3eaf4",
        creamBG: "#F5F2ED",
        richNavy: "#1c3d72",
        coolGray: "#4A4A4A",
        mutedOrange: "#E89E38",
        tealGreen: "#2A746E",
        goldenYellow: "#F9D77E",

        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        fontFamily: {
          poppins: ["var(--font-poppins)", "sans-serif"],
          cormorant: ["var(--font-cormorant)", "serif"],
          dancingScript: ["var(--font-dancing-script)", "cursive"],
          Libre_Baskerville: ["var(--font-libre-baskerville)", "serif"],
          playfairDisplay: ["var(--font-playfair-display)", "serif"],
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        primary: {
          DEFAULT: "#1abc9c",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9b59b6",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#e0e0e0",
          foreground: "#555555",
        },
        accent: {
          DEFAULT: "#e67e22",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#e74c3c",
          foreground: "#ffffff",
        },
        border: "#dcdcdc",
        input: "#ffffff",
        ring: "#1abc9c",
        chart: {
          1: "#3498db",
          2: "#2ecc71",
          3: "#f1c40f",
          4: "#e67e22",
          5: "#e74c3c",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
