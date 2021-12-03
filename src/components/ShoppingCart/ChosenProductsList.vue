<template>
  <table class="table">
    <tbody>
    <tr v-for="item in chosenProduct" :key="item">
      <td>{{ item.title }}</td>
      <td>{{ item.price }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
// import {mapGetters} from 'vuex'

export default {
  // computed: {...mapGetters(['chosenProduct']),
  computed: {
    chosenProduct() {
      return this.$store.state.getters.chosenProducts
    }
  },

}
</script>

<style scoped>

</style>