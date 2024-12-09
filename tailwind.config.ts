import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": ["var(--font-roboto-mono)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
