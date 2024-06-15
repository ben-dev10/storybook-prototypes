import plugin from "tailwindcss/plugin";

export const novelUIPlugin = plugin(
  function ({ addBase }) {
    addBase({});
  },
  {
    theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
      extend: {
        colors: {
          background: "hsl(var(--background))",
          accent: {
            DEFAULT: "hsl(var(--accent))",
            secondary: "hsl(var(--accent-foreground))",
          },
          foreground: {
            DEFAULT: "hsl(var(--foreground))",
            secondary: "hsl(var(--foreground-secondary))",
          },

          //   border: {
          //     DEFAULT: "hsl(var(--border))",
          //     foreground: "hsl(var(--border-secondary))",
          //   },
        },
        // borderRadius: {
        //   lg: `var(--radius)`,
        //   md: `calc(var(--radius) - 2px)`,
        //   sm: "calc(var(--radius) - 4px)",
        // },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);