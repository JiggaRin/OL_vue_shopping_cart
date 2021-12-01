<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Shopping Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopping</v-toolbar-title>
      <v-spacer></v-spacer>
      <cart-modal></cart-modal>
    </v-app-bar>
    <v-main>
      <product-carousel :products="products"></product-carousel>
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
  data: () => ({
    drawer: null,
    items: [
      {title: 'Products', icon: 'mdi-view-dashboard'},
      {title: 'Shopping Cart', icon: 'shopping_cart'},
    ],
    products: [
      {
        id: 1,
        src: 'https://i.ebayimg.com/images/g/oK4AAOSw3~dgriCG/s-l1600.jpg',
        price: '$25.12',
        title: 'Gaming Keyboard USB Wired 61 Keys RGB LED Backlit for PS4 PC MAC Office Game',
        model: 'V700',
        features: 'Ergonomic, RGB Backlit, ABS Floating Keycap, Enhanced Function Keys, Illuminated, Plug & Play, Portable'
      },
      {
        id: 2,
        src: 'https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg',
        price: '$29.99',
        title: 'Fiodio Rainbow Membrane Gaming Keyboard, Quiet Wired Computer Keyboard',
        model: 'F260-8294',
        features: '104 Silent Keys, 26 Anti-Ghosting Keys, Spill Resistant, Multimedia Control for PC and Desktop'
      }
    ]
  }),
}
</script>

<style>

</style>