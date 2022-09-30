import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";

import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(),
  routes : [
    {
      path: "/",
      name:"Home",
      component: Home,
    },
    {
      path: "/about",
      name:"About",
      component: About,
    },
     {
      path: "/resume",
      name:"Resume",
      component: Resume,
    },
     {
      path: "/about",
      name:"About",
      component: About,
    },
  
    {
      path: "/:pathMatch(.*)*",
      name:"NotFound",
      component: NotFound,
    },
  ]
})
const routes = [
  // {
  //   path: "/",
  //   name:"Home",
  //   component: Home,
  // },
  // {
  //   path: "/about",
  //   name:"About",
  //   component: About,
  // },
  //  {
  //   path: "/resume",
  //   name:"Resume",
  //   component: Resume,
  // },
  //  {
  //   path: "/about",
  //   name:"About",
  //   component: About,
  // },

  // {
  //   path: "/:pathMatch(.*)*",
  //   name:"NotFound",
  //   component: NotFound,
  // },
];



export default router;
