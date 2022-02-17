module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'DM': ['DM Serif Display', 'serif'],
        'DMSan': ['DM Sans', 'sans-serif']
      },
      width: {
        '128': '32rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'mud': '#003543',
        
        'dark': '#001e26',
        'green': '#00dc82',
        'light-green': '#4de7a8',
        'bor-green': '#03ff9636',
      },
      animation: {
        blob: "blob 7s infinite",
        fade: "fade 1.0s infinite ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        fade: {
          "0%": {
            opacity: "0",

          },

          "100%": {
            opacity: "1",

          },
        },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
