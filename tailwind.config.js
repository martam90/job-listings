module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      cyan: {
        dark: '#5ba4a4',
        grayish: '#effafa', 
        lightGrayish: '#eef6f6',
        darkGrayish: '#7b8e8e',
        veryDarkGrayish: '#2c3a3a',
        white: '#ffffff',
      },
    },
    fontFamily: {
      'sans': ['Spartan', 'sans-serif'],
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      backgroundImage: {
        'header-mobile': "url('./images/bg-header-mobile.svg')",
        'header-desktop': "url('./images/bg-header-desktop.svg')",
      }
    },
    screens: {
      'md': '995px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
