import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0908',
          50: '#F3EFE4',
          100: '#E7E0CE',
          soft: '#15130F',
          surface: '#1B1812',
          surface2: '#242018',
          border: '#2E2A20',
        },
        gold: {
          DEFAULT: '#C9A24B',
          soft: '#E4C878',
          dim: '#8A6E33',
        },
        terrace: {
          DEFAULT: '#5C7A52',
          soft: '#7C9A6E',
        },
        cream: '#F3EFE4',
        muted: '#9C9587',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        contour: "url('/images/contour.svg')",
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        drift: 'drift 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-200px,-120px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
