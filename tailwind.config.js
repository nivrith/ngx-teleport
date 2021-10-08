module.exports = {
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}'],
  },
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
