module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'DM': ['DM Serif Display', 'serif'],
        'DMSan': ['DM Sans', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'mud': '#003543',
        'dark': '#001e26',
        'green': '#00dc82',
        'light-green': '#4de7a8',
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
