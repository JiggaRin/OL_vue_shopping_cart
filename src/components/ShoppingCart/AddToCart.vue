<template>
  <div class="add-to-cart">
    <v-btn
        color="red lighten-2"
        text
        @click="getProductData(product)"
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
    getProductData() {
      this.$store.dispatch('addToCart', {
          id: this.product.id,
          title: this.product.title,
          price: this.product.price
      })
    }
  }
}
</script>

<style scoped>

</style>