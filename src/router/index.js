import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue"

const routes = [
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
    path: "/:pathMatch(.*)*",
    name:"NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
})

export default router;
