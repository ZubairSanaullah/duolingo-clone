import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-deep': 'var(--color-primary-deep)',
        blue: 'var(--color-blue)',
        green: 'var(--color-green)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        streak: 'var(--color-streak)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
        background: 'var(--color-background)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'poppins-medium': ['var(--font-poppins-medium)', 'sans-serif'],
        'poppins-semibold': ['var(--font-poppins-semibold)', 'sans-serif'],
        'poppins-bold': ['var(--font-poppins-bold)', 'sans-serif'],
      },
    },
  },
} satisfies Config;
