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
import zh from './locales/zh.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import ru from './locales/ru.json'
import de from './locales/de.json'
import ko from './locales/ko.json'
import nl from './locales/nl.json'
import tl from './locales/tl.json'
import el from './locales/el.json'
import th from './locales/th.json'
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
  fallbackLocale: 'en',
  messages: { en, jp, zh, es, fr, ru, de, ko, nl, tl, el, th }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Densha De D'; // Default title if none is set
});


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).use(i18n).use(vuetify).mount('#app')
