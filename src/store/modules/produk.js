import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
        singleProduk: [],
        cart: []
    },

    getters: {
        getLatestProduk: (state) => state.produkData,

        //   get single product
        getProdukBySlug: (state) => (produkSlug) => {
            console.log("Fetching single produk by slug:", produkSlug);
            console.log("ProdukData:", state.singleProduk);
            const produk = state.singleProduk;
            console.log("Produk:", produk);
            return produk;
        },

        // get filter product
        getProdukByCategory: (state) => (produkCategory) => {
            const produk = state.produkData.filter(
                (p) => p.category == produkCategory
            );
            console.log(produkCategory);
            console.log(produk);
            return produk;
        },
    },
    actions: {
        async fetchProduk({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/8"
                );
                commit("SET_PRODUK", data.data["data"]);
                console.log(data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // get single product
        async fetchSingleProduk({ commit }, produkSlug) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${produkSlug}`
                );
                commit("SET_SINGLE_PRODUK", response.data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async addToCart({ commit }, produkId) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                    {
                        "variation_id": produkId,
                        "qty": 1,
                        "temp_user_id": null,
                    }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                commit("ADD_TO_CART", response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error);

            }
        },

        // get product filter by category
        // async fetchFilterProduct({ commit }, productCategory) {
        //   try {
        //     const response = await axios.get(
        //       `https://fakestoreapi.com/products/category/${productCategory}`
        //     );
        //     commit("SET_FILTER_PRODUCT", response.data);
        //   } catch (error) {
        //     alert(error);
        //     console.log(error);
        //   }
        // },
    },

    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
        SET_SINGLE_PRODUK(state, produk) {
            state.singleProduk = produk;
        },
        ADD_TO_CART(state, cart) {
            state.cart = cart
        },

        // SET_FILTER_PRODUCT(state, product) {
        //   state.filterProduct = product;
        // },
    },
};

export default produk;