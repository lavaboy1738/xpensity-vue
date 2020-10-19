import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "./components/layout.vue";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faWindowClose} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

Vue.config.productionTip = false

Vue.component("Layout", Layout);
Vue.component("Nav", Nav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')