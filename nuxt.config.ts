import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  loading: '~/components/loading.vue',
  head: {
    title: 'nuxt-ts-app-hassan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt TS project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
  ],
  modules: [
    '@nuxtjs/bulma',
    'nuxt-fontawesome'
  ],
  plugins: [
    { src: "~/plugins/auth.ts" }
  ],
  env: {
    apiKey: process.env.apiKey || "apiKey",
    authDomain: process.env.authDomain || "authDomain",
    databaseURL: process.env.databaseURL || "databaseUrl",
    projectId: process.env.projectId || "projectId",
    storageBucket: process.env.storageBucket || "storageBucket",
    messagingSenderId: process.env.messagingSenderId || "messagingSenderId"
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}

export default config;
