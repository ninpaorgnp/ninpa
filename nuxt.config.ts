// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  // tailwindcss: {
  //   // This tells the Nuxt Tailwind module to use your config file
  //   configPath: '~/tailwind.config.js',
  //   // Enable viewer in development (optional)
  //   viewer: true,
  // }

  plugins: ["~/plugins/preline.client.ts"],
})