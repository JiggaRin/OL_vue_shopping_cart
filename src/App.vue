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

  </v-app>
</template>

<script>
import CartModal from './components/UI/CartModal'

export default {
  components: {
    CartModal
  },
  data: () => ({
    drawer: null,
    items: [
      {title: 'Products', icon: 'mdi-view-dashboard'},
      {title: 'Shopping Cart', icon: 'shopping_cart'},
    ],
  }),
}
</script>

<style>

</style>