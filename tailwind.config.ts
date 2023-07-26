import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "X",
          {
            ...defaultTheme.fontFamily.sans,
            fontFeatureSettings: '"ss04"',
          },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
