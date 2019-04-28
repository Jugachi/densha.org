import Vue from 'vue';
import './plugins/vuetify';
import './stylus/main.styl';
import VueYoutube from 'vue-youtube';
import VueLazyload from 'vue-lazyload';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;

Vue.use(VueYoutube);
Vue.use(VueLazyload, {
  lazyComponent: true,
});
Vue.use(VueI18n);

// TODO:
// https://kazupon.github.io/vue-i18n/started.html#html

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
