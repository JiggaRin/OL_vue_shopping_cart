<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              dark
              v-bind="attrs"
              v-on="on"
          >
            <v-badge left color="green">
              <span slot="badge">{{ getCartCount }}</span>
              <v-icon>shopping_cart</v-icon>
              Cart
            </v-badge>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
                style="align-items: center"
                dark
            >Your stuff
            </v-toolbar>
            <v-card-text>

              <chosen-products-list></chosen-products-list>

            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
              >Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>
<script>

import ChosenProductsList from "./ChosenProductsList";
import {mapGetters} from 'vuex'
export default {
  components: {
    ChosenProductsList
  },
  computed: {...mapGetters(['getCartCount'])}
}

</script>

<style scoped>

</style>