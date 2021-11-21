import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSplide from '@splidejs/vue-splide'



Vue.config.productionTip = false
require('@/assets/css/style.min.css')
require('@/assets/css/style.css')
Vue.use(VueSplide)
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
