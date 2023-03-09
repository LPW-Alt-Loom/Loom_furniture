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
      path: "/materials",
      name: "materials",
      component: () => import("../views/OurMaterials.vue"),
    },
    {
      path: "/process",
      name: "process",
      component: () => import("../views/OurProcess.vue"),
    },
    {
      path: "/products/:category",
      name: "products",
      component: () => import("../views/ProductsView.vue"),
    },
    {
      path: "/products/product/:product",
      name: "products-product",
      component: () => import("../views/ProductView.vue"),
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
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () => import("../views/PrivacyPolicy.vue"),
    },
    {
      path: "/legal-notice",
      name: "legal-notice",
      component: () => import("../views/LegalNotice.vue"),
    },
  ],
});

export default router;
