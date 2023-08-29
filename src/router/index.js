import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Produk from "../views/Produk.vue"
import SingleProduk from "../views/SingleProduk.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Contact from "../views/Contact.vue"
import Brands from "../views/Brands.vue"
import Category from "../views/Category.vue";
import Profile from "../views/Profile.vue";
import Order from"../views/Order.vue"

const merk = 'ArtisanAlley';
 
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
        meta: { requiresLogin: true },
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
        requestGuest: true,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        requestGuest: true,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/produk/:slug",
        name: "SingleProduk",
        component: SingleProduk,
        props: true,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    },
    {
        path: '/brands',
        name: 'Brands',
        component: Brands,
        meta: { title: merk + ' | ' + 'Brands' },
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        meta: { title: merk + ' | ' + 'Category' },
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/order/:orderCode",
        name: "Order",
        component: Order,
        props: true,
    },
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
export default router;