<template>
  <div class="container">
    <div v-if="chosenProductList.length > 0">
      <table class="styled-table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in chosenProductList" :key="item.key">
          <td>{{ item.title }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ item.price }}</td>
          <td>${{ item.price * item.quantity }}</td>
          <td>
            <span class="removeBtn"
                  title="Remove from cart"
                  @click="removeProduct(item)">X</span>
          </td>
        </tr>
        <tr class="active-row">
          <td>Total</td>
          <td></td>
          <td></td>
          <td>${{ cartTotal }}</td>
          <td></td>
        </tr>
        <!-- and so on... -->
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>
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
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>