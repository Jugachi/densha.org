import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
//import i18n from './i18n';
import en from './locales/en.json'
import jp from './locales/jp.json'
import { aliases, fa } from 'vuetify/iconsets/fa'

library.add(fas, fab)

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: { fa },
  }
})

const i18n = createI18n({
  locale: 'en',
  messages: { en, jp }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Densha De D'; // Default title if none is set
  next();
});

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).use(i18n).use(vuetify).mount('#app')
