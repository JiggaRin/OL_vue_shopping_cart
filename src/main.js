import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VModal from 'vue-js-modal'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  VModal,
  render: h => h(App)
}).$mount('#app')
