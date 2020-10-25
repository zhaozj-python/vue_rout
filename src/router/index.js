import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
import user from "../components/user";
import userDEtail from "../components/userDEtail";

Vue.use(Router)

export default new Router({
  routes: [{path: "/",redirect: "/home"},
    {
      path: '/home',
      name: 'Home',
      component: home
    },
      {
      path: '/user',
      name: 'user',
      component: user
    },
      {path:"/detail/:id/:username/:bir/:content", component: userDEtail}
  ]
})
