<template>
  <v-app id="inspire">
    <v-app-bar justify="space-between" app>
      <v-toolbar-title>Keyboards</v-toolbar-title>
      <cart-modal></cart-modal>
    </v-app-bar>
    <v-main>
      <product-carousel></product-carousel>
    </v-main>
  </v-app>
</template>

<script>
import CartModal from './components/ShoppingCart/CartModal'
import ProductCarousel from "./components/ProductCarousel";

export default {
  components: {
    CartModal,
    ProductCarousel,
  },
}
</script>

<style>
</style>