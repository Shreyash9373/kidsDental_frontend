export default {
  content: ['./index.html', './src//*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        primary: 'linear-gradient(to right, #6EC3F7, #f0efe5)', // Change colors as needed
      },
      cursor: {
        fancy: "url('/public/toothbrush_cursor.svg'),auto",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  extend: {},
};
