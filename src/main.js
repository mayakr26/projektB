import Vue from 'vue'
import App from './App.vue'
import VueSimpleAlert from "vue-simple-alert";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue & the BootstrapVue icon components plugin
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')