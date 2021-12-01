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
      <v-btn
          color="orange lighten-2"
          text
      >
        Add to cart
      </v-btn>

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
export default {
  data: () => ({
    show: false,
  }),
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.price {
  margin-top: 1%;
}
</style>