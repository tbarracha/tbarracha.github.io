/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'red-hat-display': ['Red Hat Display', 'sans-serif'],
      'pt-serif': ['PT Serif', 'serif']
    },
    extend: {
      colors: {
        // Light theme
        'main-bg': '#EDF2F4',

        'main-primary': '#8D99AE',
        'main-primary-lighter': '#BDC6D1',
        'main-primary-darker': '#5C6378',

        'main-secondary': '#2B2D42',
        'main-secondary-lighter': '#404363',
        'main-secondary-darker': '#27293C',
        
        'main-hl-primary': '#EF233C',
        'main-hl-primary-lighter': '#EF233C',
        'main-hl-primary-darker': '#E41237',

        'main-hl-secondary': '#D80032',
        'main-hl-secondary-lighter': '#D80032',
        'main-hl-secondary-darker': '#B8002B',
        
        // Dark theme
        'dark-bg':'#262730',
        
        'dark-primary': '#0e1118',
        'dark-primary-lighter': '#1A1C24',
        'dark-primary-darker': '#08090D',
        
        'dark-secondary': '#a0a6b7',
        'dark-secondary-lighter': '#C5C9D3',
        'dark-secondary-darker': '#575C68',

        'dark-hl-primary': '#FCE1D3',
        'dark-hl-primary-lighter': '#F6B08D',
        'dark-hl-primary-darker': '#F6B08D',

        'dark-hl-secondary': '#78C2B4',
        'dark-hl-secondary-lighter': '#4A7E7F',
        'dark-hl-secondary-dark': '#4A7E7F',
      },
      // Extending to include custom text shadow
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.25)', // Default small shadow
        'lg': '4px 4px 6px rgba(0, 0, 0, 0.35)', // Larger shadow
        'xl': '6px 6px 8px rgba(0, 0, 0, 0.45)', // Extra large shadow
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)', // Default small shadow
        },
        '.text-shadow-lg': {
          textShadow: '0px 4px 6px rgba(0, 0, 0, 0.35)', // Larger shadow
        },
        '.text-shadow-xl': {
          textShadow: '0px 6px 8px rgba(0, 0, 0, 0.45)', // Extra large shadow
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
