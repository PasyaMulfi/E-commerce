import axios from 'axios';

const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        loginError: null,
        user: JSON.stringify(localStorage.getItem("user") || null),
        userAddress: {},
        userInfo: {},
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => !!state.user,
        getUserAddress: (state) => state.userAddress,
        getUserInfo: (state) => state.userInfo

    },
    actions: {
        async login({ commit }, credentials) {
            try {
                const response = await axios.post(
                    'https://ecommerce.olipiskandar.com/api/v1/auth/login',
                    credentials
                );
                const token = response.data.access_token;
                const user = response.data.user;

                // Save token to localStorage
                localStorage.setItem('token', token);
                localStorage.setItem("user", JSON.stringify(user));

                commit('SET_TOKEN', token);
                commit('SET_LOGIN_ERROR', null)
                console.log("Token saved:", token);
                return true;
            } catch (error) {
                const errorMessage = error.response.data.message || "Login Failed";
                commit("SET_LOGIN_ERROR", errorMessage);
                console.error(error);
                return false;
            }
        },
        async register({ commit }, credentials) {
            try {
                const response = await axios.post(
                    'https://ecommerce.olipiskandar.com/api/v1/auth/signup',
                    credentials
                );
                const token = response.data.access_token;

                // Save token to localStorage
                localStorage.setItem('token', token);

                commit('SET_TOKEN', token);
                console.log("Token saved:", token);

                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        async getUserInfo({ state, commit }) {
            try {
                const response = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/info",
                    {
                        headers: {
                            Authorization: `Bearer ${state.token}`,
                        }
                    }
                );
                commit("SET_USER_INFO", response.data['user']);
                console.log(response.data['user']);

            } catch (error) {
                console.error(error);
                return null;
            }
        },
        async fetchUser({ commit }) {
            try {
                const token = localStorage.getItem('token');
                const urlUser = 'https://ecommerce.olipiskandar.com/api/v1/user/info';
                const userApi = await axios.get(urlUser, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                commit('SET_USER', userApi.data['user']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async getUserAddress({ state, commit }) {
            try {
                const response = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
                    {
                        headers: {
                            Authorization: `Bearer ${state.token}`,
                        },
                    }
                );
                commit("SET_USER_ADDRESS", response.data.data[0]);
                console.log(response.data.data[0]);
                return response.data;
            } catch (error) {
                console.error(error);
                return null;
            }
        },

        logout({ commit }) {
            // Remove token from localStorage
            const token = localStorage.getItem("token");
            localStorage.removeItem("token");
            commit("SET_TOKEN", "");

            //   Log Token removed
            console.log("Token Removed:", token);
            this.$router.push("/login");
        },
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_LOGIN_ERROR(state, error) {
            state.loginError = error;
        },
        SET_USER(state, user) {
            state.user = user;
            // console.log("User data stored in store:", user);
        },
        SET_USER_ADDRESS(state, addressData) {
            state.userAddress = addressData;
        },
        SET_USER_INFO(state, dataUser ) {
            state.userInfo = dataUser;
        },
    },
};

export default auth;        