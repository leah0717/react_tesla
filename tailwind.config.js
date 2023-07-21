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
        desktop: '1200px',
        // => @media (min-width: 1200px) { ... }
        smtop: '600px'
      },
      animation: {
        'push-out': 'push-out 600ms ease-in',
        'dialog-in': 'dialog-in 600ms ease-in',
        'dialog-out': 'dialog-out 1000ms ease-in-out'
      },
      keyframes: {
        'push-out': {
          '0%': { transform: 'translateY(60px)' },
          '100%': { transform: 'translateY(0)' }
        },
        'dialog-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'dialog-out': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' }
        }
      },
      boxShadow: {
        underLine: '0 1px 0 0 black',
        hover: '0 2px 0 0 black'
      },
      colors: {
        indigo: {
          light: '#b3bcf5',
          DEFAULT: '#393C41',
          dark: '#202e78'
        }
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'hover:shadow-hover']
    }
  },
  plugins: []
}
