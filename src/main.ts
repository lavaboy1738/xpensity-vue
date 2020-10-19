import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "./components/layout.vue";
import tagList from "./models/taglist.model";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, faWindowClose} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

Vue.config.productionTip = false

Vue.component("Layout", Layout);
Vue.component("Nav", Nav);

window.tagList = tagList.fetch();
window.findTag = (id: string) => {
  return window.tagList.filter(tag=> tag.id === id)[0]
}
window.createTag = (tagName: string) => {
  const message = tagList.create(tagName);
  if (message === "duplicated") {
    window.alert("Duplicated Tag Name");
  } else if (message === "success") {
    window.alert("Success")
  }
}
window.removeTag = (id: string) => {
  return tagList.remove(id);
}
window.updateTag = (id: string, newTagName: string) => {
  return tagList.update(id, newTagName);
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')