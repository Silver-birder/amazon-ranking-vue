import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
