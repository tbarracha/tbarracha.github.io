/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
        'pt-serif': ['PT Serif', 'serif']
      },
      colors: {
        // Theme START
        'header': 'var(--header)',
        'header-contrast': 'var(--header-contrast)',
        'background': 'var(--background)',
        'background-contrast': 'var(--background-contrast)',
        'footer': 'var(--footer)',
        'footer-contrast': 'var(--footer-contrast)',
        'primary': 'var(--primary)',
        'primary-contrast': 'var(--primary-contrast)',
        'secondary': 'var(--secondary)',
        'secondary-contrast': 'var(--secondary-contrast)',
        'highlight': 'var(--highlight)',
        'highlight-contrast': 'var(--highlight-contrast)',
        'accent': 'var(--accent)',
        'accent-contrast': 'var(--accent-contrast)',
        'scrollbar-bg': 'var(--scrollbar-bg)',
        'scrollbar-thumb': 'var(--scrollbar-thumb)',
        'scrollbar-thumb-hover': 'var(--scrollbar-thumb-hover)',
        'success': 'var(--success)',
        'success-secondary': 'var(--success-secondary)',
        'info': 'var(--info)',
        'info-secondary': 'var(--info-secondary)',
        'warning': 'var(--warning)',
        'warning-secondary': 'var(--warning-secondary)',
        'danger': 'var(--danger)',
        'danger-secondary': 'var(--danger-secondary)',
        // Theme END
      },
      spacing: {
        'main-padding': '10%', // px-[10%]
      },
      boxShadow: {
        'main-shadow': '0 4px 6px -1px rgba(15, 23, 42, 0.2), 0 2px 4px -1px rgba(15, 23, 42, 0.1)', // Slate shadow
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to right, #a855f7, #ec4899, #ef4444)', // Purple to pink to red gradient
      },
    },
  },
  plugins: [],
}

