import axios from 'axios';

const category = {
    namespaced: true,
    state: {
        dataCategory: [],
    },
    getters: {
        getAllCategory: (state) => state.dataCategory,
    },
    actions: {
        async fetchCategory({ commit }) {
            try {
                const urlCategory = 'https://ecommerce.olipiskandar.com/api/v1/all-categories';
                const categoryApi = await axios.get(urlCategory);
                commit('SET_CATEGORY', categoryApi.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_CATEGORY(state, category) {
            state.dataCategory = category;
        },
    },
};

export default category;