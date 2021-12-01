import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VModal,
  render: h => h(App)
}).$mount('#app')
