import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/:product",
      name: "products-product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/category/:category",
      name: "category-category",

      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/cart/",
      name: "cart",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/cart/order",
      name: "cart-order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/cart/order/thank-you",
      name: "cart-order-thank-you",
      component: () => import("../views/ConfirmationView.vue"),
    },
  ],
});

export default router;
