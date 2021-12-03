export default {
    state: {
        chosenProducts: [],
        cartCount: 0,
    },
    getters: {
      chosenProductList(state) {
          return state.chosenProducts
      }
    },
    actions: {
        addToCart(ctx, payload) {
            ctx.commit('addToCart', payload)
        }
    },
    mutations: {
        addToCart(state, payload) {
            const isDuplicate = state.chosenProducts.findIndex((product) => product.id === payload.id);
            if(isDuplicate === -1) {
                const product = {
                    ...payload,
                    quantity: 1
                }
                state.chosenProducts.push(product);
            } else {
                state.chosenProducts[isDuplicate].quantity += 1;
            }
            state.cartCount++;
        }
    }
}