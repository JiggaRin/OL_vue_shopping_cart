export default {
    state: {
        chosenProducts: [],
        cartCount: 0,
    },
    getters: {
        chosenProductList(state) {
            return state.chosenProducts
        },
        getCartCount(state) {
            return state.cartCount
        },
        cartTotal(state) {
            let total = 0
            state.chosenProducts.forEach(product => {
                total += product.price * product.quantity
            })
            return total.toFixed(2)
        },
    },
    actions: {
        addToCart(product, payload) {
            product.commit('addToCart', payload)
        },
        removeProduct(product, payload) {
            product.commit('removeProduct', payload)
        }
    },
    mutations: {
        addToCart(state, payload) {
            const isDuplicate = state.chosenProducts.findIndex((product) => product.id === payload.id)
            if (isDuplicate === -1) {
                const product = {
                    ...payload,
                    quantity: 1
                }
                state.chosenProducts.push(product);
            } else {
                state.chosenProducts[isDuplicate].quantity += 1;
            }
            state.cartCount++;
        },
        removeProduct(state, payload) {
            let index = state.chosenProducts.findIndex((product) => product.id === payload.id)
            let product = state.chosenProducts[index]
            if (index > -1 && product.quantity > 1) {
                product.quantity--
                state.cartCount--
            } else {
                state.chosenProducts.splice(product, 1)
                product.quantity--
                state.cartCount--
            }
        }
    }
}

