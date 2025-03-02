import colors from 'tailwindcss/colors'

module.exports = {
  content: [
      './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        neutral: colors.gray,

      }
    }
  },
  plugins: [
      require('preline/plugin'),
  ],
  safelist: [
    'nuxt-link-active',
    'nuxt-link-exact-active',
  ],
}