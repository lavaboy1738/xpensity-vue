import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "./components/layout.vue";
import tagList from "./models/taglist.model";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

Vue.config.productionTip = false

Vue.component("Layout", Layout);
Vue.component("Nav", Nav);

window.tagList = tagList.fetch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
