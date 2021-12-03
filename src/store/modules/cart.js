export default {
    actions: {
        addToCart(ctx, payload) {
            ctx.commit('addToCart', payload)
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.chosenProduct = payload
            state.cartCount++
        }
    }
}