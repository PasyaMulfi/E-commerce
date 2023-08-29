import { createStore } from 'vuex';
import auth from './modules/auth';
import produk from './modules/produk';
import brands from "./modules/brands";
import category from './modules/category';
import cart from "./modules/cart";
import order from "./modules/order"
import user from "./modules/user"




const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
    auth,
    produk,
    brands,
    category,
    cart,
    order,
    user
    },
});

export default store;