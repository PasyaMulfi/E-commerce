import axios from 'axios';

const produk = {
    namespaced: true,
    state: {
        dataProduk: [],
        getProdukId: []
    },
    getters: {
        getAllProduk: (state) => state.dataProduk,
    },
    actions: {
        async fetchProduk({ commit }) {
            try {
                const urlBrand = `https://ecommerce.olipiskandar.com/api/v1/product/latest/8`;
                const produkApi = await axios.get(urlBrand);
                commit('SET_PRODUK', produkApi.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchProdukid({ commit }, slug) {
            try {
                const urlBrand = `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`;
                const produkApi = await axios.get(urlBrand);
                commit('SET_PRODUK_ID', produkApi.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.dataProduk = produk;
        },
        SET_PRODUK_ID(state, produk) {
            state.getProdukId = produk;
        },
    },
};

export default produk;