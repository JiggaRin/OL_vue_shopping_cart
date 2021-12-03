<template>
  <div>
    <v-carousel
        hide-delimiters
        height="auto"
    >
      <v-carousel-item v-for="product in allProducts"
                       :key="product.id">
        <product-item :product="product"></product-item>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
import {mapGetters} from 'vuex'

export default {
  components: {
    ProductItem
  },
  computed: {...mapGetters(['allProducts']),
  }
}
</script>

<style scoped>

</style>