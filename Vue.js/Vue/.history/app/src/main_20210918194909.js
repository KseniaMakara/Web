import Vue from 'vue'
import rest from '/rest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(rest),
}).$mount('#app')
