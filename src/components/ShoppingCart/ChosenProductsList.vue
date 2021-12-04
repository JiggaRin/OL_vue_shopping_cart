<template>
  <div class="container">
    <div v-if="chosenProductList.length > 0">
      <v-simple-table dark>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Amount
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in chosenProductList"
              :key="item.key"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.price }}</td>
            <td>${{ item.quantity * item.price }}</td>
            <td>
              <span class="removeBtn"
                    title="Remove from cart"
                    @click="removeProduct(item)">X</span>
            </td>
          </tr>
          <tr class="active-row">
            <td>Total Amount:</td>
            <td></td>
            <td></td>
            <td>${{ cartTotal }}</td>
            <td></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="emptyCart" v-else>
      <p class="empty">
        Your cart is empty!
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['chosenProductList', 'cartTotal']),
  },
  methods: {
    removeProduct(item) {
      this.$store.dispatch('removeProduct', item)
    }
  }
}

</script>

<style scoped>
.removeBtn {
  cursor: pointer;
}

.emptyCart {
  text-align: center;
  padding-top: 10%;
}
.empty {
  font-size: 24px;
}
</style>