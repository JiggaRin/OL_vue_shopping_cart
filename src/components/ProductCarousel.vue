<template>
  <div>
    <v-carousel
        hide-delimiters
        height="auto"
    >
      <v-carousel-item v-for="product in products"
                       :product="product"
                       :key="product.id">
        <product-item :product="product"></product-item>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>