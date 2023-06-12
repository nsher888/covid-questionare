/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      helvetica: ['Helvetica Neue', 'Arial', 'sans-serif'],
      helveticab: ['Helvetica Bold', 'Arial', 'sans-serif'],
      Contractica: ['Contractica', 'Arial', 'sans-serif'],
      anonymous: ['Anonymous Pro', 'Arial', 'sans-serif'],
    },
    extend: {
      TextShadow: {
        'text-shadow': '0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
