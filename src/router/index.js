import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
         title: "Resume",
      },
   },
   {
      path: "/about",
      name: "About",
      component: About,
      meta: {
         title: "About Me",
      },
   },
   {
      path: "/product",
      name: "Product",
      component: Product,
      meta: {
         title: "My Product",
      },
   },
   {
      path: "/project",
      name: "Project",
      component: Project,
      meta: {
         title: "My Portfolio",
      },
   },
   {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
         title: "My Contact",
      },
   },
   {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
      meta: {
         title: "Oopps...",
      },
   },
];

const scrollBehavior = (to, from, savedPosition) => {
   return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   scrollBehavior,
});

router.beforeEach((to, from, next) => {
   document.title = `Rauliqbal - ${to.meta.title}`;
   next();
});

export default router;
