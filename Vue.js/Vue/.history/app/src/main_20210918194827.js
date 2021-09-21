import Vue from 'vue'
import rest from './Restaurant/rest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(rest),
}).$mount('#app')
