import { createRouter, createWebHistory } from "vue-router";
import AllPostsView from "@/views/AllPostsView.vue";

const routes = [
  {
    path: "/",
    name: "allPosts",
    component: AllPostsView,
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/CreatePostView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
