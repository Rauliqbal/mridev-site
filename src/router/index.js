import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import Project from "../views/Project.vue";

import NotFound from "../views/NotFound.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/about",
      name: "About",
      component: About,
   },
   {
      path: "/product",
      name: "Product",
      component: Product,
   },
   {
      path: "/project",
      name: "Project",
      component: Project,
   },
   {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
