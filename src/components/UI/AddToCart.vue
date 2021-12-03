<template>
  <div class="add-to-cart">
    <v-btn
        color="red lighten-2"
        text
        @click="addToCart()"
    >
      <v-icon>shopping_cart</v-icon>
      Add to cart
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      })
    }
  }


  // methods: {
  //   addProduct() {
  //     let userProduct = {
  //       id: this.product.id,
  //       title: this.product.title,
  //       price: this.product.price
  //     };
  //     console.log(typeof userProduct)
  //     return userProduct
  //   }
  // }
}
</script>

<style scoped>

</style>