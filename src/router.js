import Vue from "vue";
import Router from "vue-router";
import Info from "./views/Info.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/info",
        name: "info",
        component: Info
    }
  ]
});