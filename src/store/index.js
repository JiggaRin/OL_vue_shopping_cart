import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product'
import cart from "./modules/cart";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product,
        cart
    },
    plugins: [createPersistedState()],
})
