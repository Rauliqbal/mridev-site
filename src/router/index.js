import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/404.vue"

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
})

export default router;
