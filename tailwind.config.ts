import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626', // Red - automotive racing color
        secondary: '#0A0A0A', // Deep black
        accent: '#EAB308', // Gold/Yellow - warning lights
        chrome: '#C0C0C0', // Chrome/Silver
        engine: '#1E293B', // Engine dark blue-gray
        tire: '#1F1F1F', // Tire black
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'carbon-fiber': 'repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 10px, #222222 10px, #222222 20px)',
        'metallic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gear-pattern': 'radial-gradient(circle at 50% 50%, #333 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
