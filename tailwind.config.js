/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // safelist: ['custom-4xl'],
  theme: {
    fontFamily: {
      sans: ['Gotham SSm A, sans-serif']
    },
    extend: {
      fontSize: {
        'custom-4xl': '2.5rem' // 自定义字体大小
      },
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(54.97% 272.54% at 27.36% -134.72%, rgba(108, 148, 255, .92) 0, rgba(0, 0, 0, .92) 100%)'
      },
      screens: {
        desktop: '1200px'
        // => @media (min-width: 1200px) { ... }
      }
    }
  },
  plugins: []
}
