<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Keyboards</v-toolbar-title>
      <v-spacer></v-spacer>
      <cart-modal></cart-modal>
    </v-app-bar>
    <v-main>
      <product-carousel></product-carousel>
    </v-main>
  </v-app>
</template>

<script>
import CartModal from './components/UI/CartModal'
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