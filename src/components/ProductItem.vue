<template>
  <v-card
      class="mx-auto"
      max-width="344"
      style="margin-top: 1%"
  >
    <v-img
        :src="product.src"
        height="200px"
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle class="price">
      <p><strong>Price: {{ product.price }}</strong></p>
    </v-card-subtitle>

    <v-card-actions>

      <add-to-cart :product="product" :key="product.id"></add-to-cart>

      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition class="card-footer">
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ product.features }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import AddToCart from "./ShoppingCart/AddToCart";
import {mapGetters} from "vuex";

export default {
  components: {
    AddToCart
  },
  data: () => ({
    show: false,
  }),
  props: {
    product: {
      type: Object,
    }
  },
  computed: {...mapGetters(['allProducts'])}
}
</script>

<style scoped>
.price {
  margin-top: 1%;
}
</style>