import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog,
    },

    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;