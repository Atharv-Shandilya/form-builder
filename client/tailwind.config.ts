import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        border: colors.slate[200],
        ring: colors.slate[400],
        foreground: colors.slate[950],
        background: '#fff',
        muted: {
          DEFAULT: colors.slate[100],
          foreground: colors.slate[500],
        },
        primary: {
          DEFAULT: colors.indigo[700],
          foreground: colors.slate[50],
        },
        secondary: {
          DEFAULT: colors.indigo[100],
          foreground: colors.slate[900],
        },
        destructive: {
          DEFAULT: colors.red[500],
          foreground: colors.slate[50],
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
