import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Produk from "../components/ProdukComponent.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        requestGuest: true,
    },
    {
        path: "/produk",
        name: "produk",
        component: Produk ,
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});

export default router;  