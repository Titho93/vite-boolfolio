import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";
import CardDetail from "./components/pages/CardDetail.vue";
import Error404 from "./components/pages/Error404.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/detail/:slug",
      name: "cardDetail",
      component: CardDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      component: Error404,
    },
  ],
});

export { router };
