export default {
  content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      cursor: {
        fancy: "url('/public/toothbrush_cursor.svg'),auto",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  extend: {},
};
