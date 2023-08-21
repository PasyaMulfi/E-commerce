import { createStore } from 'vuex';
import auth from './modules/auth';
import produk from './modules/produk';
import brands from "./modules/brands";
import category from './modules/category';




const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
    auth,
    produk,
    brands,
    category
    },
});

export default store;