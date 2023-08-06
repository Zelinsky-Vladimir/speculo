const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
      },
      animation: {
        'slow-spin': 'slow-spin 2s linear infinite',
      },
      keyframes: {
        'slow-spin': {
          from: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
