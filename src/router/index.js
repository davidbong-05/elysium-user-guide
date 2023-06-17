// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/getting-started",
        name: "GettingStarted",
        component: () =>
          import(
            /* webpackChunkName: "GettingStarted" */ "@/views/GettingStarted.vue"
          ),
      },
      {
        path: "/manage-nft-collection",
        name: "ManageNftCollection",
        component: () =>
          import(
            /* webpackChunkName: "GettingStarted" */ "@/views/ManageNftCollection.vue"
          ),
      },
      {
        path: "/mint-nft",
        name: "MintNft",
        component: () =>
          import(
            /* webpackChunkName: "GettingStarted" */ "@/views/MintNft.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    }
  },
});

export default router;
