import Vue from 'vue'
import App from './rest.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(rest),
}).$mount('#app')
