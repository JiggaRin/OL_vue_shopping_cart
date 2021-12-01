<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            dark
            v-bind="attrs"
            v-on="on"
        >
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon>shopping_cart</v-icon>
            shopping basket
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Your purchases</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante
          imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis
          erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit
          eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis,
          ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            <v-icon></v-icon>
            Disagree
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  })
}

</script>

<style scoped>

</style>