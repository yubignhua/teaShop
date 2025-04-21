/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bce2bc',
          300: '#94ce94',
          400: '#6bba6b',
          500: '#4a9f4a',
          600: '#3b823b',
          700: '#316831',
          800: '#2a522a',
          900: '#254525',
        },
        secondary: {
          50: '#fdfbec',
          100: '#fcf8d3',
          200: '#f8eeaa',
          300: '#f3df75',
          400: '#eece4b',
          500: '#e5b22e',
          600: '#cc8e23',
          700: '#a86d21',
          800: '#885621',
          900: '#704820',
        },
        wood: {
          50: '#fcf8f1',
          100: '#f8ebd9',
          200: '#eed8b6',
          300: '#e7c289',
          400: '#dca458',
          500: '#d18b39',
          600: '#c0732e',
          700: '#a05928',
          800: '#824828',
          900: '#6c3d24',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}; 