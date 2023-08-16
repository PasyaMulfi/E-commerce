import { createStore } from 'vuex';
import auth from './modules/auth';
import produk  from './modules/produk';




const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        produk,
    },
});

export default store;