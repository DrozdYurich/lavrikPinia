import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import TheCard from "@/views/TheCard.vue";
import TheProducts from "@/views/TheProducts.vue";
import TheOrder from "@/views/TheOrder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        { path: "/card", name: "card", component: TheCard },
        { path: "/products", name: "products", component: TheProducts },
        { path: "/order", name: "order", component: TheOrder },
      ],
    },
  ],
});

export default router;
