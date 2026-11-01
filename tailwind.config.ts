import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        panel: '#0d1326',
        panelAlt: '#111c34',
        accent: '#5ea5ff',
        violet: '#8b5cf6',
        mint: '#5eead4',
        slate: '#94a3b8',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(14, 24, 49, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(94,165,255,0.18), transparent 28%), radial-gradient(circle at bottom right, rgba(139,92,246,0.18), transparent 28%)',
      },
    },
  },
  plugins: [],
};

export default config;
