import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from "@/views/Home.vue";
import Money from "@/views/Money.vue";
import Tags from "@/views/Tags.vue";
import Stats from "@/views/Stats.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path:"/",
      redirect: "/money"
    },
    {
      path: "/money",
      component: Money
    },
    {
      path: "/tags",
      component: Tags
    },
    {
      path: "/stats",
      component: Stats
    },
    {
      path: "*",
      component: NotFound
    }
  ]
})

export default router
