/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(234, 12%, 34%)',
        'dark-desaturated-cyan': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'slightly-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-transparent-white2': 'hsla(0, 0%, 100%, 0.6)',
        'grayish-blue': 'hsl(229, 6%, 66%)',
        'supervisor': '2px solid hsl(180, 62%, 55%)',
        'team':'hsl(358, 67%, 61%)',
        'karma':'hsl(33, 90%, 65%)',
        'calculator':'hsl(212, 78%, 63%)',
      },
      fontweight: {
        '400': '400',
        '200': '200',
        '600': '600',
      },
      fontFamily: {
        'sans': ['Poppins','sans-serif'],
        'Poopins': ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}

